import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import AboutUs from './components/pages/AboutUs';
import Login from './components/pages/Login';
import Footer from './components/FooterComponent';
import MyAccount from './components/pages/MyAccount';


import CDAcc from './components/pages/CDAcc';
import Checking  from './components/pages/Checking';
import Saving from './components/pages/Saving';
import IRAAcc from './components/pages/IRAAcc';


import ReactDOM from 'react-dom';
import IRARegular from './components/pages/IRARegular';
import IRARoth from './components/pages/IRARoth';
import PersonalChecking from './components/pages/PersonalChecking';
import DbaChecking from './components/pages/DbaChecking';
import IRARollover from './components/pages/IRARollover';


function App() {
  return (
    
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/services' component={Services}/>
          <Route path='/aboutus' component={AboutUs}/>
          <Route path='/login' component={Login}/>
          <Route path ='/MyAccount' component={MyAccount}/>
       </Switch>
        
        
           <Switch>
           <Route path ='/CDAcc' component={CDAcc}/>
           <Route path ='/Checking' component={Checking}/>
           <Route path ='/Saving' component={Saving}/>
           <Route path ='/IRAAcc' component={IRAAcc}/>
        </Switch>
       
       
        <Switch>
         <Route path ='/IRARegular' component={IRARegular}/>
           <Route path ='/IRARollover' component={IRARollover}/>
           <Route path ='/IRARoth' component={IRARoth}/>
           <Route path ='/PersonalChecking' component={PersonalChecking}/>
           <Route path ='/DbaChecking' component={DbaChecking}/>

        </Switch>
        <Footer/>
      </Router>
      
    </>
  );
}

export default App