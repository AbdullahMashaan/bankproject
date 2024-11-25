import React, { useState } from 'react';

function UserHome() {
  const [transactionType, setTransactionType] = useState('deposit');

  const handleDepositClick = () => {
    setTransactionType('deposit');
  };

  const handleWithdrawClick = () => {
    setTransactionType('withdraw');
  };

  return (
    
    <div className="user-home-page">
      <div className="balance-container">
        <h1>Available Balance:</h1>
        <h1>1000 KD</h1>
      </div>

      <div className="transaction-container">
        <button
          onClick={handleDepositClick}
          className={`transaction-button ${transactionType === 'deposit' ? 'active' : ''}`}
        >
          Deposit
        </button>
        
        <button
          onClick={handleWithdrawClick}
          className={`transaction-button ${transactionType === 'withdraw' ? 'active' : ''}`}
        >
          Withdraw
        </button>
        
        <form>
          <input type="number" placeholder="Amount" className="input-field" />
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default UserHome;
