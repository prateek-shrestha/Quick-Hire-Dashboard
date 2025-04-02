import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import "../styles/Payments.css";

const Payments = () => {
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [paymentMethods] = useState([
    { type: "Visa", last4: "4242", expires: "12/2025", default: true },
    
  ]);

  const togglePaymentForm = () => {
    setShowPaymentForm(!showPaymentForm);
  };

  return (
    <div className="payment-container">
      <h2 className="payment-title">Payments</h2>
      <p>Manage your payment history and methods</p>

      <div className="payment-tabs">
        <button className="active">Payment Methods</button>
      </div>

      <div className="payment-methods">
        <h3>Your Payment Methods</h3>
        <p>Manage your saved payment methods</p>
        {paymentMethods.map((method, index) => (
          <div key={index} className="payment-card">
            <span>{method.type} •••• {method.last4}</span>
            <span>Expires {method.expires}</span>
            {method.default && <span className="default-badge">Default</span>}
            <button className="edit-btn">Edit</button>
          </div>
        ))}
        <button className="add-payment-btn" onClick={togglePaymentForm}>
          + Add Payment Method
        </button>
      </div>

      {showPaymentForm && (
        <div className="payment-form">
          <h3>Add Payment Method</h3>
          <input className="pay-form" type="text" placeholder="Card Number" />
          <input className="pay-form" type="text" placeholder="MM/YY" />
          <input className="pay-form" type="text" placeholder="CVC" />
          <button className="submit-btn">Save Card</button>
          <div className="alternative-payments">
            <button className="gpay-btn">Pay with Google Pay</button>
            <button className="applepay-btn">Pay with Apple Pay</button>
          </div>
        </div>
      )}

      <div className="payment-history">
        <h2>Payment History</h2>
        <input type="text" placeholder="Search transactions..." className="search-bar" />
        <Button variant="primary" className="search-btn">Search</Button>
        <table>
          <thead className="tablehead">
            <tr>
              <th>Professional</th>
              <th>Project</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Alice Johnson</td>
              <td>Website Redesign</td>
              <td>5/14/2023</td>
              <td>$750.00</td>
              <td className="status completed">Completed</td>
              <td><button>View</button></td>
            </tr>
            <tr>
              <td>Michael Smith</td>
              <td>Logo Design</td>
              <td>5/9/2023</td>
              <td>$450.00</td>
              <td className="status pending">Pending</td>
              <td><button>View</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Payments;
