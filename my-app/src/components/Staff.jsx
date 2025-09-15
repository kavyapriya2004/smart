import React from "react";
import "../styles/Staff.css";
import RajImg from "../assets/raj.jpeg"; // Make sure raj.jpeg is in src/assets

function Staff({ onLogout }) {
  return (
    <div className="staff-container">
      {/* Logout Button */}
      <div className="logout-btn">
        <button onClick={onLogout}>Logout</button>
      </div>

      <h2>Staff Dashboard</h2>

      <div className="container">
        <div className="row">
          {/* Staff Info */}
          <div className="info">
            <img src={RajImg} alt="Staff" />
            <p><b>Name:</b> Raj.Y</p>
            <p><b>Reg No:</b> 107</p>
            <p><b>Designation:</b>Professor</p>
            <p><b>Department:</b>  Bachelor of Commerce</p>
            <p><b>Phone:</b> 9500000001</p>
            <p><b>Email:</b> yraj@college.com</p>
          </div>

          {/* Study Materials */}
          <div className="materials">
            <h3>Study Materials</h3>
            <ul>
              <li><a href="/materials/ds.pdf" target="_blank">Financial Accounting Notes</a></li>
              <li><a href="/materials/cppt.pdf" target="_blank">Business Law Assignments</a></li>
              <li><a href="/materials/java.pdf" target="_blank">Management Principles PDF</a></li>
              <li><a href="/materials/os.pdf" target="_blank">Marketing Management Slides</a></li>
              <li><a href="/materials/network.pdf" target="_blank">HRM PDF</a></li>
            </ul>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="events">
          <h3>Upcoming Events</h3>
          <ul>
             <li>Guest Lecture on Financial Analytics – Sept 15, 2025 </li>
             <li>Workshop: Tax Planning Basics – Sept 22, 2025</li>
             <li>Commerce Department Fest – Oct 10, 2025</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Staff;
