import React from "react";
import Landing from "./components/landing";
import Instaclone from "./components/instaclone";
import NewPost from "./components/newPost";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/instaclone" element={<Instaclone />} />
          <Route path="/newPost" element={<NewPost />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
