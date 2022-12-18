export type Booking = {
  customer?: string;
  type?: string;
  origin: string;
  destination: string;
  hscode?: string;
  remarks?: string;
  id: string;
  booking_id: string;
  booking_on: string;
  status: string;
  eta: string;
  requested_by: string;
  quotes: QuoteData[];
};

export type QuoteData = {
  liner: string;
  free_days: string;
  charges: string;
  frieght_type: string;
  currency: string;
  buy: string;
  sell: string;
  unit: string;
  tax: string;
};

export type BookingRequest = {
  quote_id: string;
  quote_requested_on: string;
  origin: string;
  destination: string;
  status: string;
  eta: string;
  requested_by: string;
};

export const BookingData = [
  {
    booking_id: "DJNDBS",
    booking_on: "2022-12-17T10:18:03.307Z",
    origin: "Chennai",
    destination: "Pune",
    status: "Booking created",
    eta: "20 Nov",
    requested_by: "Admin",
  },
  {
    booking_id: "YJFDBS",
    booking_on: "2022-12-07T10:18:03.307Z",
    origin: "Bangalore",
    destination: "Delhi",
    status: "Vessal Arrived",
    eta: "1 Jan",
    requested_by: "Admin",
  },
  {
    booking_id: "MJFBDS",
    booking_on: "2021-12-17T10:18:03.307Z",
    origin: "Pune",
    destination: "Mumbai",
    status: "Booking created",
    eta: "31 Jul",
    requested_by: "Admin",
  },
  {
    booking_id: "SLNDUS",
    booking_on: "2019-12-17T10:18:03.307Z",
    origin: "Chennai",
    destination: "Pune",
    status: "Booking created",
    eta: "21 Nov",
    requested_by: "Admin",
  },
  {
    booking_id: "UDBDBS",
    booking_on: "2018-12-17T10:18:03.307Z",
    origin: "Japan",
    destination: "Canada",
    status: "Booking created",
    eta: "20 Nov",
    requested_by: "Admin",
  },
  {
    booking_id: "DJ45BS",
    booking_on: "2020-12-17T10:18:03.307Z",
    origin: "Innvas",
    destination: "Osaka",
    status: "Booking created",
    eta: "08 Nov",
    requested_by: "Admin",
  },
  {
    booking_id: "DJ45BS",
    booking_on: "2020-12-17T10:18:03.307Z",
    origin: "Innvas",
    destination: "Osaka",
    status: "Booking created",
    eta: "08 Nov",
    requested_by: "Admin",
  },
  {
    booking_id: "DJ45BS",
    booking_on: "2020-12-17T10:18:03.307Z",
    origin: "Innvas",
    destination: "Osaka",
    status: "Booking created",
    eta: "08 Nov",
    requested_by: "Admin",
  },
];

export const BookingRequestData: BookingRequest[] = [
  {
    quote_id: "DJNDBS",
    quote_requested_on: "2022-12-17T10:18:03.307Z",
    origin: "Chennai",
    destination: "Pune",
    status: "Booking created",
    eta: "20 Nov",
    requested_by: "Admin",
  },
  {
    quote_id: "YJFDBS",
    quote_requested_on: "2022-12-07T10:18:03.307Z",
    origin: "Bangalore",
    destination: "Delhi",
    status: "Vessal Arrived",
    eta: "1 Jan",
    requested_by: "Admin",
  },
  {
    quote_id: "MJFBDS",
    quote_requested_on: "2021-12-17T10:18:03.307Z",
    origin: "Pune",
    destination: "Mumbai",
    status: "Booking created",
    eta: "31 Jul",
    requested_by: "Admin",
  },
  {
    quote_id: "SLNDUS",
    quote_requested_on: "2019-12-17T10:18:03.307Z",
    origin: "Chennai",
    destination: "Pune",
    status: "Booking created",
    eta: "21 Nov",
    requested_by: "Admin",
  },
  {
    quote_id: "UDBDBS",
    quote_requested_on: "2018-12-17T10:18:03.307Z",
    origin: "Japan",
    destination: "Canada",
    status: "Booking created",
    eta: "20 Nov",
    requested_by: "Admin",
  },
  {
    quote_id: "DJ45BS",
    quote_requested_on: "2020-12-17T10:18:03.307Z",
    origin: "Innvas",
    destination: "Osaka",
    status: "Booking created",
    eta: "08 Nov",
    requested_by: "Admin",
  },
  {
    quote_id: "DJ45BS",
    quote_requested_on: "2020-12-17T10:18:03.307Z",
    origin: "Innvas",
    destination: "Osaka",
    status: "Booking created",
    eta: "08 Nov",
    requested_by: "Admin",
  },
  {
    quote_id: "DJ45BS",
    quote_requested_on: "2020-12-17T10:18:03.307Z",
    origin: "Innvas",
    destination: "Osaka",
    status: "Booking created",
    eta: "08 Nov",
    requested_by: "Admin",
  },
];
