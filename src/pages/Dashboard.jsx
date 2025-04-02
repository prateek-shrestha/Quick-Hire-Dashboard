import React from 'react';
import { Row, Col, Card, Badge, Button } from 'react-bootstrap';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const stats = [
    { title: 'Active Jobs', value: 2, trend: '+2 from last week', sub: '+12% more jobs than last month' },
    { title: 'Job Applications', value: 6, trend: 'Across all your jobs', sub: '+3% less than typical' },
    { title: 'Total Spend', value: '$1,200', trend: '2 completed projects', sub: 'Healthy spending pattern' }
  ];

  const jobs = [
    { title: 'Website Redesign Project', status: 'Action', applicants: 5 },
    { title: 'Logo Design for New Product', status: 'Action', applicants: 2 },
    { title: 'Mobile App Development', status: 'Draft', applicants: 0 }
  ];

  const messages = [
    { sender: 'Alice Johnson', text: 'Hello! I saw your job posting and I’m interested...' },
    { sender: 'Michael Smith', text: 'I’m interested in your logo design project. Can we...' }
  ];

  const StatCard = ({ title, value, trend, sub }) => (
    <Card className="stat-card h-100">
      <Card.Body>
        <h6 className="text-secondary">{title}</h6>
        <h2 className="my-2">{value}</h2>
        <p className="mb-1 text-muted small">{trend}</p>
        <p className="text-success small mb-0">{sub}</p>
      </Card.Body>
    </Card>
  );

  const RecentJob = ({ title, status, applicants }) => (
    <div className="recent-job p-3 mb-3">
      <div className="d-flex justify-content-between align-items-start">
        <div>
          <h6 className="mb-2" style={{ fontSize: '14px', fontWeight: '500' }}>{title}</h6>
          <div className="d-flex align-items-center gap-2">
            <Badge 
              bg={status === 'Draft' ? 'secondary' : 'info'} 
              className="py-1 px-2" 
              style={{ 
                fontSize: '12px', 
                fontWeight: '500',
                backgroundColor: status === 'Draft' ? '#e5e7eb' : '#e0f2fe',
                color: status === 'Draft' ? '#4b5563' : '#075985'
              }}
            >
              {status}
            </Badge>
            <span className="text-muted small" style={{ fontSize: '13px' }}>
              {applicants} Applicants
            </span>
          </div>
        </div>
        <Button 
          variant="outline-primary" 
          size="sm" 
          style={{ 
            fontSize: '13px',
            padding: '2px 12px',
            borderColor: '#3b82f6',
            color: '#3b82f6',
            marginTop: '-2px' // Adjust this value to fine-tune alignment
          }}
        >
          View
        </Button>
      </div>
    </div>
  );

  const MessageItem = ({ sender, text }) => (
    <div className="message-item p-3 mb-3">
      <div className="d-flex align-items-start">
        <div className="avatar me-3">AJ</div>
        <div className="flex-grow-1">
          <div className="d-flex align-items-center mb-1">
            <h6 className="mb-0 me-2">{sender}</h6>
          </div>
          <p className="text-muted small mb-0">{text}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="dashboard-content">
      {/* Header Section */}
      <header className="dashboard-header">
        <div>
          <h1 className="dashboard-title">Dashboard</h1>
          <h3 className="dashboard-subtitle">Welcome back, Pratik</h3>
        </div>
        <Button variant="primary" className="d-flex align-items-center">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="16" 
            height="16" 
            fill="currentColor" 
            className="bi bi-plus-lg me-2" 
            viewBox="0 0 16 16"
          >
            <path 
              fillRule="evenodd" 
              d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
            />
          </svg>
          Post A Job
        </Button>
      </header>

      {/* Stats Grid */}
      <section className="stats-grid">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </section>

      {/* Content Columns */}
      <div className="dashboard-columns">
        <section className="recent-jobs-section">
          <div className="section-header">
            <h2>Recent Jobs</h2>
            <Button variant="link">View All</Button>
          </div>
          <Card className="content-card">
            {jobs.map((job, index) => (
              <RecentJob key={index} {...job} />
            ))}
          </Card>
        </section>

        <section className="recent-messages-section">
          <div className="section-header">
            <h2>Recent Messages</h2>
            <Button variant="link">View All</Button>
          </div>
          <Card className="content-card">
            {messages.map((message, index) => (
              <MessageItem key={index} {...message} />
            ))}
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;