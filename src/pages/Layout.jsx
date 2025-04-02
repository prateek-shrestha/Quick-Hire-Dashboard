import React, { useState } from 'react';
import { Badge } from 'react-bootstrap';
import { HouseDoor, Briefcase, Envelope, Cash, Gear } from "react-bootstrap-icons";
import { Link, Outlet } from 'react-router-dom';
import '../styles/Layout.css';

const Layout = () => {
  const [activeKey, setActiveKey] = useState('Dashboard');
  const menuItems = [
    { key: 'Dashboard', icon: <HouseDoor />, path: '/dashboard' },
    { key: 'Jobs', icon: <Briefcase />, path: '/jobs' },
    { key: 'Messages', icon: <Envelope />, path: '/messages' },
    { key: 'Payments', icon: <Cash />, path: '/payments' },
    { key: 'Settings', icon: <Gear />, path: '/settings' }
  ];

  return (
    <div className="app-container">
      {/* Fixed Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-content">
          <div className="logo-container">
            <img className='logo' src="./logo.png" alt="Quick-Hire-Logo" />
          </div>

          <nav className="navigation-menu">
            {menuItems.map((item) => (
              <Link
                key={item.key}
                to={item.path}
                className={`nav-item ${activeKey === item.key ? 'active' : ''}`}
                onClick={() => setActiveKey(item.key)}
              >
                {React.cloneElement(item.icon, { className: "nav-icon" })}
                <span className="nav-label">{item.key}</span>
              </Link>
            ))}
          </nav>

          <div className="user-profile">
            <div className="avatar-container">
              <div className="user-avatar">JD</div>
              <Badge pill bg="danger" className="notification-badge">
                2
              </Badge>
            </div>
            <div className="user-details">
              <h2 className="user-name">John Doe</h2>
              <p className="user-email">john@clienthub.com</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="main-content-wrapper">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;