import { times } from "@/data";
import { PrismaClient, Table } from "@prisma/client";
import { NextApiResponse } from "next";

const prisma = new PrismaClient();

export const findAvailableTables = async ({
  day,
  time,
  restaurants,
  res,
}: {
  day: string;
  time: string;
  restaurants: {
    tables: Table[];
    open_time: string;
    close_time: string;
  };
  res: NextApiResponse;
}) => {
  const searchTimes = times.find((t) => {
    return t.time === time;
  })?.searchTimes;

  if (!searchTimes) {
    return res.status(400).json({
      errorMessage: "Invalid Request",
    });
  }

  const bookings = await prisma.booking.findMany({
    where: {
      booking_time: {
        gte: new Date(`${day}T${searchTimes[0]}`),
        lte: new Date(`${day}T${searchTimes[searchTimes.length - 1]}`),
      },
    },
    select: {
      booking_time: true,
      number_of_people: true,
      tables: true,
    },
  });

  const bookingTimeObject: { [key: string]: { [key: number]: true } } = {};

  bookings.forEach((booking) => {
    bookingTimeObject[booking.booking_time.toISOString()] =
      booking.tables.reduce((obj, table) => {
        return {
          ...obj,
          [table.table_id]: true,
        };
      }, {});
  });

  const tables = restaurants.tables;

  const searchTimesWithTables = searchTimes.map((searchTime) => {
    return {
      date: new Date(`${day}T${searchTime}`),
      time: searchTime,
      tables,
    };
  });

  searchTimesWithTables.forEach((t) => {
    t.tables = t.tables.filter((table) => {
      if (bookingTimeObject[t.date.toISOString()]) {
        if (bookingTimeObject[t.date.toISOString()][table.id]) return false;
      }
      return true;
    });
  });

  return searchTimesWithTables;
};
