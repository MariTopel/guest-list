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
    async function fetchGuests() {
      try {
        //this refferences and builds the URL
        const url = `${BASE_URL}/${COHORT}/guests`;
        //awaits the response from the API database
        const response = await fetch(url);
        //if the response is not good then say what the error is
        if (!response.ok) {
          throw new Error(`Network response was NOT OK ${response.status}`);
        }

        //await for the JSON
        const json = await response.json();
        //if the json is not a success then have the console say it didn't go through
        if (!json.success) {
          throw new Error(json.error?.message || "API did not return success");
        }

        setGuests(json.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchGuests();
  }, []);
}
