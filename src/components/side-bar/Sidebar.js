import React from 'react';
import { Link } from 'react-router-dom';
import '../side-bar/SideBar.css';
import sidebarLogo from '../assets/cloudside-logo 1.png';

export default function Sidebar() {
  const currentUser = 'gokul@gmail.com'; // Replace with the actual logged-in user's email

  const shouldShowInterview = currentUser === 'gokul@gmail.com' || currentUser === 'karthi@gmail.com';
  const shouldShowCurrentInterview = currentUser === 'jhon@gmail.com';

  return (
    <div className="sidebar" style={{ minHeight: "100vh", width: "16vw", float: "left", border: "1px solid #d9d9d9",position:"fixed" }}>
      <div className="dashboardLogo">
        <img className="sidebar-logo" src={sidebarLogo} alt="Sidebar Logo" />
      </div>
      <div className="menu">
        <div className="header">MENU</div>
        <Link to="/dashboard" className="item select">
          <i className="icon dashboard"></i>
          <span>Dashboard</span>
        </Link>
        <Link to="/messages" className="item select">
          <span className="icon messages"></span>
          <span>Messages</span>
        </Link>
        <Link to="/calendar" className="item select">
          <span className="icon calendar"></span>
          <span>Calendar</span>
        </Link>
      </div>
      <div className="menu">
        <div className="header">ORGANIZATION</div>
        <Link to="/laptopmanagement" className="item select">
          <span className="icon laptop"></span>
          <span>Laptop Management</span>
        </Link>
        <Link to="/wfh" className="item select">
          <span className="icon wfh"></span>
          <span>WFH Management</span>
        </Link>
        <Link to="/recruitment-dashboard" className="item select">
          <span className="icon recruitment"></span>
          <span>Recruitment Dashboard</span>
        </Link>
        {shouldShowInterview && (
          <Link to="/interview" className="item select">
            <span className="icon interview"></span>
            <span>Interview</span>
            <span className="notification-icon">
              <span className="notification-number">3</span>
            </span>
          </Link>
        )}
        {shouldShowCurrentInterview && (
          <Link to="/current-interview" className="item select">
            <span className="icon interview"></span>
            <span>Current Interview</span>
            <span className="notification-icon">
              <span className="notification-number">5</span>
            </span>
          </Link>
        )}
        <Link to="/settings" className="item select">
          <span className="icon settings"></span>
          <span>Settings</span>
        </Link>
      </div>
      <div className="logoutMenu select">
        <div className="item">
          <span className="icon logout"></span>
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
}
