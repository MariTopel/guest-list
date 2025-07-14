import React from "react";

//standard map through the guests to make a list of the guests that user can click on
export default function GuestList({ guests, onSelect }) {
  return (
    <ul>
      {guests.map((g) => (
        <li
          key={g.id}
          style={{ cursor: "pointer", padding: "0.5rem 0" }}
          onClick={() => onSelect(g.id)}
        >
          <strong>{g.name}</strong> — {g.email}
        </li>
      ))}
    </ul>
  );
}
