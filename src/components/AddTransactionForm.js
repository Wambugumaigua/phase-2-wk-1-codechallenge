import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function AddTransactionForm() {
    const [selectedDate, setSelectedDate] = useState(null); 

    
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <div className="add-transaction-form">
            <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                dateFormat="yyyy-MM-dd" 
                showMonthDropdown 
                showYearDropdown 
                scrollableYearDropdown 
                yearDropdownItemNumber={15} 
                placeholderText="Select Date" 
            />
            
        </div>
    );
}

export default AddTransactionForm;
