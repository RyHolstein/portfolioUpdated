import React from 'react';
import './Styles/base/_base.scss';
import './App.css';
import Layout from './Layout/Layout';


import { BrowserRouter as Router} from 'react-router-dom'
 
function App() {
  return (
    <Router>
        <Layout />
    </Router>
  );
}

export default App;
