import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const NewDatePicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <div className="flex gap-8 px-4 py-4">
      <div className="flex justify-center gap-1">
        From
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date!)}
          open
        />
      </div>

      <div className="flex justify-center gap-1">
        Until
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date!)}
          open
        />
      </div>
    </div>
  );
};

export default NewDatePicker;
