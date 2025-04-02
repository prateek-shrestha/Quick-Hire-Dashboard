import React from 'react';
import { Card, Row, Col, Form, Dropdown, ListGroup, Button } from 'react-bootstrap';
import { FiBriefcase, FiUsers, FiFileText, FiArchive, FiClock } from 'react-icons/fi';
import '../styles/Job.css';

const Job = () => {
  const jobs = [
    {
      title: "Senior Frontend Developer",
      status: "Active",
      location: "San Francisco, CA (Remote)",
      type: "Full-time",
      salary: "$120,000 - $150,000",
      days: 685,
      applicants: 34,
    },
    {
      title: "UX/UI Designer",
      status: "Active",
      location: "New York, NY (Hybrid)",
      type: "Full-time",
      salary: "$90,000 - $120,000",
      days: 690,
      applicants: 28,
    },
    {
      title: "DevOps Engineer",
      status: "Active",
      location: "Austin, TX (On-site)",
      type: "Full-time",
      salary: "$110,000 - $140,000",
      days: 702,
      applicants: 19,
    },
    {
      title: "Product Manager",
      status: "Closed",
      location: "Seattle, WA (Hybrid)",
      type: "Full-time",
      salary: "$125,000 - $155,000",
      days: 710,
      applicants: 42,
    },
    {
      title: "Technical Content Writer",
      status: "Draft",
      days: 710,
      applicants: 0,
    }
  ];

  return (
    <div className="job-container">
      <div className="header-section">
        <div className="title-area">
          <h2>Job Postings</h2>
          <p className="subheader">Manage and monitor your job listings</p>
        </div>
        <Button variant="primary" className="post-job-button">
          <span className="plus-icon">+</span> Post New Job
        </Button>
      </div>

      <Row className="stats-row g-4 mb-4">
        <Col xs={6} md={3}>
          <Card className="stats-card">
            <Card.Body>
              <div className="d-flex align-items-center">
                <div className="stats-content">
                  <div className="stats-number">3</div>
                  <div className="stats-title">Active Jobs</div>
                </div>
                <div className="stats-icon active-jobs-icon">
                  <FiBriefcase size={24} />
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} md={3}>
          <Card className="stats-card">
            <Card.Body>
              <div className="d-flex align-items-center">
                <div className="stats-content">
                  <div className="stats-number">123</div>
                  <div className="stats-title">Total Applicants</div>
                </div>
                <div className="stats-icon applicants-icon">
                  <FiUsers size={24} />
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} md={3}>
          <Card className="stats-card">
            <Card.Body>
              <div className="d-flex align-items-center">
                <div className="stats-content">
                  <div className="stats-number">1</div>
                  <div className="stats-title">Drafts</div>
                </div>
                <div className="stats-icon drafts-icon">
                  <FiFileText size={24} />
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} md={3}>
          <Card className="stats-card">
            <Card.Body>
              <div className="d-flex align-items-center">
                <div className="stats-content">
                  <div className="stats-number">1</div>
                  <div className="stats-title">Closed Jobs</div>
                </div>
                <div className="stats-icon closed-jobs-icon">
                  <FiArchive size={24} />
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <div className="filters-section mb-4">
        <div className="search-wrapper">
          <Form.Control 
            type="search" 
            placeholder="Search jobs..." 
            className="search-input"
          />
        </div>
        
        <Dropdown className="date-filter">
          <Dropdown.Toggle variant="light">
            All dates
            <span className="dropdown-arrow"></span>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>All dates</Dropdown.Item>
            <Dropdown.Item>Last week</Dropdown.Item>
            <Dropdown.Item>Last month</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <div className="status-filters">
          <button className="status-filter active">All</button>
          <button className="status-filter">Active</button>
          <button className="status-filter">Closed</button>
          <button className="status-filter">Drafts</button>
        </div>
      </div>

      <ListGroup className="jobs-list">
        {jobs.map((job, index) => (
          <ListGroup.Item key={index} className="job-item">
            <div className="job-item-content">
              <div className="d-flex align-items-start">
                <div className="job-icon">
                  <FiBriefcase />
                </div>
                <div className="main-content">
                  <div className="title-section">
                    <h5 className="job-title">{job.title}</h5>
                    <span className={`status-badge ${job.status.toLowerCase()}`}>
                      {job.status}
                    </span>
                  </div>
                  
                  {job.location && (
                    <div className="job-details">
                      <span className="location">{job.location}</span>
                      <span className="job-type">{job.type}</span>
                      <span className="salary">{job.salary}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="meta-content">
                <div className="days-ago">
                  <FiClock className="clock-icon" /> Posted {job.days} days ago
                </div>
                
                {job.applicants > 0 && (
                  <div className="applicants-info">
                    <FiUsers className="users-icon" /> {job.applicants} Applicants
                  </div>
                )}
              </div>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default Job;
