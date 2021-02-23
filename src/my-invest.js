/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-button/paper-button.js'
import '@material/mwc-textfield';
import '@material/mwc-button';
import '@material/mwc-icon';
class MyInvest extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;}
        
          .column {
            float: left;
            width: 45%;
            padding: 20px;
            height: 600px; 
          }
          
      
          .row:after {
            content: "";
            display: table;
            clear: both;
          }
          #customers {
            font-family: Arial, Helvetica, sans-serif;
            border-collapse: collapse;
            width: 100%;
          }
          
          #customers td, #customers th {
            border: 1px solid #ddd;
            padding: 8px;
          }
          
          #customers tr:nth-child(even){background-color: #f2f2f2;}
          
          #customers tr:hover {background-color: #ddd;}
          
          #customers th {
            padding-top: 12px;
            padding-bottom: 12px;
            text-align: left;
            background-color:#4B0082;
            color: white;
          }
          mwc-textfield{
            width:100%;
           
          }
          mwc-button{
            background-color:#191970;
          }
          section{
            margin-left:40px;
          }
          footer {
            min-height: 100px;
            background-color: #ced4da;
          }
    
      </style>
      <div class="row">
      <div class="column">
        <h2>Investment Options</h2>
        <table id="customers">
<tr>
<th>Investment options</th>
<th>Interest</th>
<th>Amount</th>
<th>Period</th>
<th>Maturity amount</th>
</tr>
<tr>
<td>RD deposit</td>
<td>5.40%</td>
<td>100000</td>
<td>24 Months</td>
<td>1440024</td>
</tr>
<tr>
<td>Fund</td>
<td>6%</td>
<td>100000</td>
<td>12 Months</td>
<td>1500012</td>
</tr>
<tr>
<td>FD deposit</td>
<td>5.8%</td>
<td>100000</td>
<td>12 Months</td>
<td>1480012</td>
</tr>
<tr>
<td>Real estate</td>
<td>6.4%</td>
<td>700000</td>
<td>12 Months</td>
<td>1539987</td>
</tr>
<tr>
<td>Life Insurance</td>
<td>3%</td>
<td>10000</td>
<td>56 Months</td>
<td>1539987</td>
</tr>


</table>
      </div>
      <div class="column">
        <h2>Interest Calclation</h2>
        <div class="card">
        <mwc-textfield outlined  label="principal" id="principal" icon="account_balance" ></mwc-textfield></br></br>
        <mwc-textfield outlined  label="Interest"  id="annual" icon="paid"></mwc-textfield></br></br>
        <mwc-textfield outlined   label="Peroid" id="peroid" icon="date_range"></mwc-textfield></br></br>
        <mwc-button raised label="Calclate Intrest" icon="input" trailingIcon on-click="compound"></mwc-button></br></br>
        <h2>Maturity Amount: {{Amount}}</h2>
        </div>
      </div>
    </div>


      
   
    
   
    


  <h3><center><u>IMPORTANCE OF INVESTING </u></center></h3>
  <section>
  <h4>Investment: Investments mean buying assets that you expect to generate a better rate of return in the near future. Some investments are risky; so you should analyze the market trends properly before making a decision. People usually invest in stocks, bonds, mutual funds, real estate, private companies, commodities, and art. Investing is a complex process and we would recommend you to seek the advice of professionals when you need to analyze the difference between risk and rewards.
  Investing with a personal finance expert will help you with your personal circumstances, objectives and risk tolerance. We ensures you do the right types of investments to fit your needs, lifestyle, and goals.
  </h4>
  </section>
  <section>
  <h4>Income: It’s possible to manage income effectively. You need to calculate how much you make on an annual basis, which is inclusive of salaries, bonuses, pensions, and dividends. Once you have an exact figure, you can divide this amount into expenses, savings, and investments. A personal finance expert can help you derive the income and further plan the spend.
  </h4>
  </section>
  
  <footer>
<h2><center>@Uniquehire.in</center></h2>
</footer>


   
    `;
  }
  // taking data from paper inputs 
  compound(){
    var principal=this.$.principal.value;
    var annual=this.$.annual.value;
    var peroid=this.$.peroid.value;
  //  calculating matured amount
     this.Amount = ((principal*(1+annual)^peroid)-principal);
  
  }
  static get properties() {
    return {
      Amount: {
        type: Number,
      }
    }
  }

}

// registering elements with browser
window.customElements.define('my-invest', MyInvest);
