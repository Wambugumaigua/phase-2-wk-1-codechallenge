import React from "react";

function Transaction({ transactions }) {
 

  
  const showTransactions = transactions.map((transactions, index) => (
    <tr key={index}>
      <td>{transactions.date}</td>
      <td>{transactions.description}</td>
      <td>{transactions.category}</td>
      <td>{transactions.amount}</td>
    </tr>
  ));

 

  
  return (
    <tbody>
     {showTransactions}
    </tbody>
  )
}

export default Transaction;