import React from 'react';


function Home() {



  return (
    <div className="register-container">
      <h1>National Bank of Coded</h1>
      <form>
        <input type="text" placeholder="Username" className="input-field" />
        <input type="password" placeholder="Password" className="input-field" />
        <input type="file" accept="image/*" className="input-field" />
        <button type="submit" className="register-button">Register</button>
      </form>
    </div>
  );
}

export default Home;
