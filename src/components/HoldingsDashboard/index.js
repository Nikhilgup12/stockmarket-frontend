
import React from 'react';
import './index.css';

class HoldingsDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      holdings: []
    };
  }

  componentDidMount() {
    fetch('https://stockmarket-backend-fqvv.onrender.com/api/holdings')
      .then(response => response.json())
      .then(data => {
        this.setState({ holdings: data.holdings });
      });
  }

  render() {
    return (
      <div className="dashboard-container">
        <h1 className="dashboard-title">Current Stock Holdings</h1>
        <div className="holdings-table">
          <div className="table-header">
            <div className="header-item">Symbol</div>
            <div className="header-item">Quantity</div>
          </div>
          {this.state.holdings.length > 0 ? (
            this.state.holdings.map((holding, index) => (
              <div key={index} className="table-row">
                <div className="table-item">{holding.symbol}</div>
                <div className="table-item">{holding.quantity}</div>
              </div>
            ))
          ) : (
            <div className="no-holdings">No holdings available</div>
          )}
        </div>
      </div>
    );
  }
}

export default HoldingsDashboard;
