import React from "react";

export default function DropdownComponent({ id, name, required, options, defaultOption }) {
  return (
    <select id={id} name={name} required={required} style={{paddingLeft:21}} className="">
      <option data-display={defaultOption}>{defaultOption}</option>
      {options?.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
