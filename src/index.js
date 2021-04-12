import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Route from './Components/Routes/Route';
import reportWebVitals from './reportWebVitals';
import './App.css'

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Route />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
