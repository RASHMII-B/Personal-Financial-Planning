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

class MyPlannning extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      body{
        background-image: linear-gradient(to right,#f5f7fa , #c3cfe2);
      } 
      img{
        width:500px;
       margin-left:70px;
       margin-right:50px;
       height:400px;
      } 
      ul{
        margin-left:100px;
      }
      footer {
        min-height: 100px;
        background-color: #ced4da;
      }
      </style>

     
  <img src="./images/finance1.jpg">
  <img src="./images/new.png">
 
  <h3><center><u>IMPORTANT STEPS IN PLANNING</u></center></h3>
  <p> <ul>
    <li>Review Your Current Savings and Spending Habits</li>
    <li>Set Short-Term and Long-Term Financial Goals</li>
   <li>Prepare Yourself for Financial Risks With the Proper Insurance</li>
   <li> Create a Plan for Current and Future Debts</li>
    <li> Start Investing to Build Your Wealth (and For Retirement)</li>
    <li> Start Building Your Emergency Fund</li>
   <li> Keep Track of Your Plan and Maintain it </li></ul>
    </p>
    <footer>
<h2><center>@Uniquehire.in</center></h2>
</footer>

   
    `;
  }


}

window.customElements.define('my-planning', MyPlannning);
