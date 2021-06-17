import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import { Jumbotron } from 'reactstrap';
import MyAccount from './MyAccount';
import PersonalChecking from './PersonalChecking';

function Home() {
 
  return (
    <div>
      <Jumbotron fluid>
        <h1>Bank from Anywhere</h1>
        <p className="jumbotron-text">We are here to help you.
        </p>
      </Jumbotron>
      <Cards />

<div id ="container">
  <div id ="animate"></div>
</div>


    </div>
  );
}

export default Home;