import React from "react";

import "./App.css";

import MyLibrary from "./pages/MyLibrary";
import BookDetailView from "./pages/BookDetailView/BookDetailView";

import Entrepreneurship from "./pages/Entrepreneurship/Entrepreneurship";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return (
      <Box sx={{ width: "100%" }}>
        <LinearProgress />
      </Box>
    );
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MyLibrary />} />
          <Route path="/entrepreneurship" element={<Entrepreneurship />} />
          <Route path="/detailed" element={<BookDetailView />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
