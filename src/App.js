import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import StockTrade from './components/StockTrade';
import HoldingsDashboard from './components/HoldingsDashboard';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="content">
            <Routes>
              <Route path="/" element={<StockTrade />} />
              <Route path="/dashboard" element={<HoldingsDashboard />} />
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
