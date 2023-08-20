import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // You can create this file for global styling
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to measure performance, you can uncomment the following line
// and import the `reportWebVitals` function above.
// reportWebVitals();
