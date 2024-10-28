import React from "react";
const AdminDashboard = () => (
  <div className="p-6 ml-64 md:ml-0">
    <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold">Active Assessments</h2>
        <p>Technical Aptitude Test</p>
        <p>Participants: 250</p>
      </div>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold">Recent Candidates</h2>
        <p>John Doe - 85%</p>
        <p>Jane Smith - 90%</p>
      </div>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold">Assessment Statistics</h2>
        <p>Average Score: 78%</p>
        <p>High Score: 92%</p>
      </div>
    </div>
  </div>
);

export default AdminDashboard;
