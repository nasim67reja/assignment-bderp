import React from "react";
// import { data } from "../data";
import UserInfoCol from "./UserInfoCol";

const NewCustomer = () => {
  return (
    <div className="flex justify-center item-center gap-6 container">
      <UserInfoCol heading="Billing Address" />
      <UserInfoCol heading="Shipping Address" />
    </div>
  );
};

export default NewCustomer;
