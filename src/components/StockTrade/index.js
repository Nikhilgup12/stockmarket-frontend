

import React, { Component } from 'react';
import './index.css';

class StockTrade extends Component {
  constructor(props) {
    super(props);
    this.state = {
      symbol: '',
      quantity: 0,
      type: 'buy',  // 'buy' or 'sell'
      message: '',
    };
  }

  // Arrow function automatically binds 'this'
  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { symbol, quantity, type } = this.state;

    fetch('http://localhost:5000/api/trade', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ symbol, quantity, type })
    })
      .then(response => response.json())
      .then(data => {
        this.setState({ message: data.message || 'Trade successful' });
      })
      .catch(error => {
        this.setState({ message: 'Error: ' + error.message });
      });
  };

  render() {
    return (
      <div className="stock-trade-container">
        <h1 className="stock-trade-title">Trade Stocks</h1>
        <form onSubmit={this.handleSubmit} className="stock-trade-form">
          <div className="form-group">
            <label htmlFor="symbol">Stock Symbol:</label>
            <input
              type="text"
              id="symbol"
              name="symbol"
              value={this.state.symbol}
              onChange={this.handleInputChange}
              required
              placeholder="e.g., AAPL"
            />
          </div>
          <div className="form-group">
            <label htmlFor="quantity">Quantity:</label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={this.state.quantity}
              onChange={this.handleInputChange}
              required
              min="1"
              placeholder="e.g., 10"
            />
          </div>
          <div className="form-group">
            <label htmlFor="type">Trade Type:</label>
            <select
              id="type"
              name="type"
              value={this.state.type}
              onChange={this.handleInputChange}
            >
              <option value="buy">Buy</option>
              <option value="sell">Sell</option>
            </select>
          </div>
          <button type="submit" className="stock-trade-button">Execute Trade</button>
          {this.state.message && <p className="trade-message">{this.state.message}</p>}
        </form>
      </div>
    );
  }
}

export default StockTrade;
