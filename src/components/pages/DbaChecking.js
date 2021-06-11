import React from 'react';

import './Checking.css';

//so for the column thing, look into bank account's parameters. I believe it has Account Number, Interest Rate, Opened On, Balance
// accountNumber;
//     protected BigDecimal balance;
//     protected BigDecimal interestRate;
//     protected String opendOn;
//     protected ActiveStatus activeStatus;
 function DbaChecking () {
    
    return (
      <div>
        
      <img src ="https://miro.medium.com/max/2800/1*tgCTGa1cLPW_RHd8Dc_0yg.png" width="1600px" height="600px"   ></img>
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
  // .........
  
 
    )
    ;
}
export default DbaChecking
