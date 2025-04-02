import React, { useState } from 'react';
import { Container, Row, Col, Form, InputGroup } from 'react-bootstrap';
import { FiSearch } from 'react-icons/fi';
import { FaPaperPlane } from 'react-icons/fa';
import '../styles/message.css';

const Message = () => {
  const conversations = [
    {
      id: 1,
      name: 'Alice Johnson',
      message: 'Hello! I saw your job posting an...',
      time: '10:30 AM',
      isActive: true,
      job: 'Website Redesign Project',
      avatarUrl: 'https://via.placeholder.com/50/007bff/ffffff?Text=AJ'
    },
    {
      id: 2,
      name: 'Michael Smith',
      message: 'I\'m interested in your logo design ...',
      time: 'Yesterday',
      isActive: false,
      avatarUrl: 'https://via.placeholder.com/50/28a745/ffffff?Text=MS'
    },
    {
      id: 3,
      name: 'Sarah Williams',
      message: 'Thanks for accepting my proposal. ...',
      time: 'Yesterday',
      isActive: false,
      avatarUrl: 'https://via.placeholder.com/50/ffc107/000000?Text=SW'
    },
    {
      id: 4,
      name: 'David Lee',
      message: 'I\'ve completed the first draft. Pleas...',
      time: 'Monday',
      isActive: false,
      avatarUrl: 'https://via.placeholder.com/50/6c757d/ffffff?Text=DL'
    }
  ];

  const [activeConversation, setActiveConversation] = useState(conversations.find(convo => convo.isActive) || conversations[0]);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: 'Hello! I saw your job posting for the website redesign project and I\'m interested in applying.',
      time: '10:30 AM',
      sender: 'Alice',
      position: 'left'
    },
    {
      id: 2,
      text: 'Hi Alice, thanks for reaching out. Can you tell me more about your experience with similar projects?',
      time: '10:35 AM',
      sender: 'Me',
      position: 'right'
    },
    {
      id: 3,
      text: 'Sure! I\'ve redesigned over 30 websites in the past 3 years, primarily for small businesses and startups. I specialize in responsive design and user experience.',
      time: '10:38 AM',
      sender: 'Alice',
      position: 'left'
    },
    {
      id: 4,
      text: 'Here\'s my portfolio link: portfolio.alicejohnson.com',
      time: '10:39 AM',
      sender: 'Alice',
      position: 'left'
    },
    {
      id: 5,
      text: 'Thanks for sharing. Your portfolio looks great! I\'d like to discuss my project requirements in more detail. Are you available for a call tomorrow?',
      time: '10:45 AM',
      sender: 'Me',
      position: 'right'
    },
    {
      id: 6,
      text: 'Yes, I\'m available tomorrow. What time works for you?',
      time: '10:47 AM',
      sender: 'Alice',
      position: 'left'
    }
  ]);

  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim() === '') return;

    const message = {
      id: Date.now(),
      text: newMessage,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      sender: 'Me',
      position: 'right'
    };

    setMessages([...messages, message]);
    setNewMessage('');
  };

  const handleConversationClick = (convo) => {
    setActiveConversation(convo);
    // In a real application, you would fetch messages for this conversation
  };

  return (
    <Container fluid className="message-container">
      <Row className="h-100 g-0">
        <Col md={4} lg={3} className="sidebar h-100 d-flex flex-column">
          <div className="sidebar-header">
            <h2>Messages</h2>
            <InputGroup className="search-box">
              <InputGroup.Text className="search-icon">
                <FiSearch />
              </InputGroup.Text>
              <Form.Control
                placeholder="Search conversations..."
                aria-label="Search conversations"
              />
            </InputGroup>
          </div>

          <div className="conversation-list flex-grow-1 overflow-auto">
            {conversations.map(convo => (
              <div
                key={convo.id}
                className={`conversation-item ${activeConversation?.id === convo.id ? 'active' : ''}`}
                onClick={() => handleConversationClick(convo)}
              >
                <div className="d-flex align-items-center">
                  <div className="avatar-wrapper me-2">
                    <img src={convo.avatarUrl} alt={convo.name} className="avatar" />
                  </div>
                  <div className="conversation-info">
                    <div className="d-flex justify-content-between align-items-start">
                      <div>
                        <div className="conversation-name">{convo.name}</div>
                        {convo.job && <div className="conversation-job">{convo.job}</div>}
                        <div className="conversation-last-message">{convo.message}</div>
                      </div>
                      <div className="conversation-time">{convo.time}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Col>

        {/* Chat area */}
        <Col md={8} lg={9} className="chat-area h-100 d-flex flex-column">
          <div className="chat-header">
            <div className="user-details d-flex align-items-center">
              <div className="avatar-wrapper me-2">
                <img src={activeConversation?.avatarUrl} alt={activeConversation?.name} className="avatar large" />
              </div>
              <div>
                <h3>{activeConversation?.name}</h3>
                <p>Job: {activeConversation?.job}</p>
              </div>
            </div>
          </div>

          <div className="message-list flex-grow-1 overflow-auto">
            {messages.map(msg => (
              <div key={msg.id} className={`message-row ${msg.position}`}>
                <div className="message-content">
                  <div className="message-text">{msg.text}</div>
                  <div className="message-time">{msg.time}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Message input area */}
          <div className="message-input-area">
            <Form onSubmit={handleSendMessage}>
              <InputGroup className="align-items-center mymessage">
                <Form.Control
                  as="textarea"
                  rows={1}
                  placeholder="Type a message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  className="message-input"
                />
                <button
                  type="submit"
                  className="send-button"
                  disabled={!newMessage.trim()}
                >
                  <FaPaperPlane />
                </button>
              </InputGroup>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Message;