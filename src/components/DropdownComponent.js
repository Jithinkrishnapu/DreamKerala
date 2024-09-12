import React from "react";

export default function DropdownComponent() {
  return (
    <select className="">
      <option data-display="Booking for">Booking for</option>
      <option value={1}>Classic Tent</option>
      <option value={1}>Forest Camping</option>
      <option value={1}>Small Trailer</option>
      <option value={1}>Tree House Tent</option>
      <option value={1}>Tent Camping</option>
      <option value={1}>Couple Tent</option>
    </select>
  );
}
