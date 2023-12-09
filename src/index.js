import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './Header.css';
import './Home.css';
import './Footer.css';
import Homepage from './Homepage';
import Header from './Header';
import Header2 from './Header2';
import Header3 from './Header3';
import Footer from './Footer';
import Footer2 from './Footer2';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Header3 />
    <Homepage />
    <Footer2 />
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
