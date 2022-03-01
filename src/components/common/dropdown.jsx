import React from "react";

const Sign = ({ onChange, name, value, label, sign }) => {
 
  return (
    <>
      <label>{label}</label>
      <select
        name={name}
        id={name}
        className="form-control"
        value={value}
        onChange={onChange}
      >
        <option disacled value="">
          Select Your Sign
        </option>
        {sign.map((m) => {
          return (
            <option value={m} key={m}>
              {m.toUpperCase()}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default Sign;
