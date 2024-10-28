import React from "react";
const Assessments = () => (
  <div className="p-6 ml-64 md:ml-0">
    <h1 className="text-3xl font-bold mb-8">Available Assessments</h1>
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold">Technical Aptitude Test</h2>
        <p>Difficulty: Intermediate</p>
        <button className="bg-blue-violet text-white px-4 py-2 rounded">
          Start Test
        </button>
      </div>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold">Problem-Solving Test</h2>
        <p>Difficulty: Advanced</p>
        <button className="bg-blue-violet text-white px-4 py-2 rounded">
          Start Test
        </button>
      </div>
    </div>
  </div>
);

export default Assessments;
