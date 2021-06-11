import React from 'react';
import IRARegular  from './IRARegular';
import IRARolleover from './IRARollover';
import IRARoth  from './IRARoth';
import './IRAAcc.css';


 function IRAAcc () {
    return (
    

    <div>
        
<h3>***IRAAccount is the acocunt that currently customer need it!***</h3>
     

<button class="button button1" button type = "submit" width>
<a href="/IRARegular"> IRA Regular</a>
</button>


<button class="button button2" width>
<a href="/IRARollover">IRA Rollover</a>
</button>


<button class="button button3" width>
<a href="/IRARoth">IRA Roth</a>
</button>



</div>
    )
    ;
}
    


export default IRAAcc
