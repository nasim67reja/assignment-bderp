import React, { useState } from "react";

const InputNum = ({ title }) => {
  return (
    <div className="flex column gap-05">
      <label htmlFor="number">{title}</label>
      <input type="number" id="number" />
    </div>
  );
};

const DropDown = ({ label }) => {
  const [dropDownIsOpen, setDropDownIsOpen] = useState(false);
  const [value, setValue] = useState("Please Search");
  return (
    <div className="relative">
      <div className="flex column gap-05">
        <h4>{label}</h4>
        <div
          className="box relative"
          onClick={() => setDropDownIsOpen((prevSt) => !prevSt)}
        >
          {value}

          {!dropDownIsOpen && (
            <span className="absolute icon">
              <ion-icon name="arrow-dropdown"></ion-icon>
            </span>
          )}

          {dropDownIsOpen && (
            <span className="absolute icon">
              <ion-icon name="arrow-dropup"></ion-icon>
            </span>
          )}
        </div>
      </div>
      {dropDownIsOpen && (
        <div className="absolute drop-down">
          <input
            list="data"
            autoFocus
            onChange={(e) => setValue(e.target.value)}
          />
          <datalist id="data">
            <option> Bangladesh</option>
            <option> India</option>
          </datalist>
        </div>
      )}
    </div>
  );
};

const UserInfoCol = ({ heading }) => {
  return (
    <div className="column flex gap-2 flex-1">
      <h2>{heading}</h2>
      <h3>Attention</h3>
      <input type="text" placeholder="Enter person/site name" />
      <DropDown label="Country" />
      <DropDown label="Devision/State" />
      <DropDown label="District" />
      <DropDown label="City/Sub District/Thana" />
      <DropDown label="Union/Area" />
      <DropDown label="Zipcode" />
      <DropDown label="Street Address/Village" />

      <InputNum title="House/suite/apartment no" />
      <InputNum title="Phone" />
      <InputNum title="Fax" />
    </div>
  );
};

export default UserInfoCol;
