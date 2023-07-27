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
        <div className=" flex w-[500px] justify-between px-4 py-14 text-xl">
            <div className="flex flex-col ">
                <label htmlFor="startdate" className='text-violet-600 font-semibold' >
                    From&nbsp;
                </label>
                {/*<DatePicker*/}
                {/*    selected={startDate}*/}
                {/*    onChange={(date) => setStartDate(date!)}*/}
                {/*    // open*/}
                {/*/>*/}
                <input type="date"
                       id="startdate"
                       onChange={(date) => setStartDate(new Date(date.target.value))}/>
            </div>

            <div className="flex flex-col ">
                <label htmlFor="enddate" className='text-violet-600 font-semibold'>
                    Until&nbsp;
                </label>
                {/*<DatePicker*/}
                {/*    selected={endDate}*/}
                {/*    onChange={(date) => setEndDate(date!)}*/}
                {/*    // open*/}
                {/*/>*/}
                <input type="date"
                       id="enddate"
                       onChange={(date) => setEndDate(new Date(date.target.value))}/>
            </div>
        </div>
    );
};

export default NewDatePicker;
