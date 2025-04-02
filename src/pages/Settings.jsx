import React, { useState } from 'react';
import { Container, Row, Col, Table, Button, Form } from 'react-bootstrap';
import '../styles/Settings.css';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <Container className="settings-container">
      <h1 className="mb-4">Settings</h1>
      <p className="text-muted mb-5">Manage your account settings and preferences</p>

      <Row>
        <Col md={3}>
          <div className="settings-sidebar d-flex gap-4">
            <div 
              className={`sidebar-item ${activeTab === 'profile' ? 'active' : ''}`}
              onClick={() => setActiveTab('profile')}
            >
              Profile
            </div>
            <div 
              className={`sidebar-item ${activeTab === 'notifications' ? 'active' : ''}`}
              onClick={() => setActiveTab('notifications')}
            >
              Notifications
            </div>
            <div 
              className={`sidebar-item ${activeTab === 'security' ? 'active' : ''}`}
              onClick={() => setActiveTab('security')}
            >
              Security
            </div>
          </div>
        </Col>

        <Col md={9}>
          {/* Profile Section */}
          {activeTab === 'profile' && (
            <div className="profile-info-section">
              <h4 className="section-header mb-4">Profile Information</h4>
              <p className="section-subheader">Update your personal information and profile picture</p>

              <Table borderless className="name-table">
                <thead>
                  <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><input className='profile-info' type="text" name='firstname' placeholder='Prateek' /></td>
                    <td><input className='profile-info' type="text" name='lastname' placeholder='Shrestha' /></td>
                  </tr>
                </tbody>
              </Table>

              <div className="info-group">
                <label>Email</label>
                <div className="info-value">
                  <input className='profile-info' type="text" name='email' placeholder='prateekshrestha@gmail.com' />
                </div>
              </div>

              <div className="info-group">
                <label>Phone Number</label>
                <input className='profile-info' type="number" name='phone' placeholder='999-888-7654' />
              </div>

              <hr className="section-divider" />

              <div className="info-group">
                <label>Company Name (Optional)</label>
                <input className='profile-info' type="text" name='Company Name' placeholder='Enter Your Company Name' />
              </div>

              <hr className="section-divider" />

              <div className="info-group">
                <label>Bio</label>
                <input className='profile-info' type="text" name='Bio' placeholder='Enter Your Bio' />
              </div>

              <hr className="section-divider" />

              <div className="info-group">
                <label>Location</label>
                <input className='profile-info' type="text" name='Location' placeholder='Enter Your Location' />
              </div>

              <div className="info-group">
                <label>Website (Optional)</label>
                <input className='profile-info' type="text" name='Website' placeholder='prateekshrestha.com' />
              </div>

              <div className="text-end mt-5">
                <Button variant="primary" size="lg" className="save-button">
                  Save Changes
                </Button>
              </div>
            </div>
          )}

          {/* Notifications Section */}
          {activeTab === 'notifications' && (
            <div className="profile-info-section">
              <h4 className="section-header mb-4">Notification Settings</h4>
              <p className="section-subheader">Manage your notification preferences</p>
              
              {/* Add your notification form elements here */}
              <div className="info-group">
                <label>Email Notifications</label>
                <Form.Check 
                  type="switch"
                  id="email-notifications"
                  label="Receive email notifications"
                />
              </div>
              
              <div className="info-group">
                <label>Push Notifications</label>
                <Form.Check 
                  type="switch"
                  id="push-notifications"
                  label="Receive push notifications"
                />
              </div>
            </div>
          )}

          {/* Security Section */}
          {activeTab === 'security' && (
            <div className="profile-info-section">
              <h4 className="section-header mb-4">Security Settings</h4>
              <p className="section-subheader">Update your password and security preferences</p>
              
              {/* Add your security form elements here */}
              <div className="info-group">
                <label>Current Password</label>
                <input className='profile-info' type="password" name='current-password' placeholder='Enter current password' />
              </div>
              
              <div className="info-group">
                <label>New Password</label>
                <input className='profile-info' type="password" name='new-password' placeholder='Enter new password' />
              </div>
              
              <div className="info-group">
                <label>Confirm New Password</label>
                <input className='profile-info' type="password" name='confirm-password' placeholder='Confirm new password' />
              </div>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Settings;