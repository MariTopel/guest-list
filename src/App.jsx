import React, { useState } from "react";
import GuestList from "./components/GuestList";
import GuestDetails from "./components/GuestDetails";
import useGuests from "./hooks/useGuests";
import useGuest from "./hooks/useGuest";

//renders the whole thingy
export default function App() {
  //
  const { guests, loading: listLoading, error: listError } = useGuests();

  const [selectedId, setSelectedId] = useState(null);

  const {
    guest,
    loading: detailLoading,
    error: detailError,
  } = useGuest(selectedId);

  if (listLoading) return <p>Loading guest list…</p>;
  if (listError) return <p>Error loading list: {listError.message}</p>;

  if (selectedId !== null) {
    //added a check for !guest due to rendering issue with the guest not loading in fast enough so this makes it wait or something i hope
    if (detailLoading || !guest) return <p>Loading guest details…</p>;
    if (detailError) return <p>Error loading details: {detailError.message}</p>;
    return <GuestDetails guest={guest} onBack={() => setSelectedId(null)} />;
  }

  return <GuestList guests={guests} onSelect={setSelectedId} />;
}
