import React, { useEffect } from "react";
import Link from "next/link";
import { BsBagCheckFill } from "react-icons/bs";
import { runFireworks } from "../../utils/firecrackers";
const Success = () => {
  useEffect(() => {
    runFireworks();
  }, []);
  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Thank you for your Booking!</h2>
        <p className="email-msg">Check your email inbox for reciept</p>
        <p className="description">
          If you have any questions please email on
          <a className="email" href="mailto:order@gmail.com">
            order.example.com
          </a>
        </p>
        <Link href={"/bookings"}>
          <button type="button" width={"300px"} className="btn-1234">
            View Booking
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
