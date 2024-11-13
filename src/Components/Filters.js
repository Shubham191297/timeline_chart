import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Grid from "@mui/material/Grid2";
import { Box } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { TextField } from "@mui/material";
import moment from "moment";
import { useState } from "react";

const Filters = ({
  timeRangeHandler,
  numDays,
  selectedDate,
  dateChangeHandler,
}) => {
  const selectRangeHandler = (value) => {
    timeRangeHandler(value);
  };

  //   const [selectedDate, setSelectedDate] = useState(null);

  //   const handleDateChange = (newDate) => {
  //     setSelectedDate(newDate);
  //   };

  return (
    <Box sx={{ p: 2, m: 2, display: "flex", justifyContent: "space-between" }}>
      <Box sx={{ display: "flex" }}>
        <Grid container spacing={2}>
          <Grid item size={{ xs: 4, md: 8 }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]}>
                <DatePicker
                  label="Today"
                  value={selectedDate}
                  onChange={dateChangeHandler}
                  //   renderInput={(params) => (
                  //     <TextField {...params} sx={{ width: "100%" }} />
                  //   )}
                />
              </DemoContainer>
            </LocalizationProvider>
          </Grid>
          <Grid item size={{ xs: 4, md: 2 }} sx={{ width: "10px" }}>
            <Button variant="outlined" onClick={() => {}}>
              {"<"}
            </Button>
          </Grid>
          <Grid item size={{ xs: 4, md: 2 }} sx={{ width: "10px" }}>
            <Button variant="outlined" onClick={() => {}}>
              {">"}
            </Button>
          </Grid>
        </Grid>
      </Box>

      <ButtonGroup variant="contained" aria-label="Basic button group">
        <Button
          variant={numDays === 1 ? "contained" : "outlined"}
          onClick={() => {
            selectRangeHandler(1);
          }}
        >
          1 Day
        </Button>
        <Button
          style={{
            borderLeft: "none",
          }}
          variant={numDays === 2 ? "contained" : "outlined"}
          onClick={() => {
            selectRangeHandler(2);
          }}
        >
          2 Day
        </Button>
        <Button
          style={{
            borderLeft: "none",
          }}
          variant={numDays === 7 ? "contained" : "outlined"}
          onClick={() => {
            selectRangeHandler(7);
          }}
        >
          1 Week
        </Button>
        <Button
          style={{
            borderLeft: "none",
            borderRight: "none",
          }}
          variant={numDays === 14 ? "contained" : "outlined"}
          onClick={() => {
            selectRangeHandler(14);
          }}
        >
          2 Week
        </Button>
        <Button
          variant={numDays === 30 ? "contained" : "outlined"}
          onClick={() => {
            selectRangeHandler(30);
          }}
        >
          1 Month
        </Button>
      </ButtonGroup>
    </Box>
  );
};

export default Filters;
