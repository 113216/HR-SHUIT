import React from 'react';
import "../Top-Bar/Topbar.css"
import { NotificationsOutlined } from '@mui/icons-material';

function Topbar({ username }) {
  let loginName = "Gokul"; // Default login name

  if (username === "gokul@gmail.com" ) {
    loginName = "Gokul";
  } else if (username === "karthi@gmail.com" ) {
    loginName = "Karthi";
  } else if (username === "jhon@gmail.com") {
    loginName = "JhonHR";
  }

  return (
    <div className="topbar">
      <div className="profile">
        <div className="notification">
          <span className="notification-symbol">
            <NotificationsOutlined fontSize="small" />
          </span>
        </div>
        <div><span className="profile-name">{loginName}</span></div>
        <div className="profile-image-container">
          <img src="https://static.vecteezy.com/system/resources/previews/009/379/787/original/man-face-clipart-design-illustration-free-png.png" alt="Profile" className="profile-image" />
        </div>
      </div>
    </div>
  );
}

export default Topbar;
