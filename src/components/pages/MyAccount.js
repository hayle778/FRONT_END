
//import { render } from '@testing-library/react';
import React from 'react';
// import { Router, Switch } from 'react-router';
import '../../App.css';
// import CardItem from './CardItem';
// import FooterComponent from './footercomponent';
// import FooterComponent from './FooterComponent';
// import Map from './Map';
import IRAAcc from './IRAAcc';
import CDAcc from './CDAcc';
import Checking from './PersonalChecking';
import Saving from './Saving';

import './MyAccount.css';

// import Home from './Home';
export  default function MyAccount () {

return (

<div>

<button class="button button1" button type = "submit" width>

<a href="/CDAcc"> CD Acc</a>
   
   
</button>

<button class="button button2" width>

<a href="/Checking">Checking</a>


</button>


<button class="button button3" width>
<a href="/Saving">Saving</a>
</button>


<button class="button button4" width>
<a href="/IRAAcc">IRA Acc</a>

</button>

</div>


)




};
