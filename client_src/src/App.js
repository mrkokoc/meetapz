import React from 'react';
import { Link } from 'react-router-dom';
import Main from './components/Main';
import Navbar from './components/Navbar';
import './App.css';

const App = () => (
  <div>
    <Navbar/>
    <div className="container">
      <Main/>
    </div>
    <div className='fixed-action-btn'>
      <Link to='/meetups/add' className='btn-floating btn-large waves-effect waves-light red'>
        <i className='fa fa-plus' aria-hidden='true'></i>
      </Link>
    </div>
  </div>
);

export default App;
