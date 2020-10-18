import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Home from './components/pages/Home';
import Navbar from './components/Navbar'
import Tlogs from './components/tlogs/Tlogs';
import About from './components/pages/About'
import Citypage from './components/pages/Citypage';
import Tlogpost from './components/pages/Tlogpost';
import SignUp from './components/pages/SignUp'
import Footer from './components/Footer'

function App() {
  return (
    <>
      
     <Router>
    
       <Navbar/>
        <Switch>
         <Route path='/' exact component={Home} />
         <Route path='/tlogs' exact component={Tlogs} />
         <Route path='/about' exact component={About} />
         <Route path='/citypage' exact component={Citypage} />
         <Route path='/tlogpost' exact component={Tlogpost} />
         <Route path='/signup' exact component={SignUp} />
        </Switch>          
        <Footer/>
       </Router>

    </>
  );
}

export default App;
