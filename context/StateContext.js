import React, { createContext, useContext, useState, useEffect } from "react";
// import { BookingData, BookingRequestData } from ".././components/mock-data";
const Context = createContext();

export const StateContext = ({ children }) => {
  const getBookingsItems = () => {
    if (typeof window !== "undefined") {
      let list = localStorage.getItem("bookings");
      console.log(list);
      if (list) {
        return JSON.parse(localStorage.getItem("bookings"));
      } else {
        return [];
      }
    }
  };
  const getQuotesItems = () => {
    if (typeof window !== "undefined") {
      let list = localStorage.getItem("quotes");
      console.log(list);
      if (list) {
        return JSON.parse(localStorage.getItem("quotes"));
      } else {
        return [];
      }
    }
  };
  const [bookingsData, setBookingsData] = useState(getBookingsItems());
  const [qoutesData, setQuotesData] = useState(getQuotesItems());
  const [isLoggedin, setIsLoggedin] = useState(false);
  useEffect(() => {
    localStorage.setItem("bookings", JSON.stringify(bookingsData));
  }, [bookingsData]);

  useEffect(() => {
    localStorage.setItem("quotes", JSON.stringify(qoutesData));
  }, [qoutesData]);

  //   var newBooking = ;
  const AddQuote = (item) => {
    // const newArr = boo
    setQuotesData([...qoutesData, item]);
  };

  const addQuoteRates = (item) => {
    console.log(item, "bhaiiii");

    const updateQuotesList = qoutesData.map((element) => {
      if (element.quote_id === item.quote_id) {
        return {
          ...element,
          quotes: [...element.quotes, item.quotes],
        };
      }
      return element;
    });
    console.log(updateQuotesList, "jdbsjdbjb");
    setQuotesData(updateQuotesList);
  };
  console.log(qoutesData, "babababa");

  const AddBooking = (item) => {
    const updateQuotesList1 = qoutesData.filter((elm) => {
      return elm.quote_id !== item.quote_id;
    });
    setQuotesData(updateQuotesList1);
    setBookingsData([...bookingsData, item]);
  };
  return (
    <Context.Provider
      value={{
        bookingsData,
        setBookingsData,
        AddQuote,
        qoutesData,
        addQuoteRates,
        setIsLoggedin,
        isLoggedin,
        AddBooking,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
