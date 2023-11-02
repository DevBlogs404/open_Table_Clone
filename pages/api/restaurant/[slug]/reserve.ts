import { findAvailableTables } from "@/services/restaurant/findAvailableTables";
import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { slug, day, time, partySize } = req.query as {
      slug: string;
      day: string;
      time: string;
      partySize: string;
    };

    // TODO ---->   VALIDATE THE FIELDS AS DONE IN AUTHENTICATION
    const {
      bookerEmail,
      bookerPhone,
      bookerFirstName,
      bookerLastName,
      bookerOcassion,
      bookerRequest,
    } = req.body;

    const restaurants = await prisma.restaurant.findUnique({
      where: {
        slug: slug,
      },
      select: {
        id: true,
        tables: true,
        open_time: true,
        close_time: true,
      },
    });

    if (!restaurants) {
      return res.status(400).json({
        errorMessage: "Restaurant not found!",
      });
    }

    if (
      new Date(`${day}T${time}`) <
        new Date(`${day}T${restaurants.open_time}`) ||
      new Date(`${day}T${time}`) > new Date(`${day}T${restaurants.close_time}`)
    ) {
      return res.status(400).json({
        errorMessage: "Restaurant is not open at this time!",
      });
    }

    const searchTimesWithTables = await findAvailableTables({
      day,
      time,
      res,
      restaurants,
    });

    if (!searchTimesWithTables) {
      return res.status(400).json({
        errorMessage: "Invalid Request",
      });
    }

    const seacrhTimeWithTable = searchTimesWithTables.find((t) => {
      return t.date.toISOString() === new Date(`${day}T${time}`).toISOString();
    });

    if (!seacrhTimeWithTable) {
      return res.status(400).json({
        errorMessage: "no available tables, cannot book!",
      });
    }

    const tablesCount: {
      2: number[];
      4: number[];
    } = {
      2: [],
      4: [],
    };

    seacrhTimeWithTable.tables.forEach((table) => {
      if (table.seats === 2) {
        tablesCount[2].push(table.id);
      } else {
        tablesCount[4].push(table.id);
      }
    });

    const tablesToBook: number[] = [];
    let seatsRemaining = parseInt(partySize);

    while (seatsRemaining > 0) {
      if (seatsRemaining >= 3) {
        if (tablesCount[4].length) {
          tablesToBook.push(tablesCount[4][0]);
          tablesCount[4].shift();
          seatsRemaining = seatsRemaining - 4;
        } else {
          tablesToBook.push(tablesCount[2][0]);
          tablesCount[2].shift();
          seatsRemaining = seatsRemaining - 2;
        }
      } else {
        if (tablesCount[2].length) {
          tablesToBook.push(tablesCount[2][0]);
          tablesCount[2].shift();
          seatsRemaining = seatsRemaining - 2;
        } else {
          tablesToBook.push(tablesCount[4][0]);
          tablesCount[4].shift();
          seatsRemaining = seatsRemaining - 4;
        }
      }
    }

    const booking = await prisma.booking.create({
      data: {
        number_of_people: parseInt(partySize),
        booking_time: new Date(`${day}T${time}`),
        booker_email: bookerEmail,
        booker_phone: bookerPhone,
        booker_first_name: bookerFirstName,
        booker_last_name: bookerLastName,
        booker_occasion: bookerOcassion,
        booker_request: bookerRequest,
        restaurant_id: restaurants.id,
      },
    });

    const bookingsOnTablesData = tablesToBook.map((table_id) => {
      return {
        table_id,
        booking_id: booking.id,
      };
    });

    await prisma.bookingOnTables.createMany({
      data: bookingsOnTablesData,
    });

    return res.status(200).json(booking);
  }
}

// http://localhost:3000/api/restaurant/vivaan-fine-indian-cuisine-ottawa/reserve?day=2023-10-18&time=10:00:00.000Z&partySize=4
