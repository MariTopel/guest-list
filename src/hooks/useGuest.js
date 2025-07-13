//this one just picks up on ONE guest entry by id not all of them
import { useState, useEffect } from "react";
import { BASE_URL, COHORT } from "../api/config";

//hook that pulls in guest from id along with the needed error and loading status for debugging
export default function useGuest(id) {
    const[guest, setGuest] = useState(null);
    const[loading, setLoading] = useState(false);
    const[error, setError] = useState(null);

    useEffect(() => {
        if (id === null) return;

          async function fetchGuest() {
    setLoading(true);
    try {

      const url = `${BASE_URL}/${COHORT}/guests/${id}`;
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`Network error (${res.status})`);
      }
      const json = await res.json();
      if (!json.success) {
        throw new Error(json.error?.message || 'API success: false');
      }

      setGuest(json.data);
    } catch (err) {

      setError(err);
    } finally {

      setLoading(false);
    }
  }

  fetchGuest();



    }[id];)
}