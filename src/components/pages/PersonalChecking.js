import React from 'react';
// import index  from './index';
import './PersonalChecking.css';

//- in my account, create tables for Personal Checking, Dba Checking, IRA Regular, IRA Rollover, IRA Roth, Savings

 function PersonalChecking () {
    
    return (
    
      <div>
        
      <img src ="  https://www.greendot.com/personal-banking/deposit-money/ach-bank-transfer/_jcr_content/root/responsivegrid/responsivegrid/layout_container_1296336461/col2Tile1/image.coreimg.png/1609950710957/accountnow-taxpage-01172019.png    "    ></img>
      {/* <img src="img_girl.jpg" alt="Girl in a jacket" style="width:500px;height:600px;"> */}

      {/* <h1 className='services'>SERVICES</h1> */}
  <h2><font face="Arial" size="20px" color="#FF7A59">All Transactions</font></h2>
 <table border = "1" width = "100%">
       <tr>
          <td>
             <table border = "10" width = "100%" color = "blue">
               
                <tr>
             <th>accountNumber </th> <th>Balance</th><th>interestRate</th><th>opendOn</th><th>activeStatus</th>
                </tr>
              
                <tr>
                  <td>111</td>  <td>111</td><td>111</td><td>111</td><td>111</td>
                </tr>
                
                <tr>
                  <td>11</td><td>111</td>  <td>111</td><td>111</td><td>111</td>
                </tr>
               
                <tr>
                  <td>1111</td>   <td>1111</td>   <td>1111</td><td>1111</td><td>111</td>
               </tr>
            
                <tr>
                  <td>1111</td><td>1111</td>   <td>111</td><td>111</td><td>111</td>
              </tr>

             <tr>
                <td>111</td><td>111</td><td>111</td><td>111</td><td>111</td>
              </tr>
</table>
          </td>
       </tr>
       
    </table></div>
 
    )
    ;
}

    


export default PersonalChecking
