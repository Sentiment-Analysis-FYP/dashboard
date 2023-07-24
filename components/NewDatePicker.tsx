import React, {useEffect, useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface NewDatePickerProps {
    setDates: React.Dispatch<React.SetStateAction<Date[]>>
}

const NewDatePicker = (props: NewDatePickerProps) => {
    const {setDates} = props

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    useEffect(() => {
        // setDates([startDate, endDate])
    }, [startDate, endDate])


    return (
        <div className="absolute flex gap-8 px-4 pt-4 ml-[550px] mt-14">
            <div className="flex justify-center">
                From&nbsp;
                <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date!)}
                    open
                />
            </div>

            <div className="flex justify-center">
                Until&nbsp;
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
