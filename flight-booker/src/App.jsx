import { useState } from "react";

import "./App.css";

function App() {
  const [roundTrip, setRoundTrip] = useState(false);
  const [flightDate, setFlightDate] = useState("false");
  const [returnFlightDate, setReturnFlightDate] = useState("false");

  const currentDate = new Date();

  const formatDate = function (currDate) {
    const currYear = currDate.getFullYear();
    const currMonth = currDate.getMonth() + 1;
    const currDay = currDate.getDate();

    return `${currYear}-${String(currMonth).padStart(2, "0")}-${String(
      currDay
    ).padStart(2, "0")}`;
  };

  console.log(formatDate(currentDate));

  return (
    <>
      <h1>Flight booker</h1>
      <input type="date" value={formatDate(currentDate)} />
    </>
  );
}

export default App;
