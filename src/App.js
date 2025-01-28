import React from'react';
import MyLayout from './Components/Layout/MyLayout'
import Home from './Components/Home/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <MyLayout>
          <Router>
            <Routes>
              <Route exact path="/" element={<Home />} />
            </Routes>
          </Router>
      </MyLayout>
    </div>
  );
}

export default App;
