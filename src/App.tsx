import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import TestSecurity from "./testSecurity";
import TimeTable from "./TimeTable";
import ErrorPage from "./errorPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/login" element={<TestSecurity />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="/user/:userId/timetable" element={<TimeTable />} /> {/* Dynamische Route */}      </Routes>
    </Router>
  );
}

export default App;
