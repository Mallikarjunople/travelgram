import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Home from './components/pages/Home';
import Navbar from './components/Navbar'
function App() {
  return (
    <>
     <Router>
       <Navbar/>
        <Switch>
         <Route path='/' exact component={Home} />
      
        </Switch>          
     
       </Router>

    </>
  );
}

export default App;
