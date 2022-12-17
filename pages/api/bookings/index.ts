import type { NextApiRequest, NextApiResponse } from "next";
import { BookingData } from "../../../components/mock-data";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method == "GET") {
    res.status(200).json(BookingData);
  } else if (req.method == "POST") {
    const newBooking = req.body;

    BookingData.unshift(newBooking);

    res.status(201).json(BookingData);
  }
}
