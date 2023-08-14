import React, {useState} from "react";

const DatePicker = () => {
    const [value, setValue] = useState({
        startDate: new Date(),
        endDate: new Date().setMonth(11),
    });

    const handleValueChange = (newValue: any) => {
        console.log("newValue:", newValue);
        setValue(newValue);
    };

    return (
        <div>
            {/*<Datepicker*/}
            {/*    containerClassName="relative mt-8"*/}
            {/*    displayFormat={"DD/MM/YYYY"}*/}
            {/*    showFooter={true}*/}
            {/*    showShortcuts={true}*/}
            {/*    value={value}*/}
            {/*    onChange={handleValueChange}*/}
            {/*/>*/}
        </div>

    );
};
export default DatePicker;
