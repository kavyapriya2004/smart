import React, { useState } from "react";
import "../styles/Student.css";
import KavyaImg from "../assets/kavya.jpeg";

function Student({ onLogout }) {
  const [showTuition, setShowTuition] = useState(false);
  const [showSem1, setShowSem1] = useState(false);
  const [showSem2, setShowSem2] = useState(false);

  return (
    <div className="student-container">
      {/* Logout Button */}
      <div className="logout-btn">
        <button onClick={onLogout}>Logout</button>
      </div>

      <h2>Student Dashboard</h2>

      {/* Personal Info */}
      <div className="info card">
        <img src={KavyaImg} alt="Student" className="profile-pic" />
        <div className="details"> 
          <p><b>Name:</b> Kavya Priya</p>
        <p><b>Reg No:</b> 123</p>
        <p><b>Age:</b> 20</p>
        <p><b>Batch:</b> 2024-2027</p>
        <p><b>Department:</b> Bachelor of Commerce (B.Com)</p>
        <p><b>Section:</b> A3</p>
        <p><b>Date of Birth:</b> 03-06-2004</p>
        <p><b>Father's Name:</b> Murali</p>
        <p><b>Mother's Name:</b> Umavathi</p>
        <p><b>Phone:</b> 95xxxxxxxx</p>
            </div>
       
      </div>
      <br /><br />

      {/* Attendance */}
      <div className="info card">
        <h3>Attendance</h3>
        <p>Overall Attendance: <strong>92%</strong></p>
      </div>
      <br /><br />

      {/* Tuition Payment */}
      <div className="info card">
        <button className="toggle-btn" onClick={() => setShowTuition(!showTuition)}>
          {showTuition ? "Tuition Payment" : "Tuition Payment"}
        </button>
        {showTuition && (
          <table>
            <thead>
              <tr>
                <th className="tp">Academic Year</th>
                <th className="tp">Semester</th>
                <th className="tp">Payment Status</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>2024-2025</td><td>1, 2</td><td className="paid">Paid</td></tr>
              <tr><td>2025-2026</td><td>3, 4</td><td className="paid">Paid</td></tr>
              <tr><td>2026-2027</td><td>5, 6</td><td className="not">Yet to Pay</td></tr>
            </tbody>
          </table>
        )}
      </div>
  <br /><br />

      {/* Semester 1 Marks */}
      <div className="info card">
        <button className="toggle-btn" onClick={() => setShowSem1(!showSem1)}>
          {showSem1 ? "Semester 1 Marks" : "Semester 1 Marks"}
        </button>
        {showSem1 && (
          <table>
            <thead>
              <tr>
                <th>Subject</th>
                <th>Marks Obtained</th>
                <th>Total Marks</th>
                <th>Grade</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Financial Accounting</td><td>75</td><td>100</td><td>Pass</td></tr>
              <tr><td>Business Law</td><td>68</td><td>100</td><td>Pass</td></tr>
              <tr><td>Business Economics</td><td>85</td><td>100</td><td>Pass</td></tr>
              <tr><td>Income Tax</td><td>84</td><td>100</td><td>Pass</td></tr>
              <tr><td>Corporate Finance</td><td>54</td><td>100</td><td>Pass</td></tr>
            </tbody>
          </table>
        )}
      </div>

      {/* Semester 2 Marks */}
      <div className="info card">
        <button className="toggle-btn" onClick={() => setShowSem2(!showSem2)}>
          {showSem2 ? " Semester 2 Marks" : "Semester 2 Marks"}
        </button>
        {showSem2 && (
          <table>
            <thead>
              <tr>
                <th>Subject</th>
                <th>Marks Obtained</th>
                <th>Total Marks</th>
                <th>Grade</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>E-Commerce</td><td>72</td><td>100</td><td>Pass</td></tr>
              <tr><td>Principles of Management</td><td>65</td><td>100</td><td>Pass</td></tr>
              <tr><td>Business Statistics</td><td>95</td><td>100</td><td>Pass</td></tr>
              <tr><td>Marketing Management</td><td>67</td><td>100</td><td>Pass</td></tr>
              <tr><td>Human Resource Management</td><td>67</td><td>100</td><td>Pass</td></tr>
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default Student;
