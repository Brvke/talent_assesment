// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Sidebar from "./components/Sidebar";
// // import Footer from "./components/Footer";
// // import CandidateDashboard from "./pages/CandidateDashboard";
// import Recruiter from "./components/Recruiter";
// import Assessment from "./components/Assessment";
// // import Profile from "./pages/Profile";

// const App = () => (
//   <Router>
//     <div className="flex flex-col min-h-screen">
//       <Navbar />
//       <div className="flex-grow flex">
//         <Sidebar />
//         <div className="w-full">
//           <Routes>
//             {/*    */}
//             <Route path="/recruiter" element={<Recruiter />} />
//             <Route path="/assessment" element={<Assessment />} />
//             {/* <Route path="/profile" element={<Profile />} /> */}
//           </Routes>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   </Router>
// );

// export default App;
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
// import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
// import Profile from "./pages/Profile";
import Assessment from "./components/Assessment";
// import Admin from "./pages/Admin";
// import Notifications from "./pages/Notifications";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Navbar */}
        <Navbar />

        {/* Main Content Wrapper */}
        <div className="flex flex-1">
          {/* Sidebar */}
          {/* <div
            className={`transition-transform duration-300 ${
              isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            } md:translate-x-0`}
          >
            <Sidebar />
          </div> */}

          {/* Page Content */}
          <div className="flex-1 p-4 bg-gray-100">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/assessment" element={<Assessment />} />
              {/* <Route path="/profile" element={<Profile />} /> */}
              {/* <Route path="/admin" element={<Admin />} /> */}
              {/* <Route path="/notifications" element={<Notifications />} /> */}
            </Routes>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
