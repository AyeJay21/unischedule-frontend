import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import TestSecurity from "./pages/testSecurity";
import TimeTable from "./components/timetable/TimeTable";
import ErrorPage from "./pages/ErrorPage";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/login" element={<TestSecurity />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="/users/timetable" element={<TimeTable />} /> {/* Dynamische Route */} 
          <Route 
            path="/users/timetable" 
            element={
              <ProtectedRoute>
                <TimeTable />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
