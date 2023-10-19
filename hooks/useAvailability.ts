import { Times } from "@/utils/convertToDisplayTime";
import axios from "axios";
import { useState } from "react";

type Availabilities = {
  time: Times;
  available: boolean;
};

export default function useAvailability() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState<Availabilities[] | null>(null);

  const fetchAvailability = async ({
    slug,
    day,
    time,
    partySize,
  }: {
    slug: string;
    day: string;
    time: string;
    partySize: string;
  }) => {
    // console.log({
    //   slug,
    //   day,
    //   time,
    //   partySize,
    // });
    // return;

    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:3000/api/restaurant/${slug}/availability?day=${day}&time=${time}&partySize=${partySize}`
      );
      setData(response.data);
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      setError(error.response.data.errorMessage);
    }
  };

  return {
    loading,
    error,
    data,
    fetchAvailability,
  };
}
