import React from'react';
import MyLayout from './Components/Layout/MyLayout'
import HomePage from './Components/HomePage/Main/Main'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <MyLayout>
          <Router>
            <Routes>
              <Route exact path="/" element={<HomePage />} />
            </Routes>
          </Router>
      </MyLayout>
    </div>
  );
}

export default App;
