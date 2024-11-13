import "./App.css";
import Chart from "./Components/Chart";
import Filters from "./Components/Filters";
import { useState } from "react";

function App() {
  const [numDays, setNumDays] = useState(1);
  const [dateText, setDateText] = useState(null);

  const timeRangeHandler = (daysValue) => {
    setNumDays(daysValue);
  };

  const dateChangeHandler = (dateValue) => {
    setDateText(dateValue);
  };

  return (
    <div className="App">
      <Filters
        timeRangeHandler={timeRangeHandler}
        numDays={numDays}
        dateChangeHandler={dateChangeHandler}
        selectedDate={dateText}
      />
      <Chart
        numDays={numDays}
        key={`${numDays} ${dateText}`}
        dateValue={dateText}
      />
    </div>
  );
}

export default App;
