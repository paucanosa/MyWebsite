import React from 'react';
import ReactDOM from 'react-dom';
import './styles/utilities.css';

class Content extends React.Component {
  render() {
    return (
      <div>
        <p>Hello there</p>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Content />, document.getElementById('root'));
