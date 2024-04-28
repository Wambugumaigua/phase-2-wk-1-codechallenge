import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Transaction from './transaction'; 

import DatePicker from 'react-datepicker'; 
import 'react-datepicker/dist/react-datepicker.css';

function App() {
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [amount, setAmount] = useState('');
    const [transactions, setTransactions] = useState([]);
    const [searchTransactions, setSearchTransactions] = useState('');
    const [selectedDate, setSelectedDate] = useState(null); 
    const [dateError, setDateError] = useState(''); 

    const handleDescriptionChange = (e) => setDescription(e.target.value);
    const handleCategoryChange = (e) => setCategory(e.target.value);
    const handleAmountChange = (e) => setAmount(e.target.value);
    const handleSearchChange = (e) => setSearchTransactions(e.target.value);
    
    
    const handleDateChange = (date) => {
        setSelectedDate(date);
        
        
        if (!date) {
            setDateError('Please select a date.');
        } else {
            setDateError('');
        }
    };

    const addTransaction = () => {
        const newTransaction = { selectedDate, description, category, amount };
        setTransactions([...transactions, newTransaction]);
        setDescription('');
        setCategory('');
        setAmount('');
    };

    const allTransactions = [...transactions, 
        { date: "2024-04-20", description: "Sports", category: "Entertainment", amount: 3000}, 
        { date: "2024-04-19", description: "Tourism", category: "Entertainment", amount: 4000},
        { date: "2024-04-18", description: "KFC", category: "Food", amount: 11000}, 
        { date: "2024-04-17", description: "Moringa School", category: "Education", amount: 68000},
    ];

    const filteredTransactions = allTransactions.filter((transaction) =>
        transaction.description.toLowerCase().includes(searchTransactions.toLowerCase())
    );

    return (
        <div className='App'>
            <h1 className='header'>The Royal Bank of Flatiron</h1>
            <div className='search'>
                <input
                    type='text'
                    placeholder='Search Transaction Here'
                    value={searchTransactions}
                    onChange={handleSearchChange}
                />
            </div>
            <div className='addTransaction'>
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
                {dateError && <div className="error">{dateError}</div>} {}
                <input
                    type='text'
                    placeholder='Description'
                    value={description}
                    onChange={handleDescriptionChange}
                />
                <input
                    type='text'
                    placeholder='Category'
                    value={category}
                    onChange={handleCategoryChange}
                />
                <input
                    type='text'
                    placeholder='Amount'
                    value={amount}
                    onChange={handleAmountChange}
                />
                <button
                    className='addTransaction'
                    onClick={addTransaction}>Add Transaction
                </button>
            </div>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <Transaction transactions={filteredTransactions} />
            </table>
        </div>
    );
}

export default App;

