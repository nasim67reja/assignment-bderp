import React from "react";

const InputNum = ({ title }) => {
  return (
    <div className="flex column gap-05">
      <label htmlFor="number">{title}</label>
      <input type="number" id="number" />
    </div>
  );
};

const UserInfoCol = ({ heading }) => {
  return (
    <div className="column flex gap-1">
      <h2>{heading}</h2>
      <h3>Attention</h3>
      <input type="text" placeholder="Enter person/site name" />
      <InputNum title="House/suite/apartment no" />
      <InputNum title="Phone" />
      <InputNum title="Fax" />
    </div>
  );
};

export default UserInfoCol;
