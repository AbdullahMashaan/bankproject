import React from 'react';

function Profile() {
  return (
    <div>
      <h1>Profile</h1>
      <form>
      
        <input type="file" accept="image/*" />
        <button type="submit">Save</button>
      </form>
     
    </div>
  );
}

export default Profile;
