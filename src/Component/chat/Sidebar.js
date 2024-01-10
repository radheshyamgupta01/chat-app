// Sidebar.js
import React from 'react';

const Sidebar = ({ user }) => {
  return (
    <div className="sidebar">
      <img src={user.image} alt={user.name} className="w-12 h-12 rounded-full" />
      <p>{user.lastMessage}</p>
    </div>
  );
};

export default Sidebar;
