import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material'; // Import Material UI components
import axios from 'axios'; // Import Axios to handle API calls
import './AdminAssignments.css'; // Import your custom CSS

function AdminAssignments() {
  const [assignments, setAssignments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const userRole = localStorage.getItem("role");
    console.log("User Role:", userRole); // Log the role to debug

    // Check if the role is either "1" (admin) or "0" (guest)
    if (userRole !== "1" && userRole !== "0") {
      alert("Access denied. You do not have the necessary privileges.");
      window.location.href = "/signin"; // Redirect to signin page if not admin/guest
      return;
    }

    // Function to fetch assignments
    const fetchAssignments = async () => {
      try {
        const response = await axios.get('http://localhost:8080/assignments'); // Correct URL
        // Assuming backend sends data with 'role' to filter assignments if needed
        const filteredAssignments = response.data.filter((assignment) => {
          return assignment.userRole === 'Role 1' || assignment.userRole === 'Role 0';
        });
        setAssignments(filteredAssignments);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching assignments:', err);
        setError('Error fetching assignments. Please try again later.');
        setLoading(false);
      }
    };

    fetchAssignments();
  }, []);

  if (loading) {
    return <div className="admin-assignments-loading">Loading assignments...</div>;
  }

  return (
    <div className="admin-assignments-container">
      <h1>Admin Assignments</h1>

      {/* Show error message if there was an issue fetching data */}
      {error && <div className="admin-assignments-error">{error}</div>}

      {/* Material UI Table for displaying assignments */}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="submitted assignments">
          <TableHead>
            <TableRow>
              <TableCell>Assignment ID</TableCell>
              <TableCell>Student Name</TableCell>
              <TableCell>User Role</TableCell>
              <TableCell>Assignment Title</TableCell>
              <TableCell>Date Submitted</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {assignments.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="admin-assignments-empty">
                  No assignments submitted by Role 1 or Role 0 users.
                </TableCell>
              </TableRow>
            ) : (
              assignments.map((assignment) => (
                <TableRow key={assignment.id}>
                  <TableCell>{assignment.id}</TableCell>
                  <TableCell>{assignment.userName}</TableCell>
                  <TableCell>{assignment.userRole}</TableCell>
                  <TableCell>{assignment.title}</TableCell> {/* Assuming 'title' is the correct field */}
                  <TableCell>{assignment.dateSubmitted}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default AdminAssignments;
