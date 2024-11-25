import React from 'react';

function Transactions() {
  return (
    <div className="transactions-page">
      <h1>Transactions</h1>
      <input type="text" placeholder="Search Transactions" className="search-input" />
      <div className="button-container">
        <button>All</button>
        <button>Deposit</button>
        <button>Withdrawal</button>
        <button>Transfer</button>
      </div>
      <div className="date-inputs">
        <input type="date" placeholder="Start Date" className="date-input" />
        <input type="date" placeholder="End Date" className="date-input" />
      </div>
    </div>
  );
}


export default Transactions;
