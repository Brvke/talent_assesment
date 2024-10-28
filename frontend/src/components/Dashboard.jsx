import React from "react";
const CandidateDashboard = () => (
  <div className="p-6 ml-64 md:ml-0">
    <h1 className="text-3xl font-bold mb-8">Candidate Dashboard</h1>
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold">Upcoming Assessments</h2>
        <p>Next test: Technical Aptitude Test</p>
        <p>Date: 25th October 2024</p>
      </div>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold">Completed Assessments</h2>
        <p>Score: 85% on JavaScript Test</p>
        <p>Score: 75% on Problem-Solving Test</p>
      </div>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold">Suggested Improvement</h2>
        <p>Improve problem-solving techniques with practice tests.</p>
      </div>
    </div>
  </div>
);

export default CandidateDashboard;
