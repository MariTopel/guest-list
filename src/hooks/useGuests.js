//this creates a reusable hook that fetches BASE_URL + COHORT / guests AKA the guest list from the API
//i want this to track loading and errors because having the habit of error catching is useful for the future
//returns the array of guest objects.

import { useState, useEffect } from "react";
import { BASE_URL, COHORT } from "../api/config";

//this reusable hook fetches the list of guests
export default function useGuests() {
  //this State is the array of guests
  const [guests, setGuests] = useState([]); //starts as empty array
  //this State is if program is still waiting for the data
  const [loading, setLoading] = useState(true); //the reason it starts as true is because it is assuming it is loading by default until told otherwise
  // this State is to catch errors
  const [error, setError] = useState(null); //the null is because by default there are no errors until it is updated to have one

  useEffect(() => {
    const url = `${BASE_URL}/${COHORT}/guests`;
  }, []);
}
