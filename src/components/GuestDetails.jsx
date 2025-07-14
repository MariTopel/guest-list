// src/components/GuestDetails.jsx

import React from "react";

//this will render the details of the guest when user clicks on one from the guest list render
export default function GuestDetails({ guest, onBack }) {
  return (
    <div>
      <h2>{guest.name}</h2>
      <p>
        <strong>Email:</strong> {guest.email}
      </p>
      <p>
        <strong>Phone:</strong> {guest.phone}
      </p>
      <p>
        <strong>Job:</strong> {guest.job}
      </p>
      <p>
        <strong>Bio:</strong> {guest.bio}
      </p>
      <button onClick={onBack}>← Back to list</button>
    </div>
  );
}
