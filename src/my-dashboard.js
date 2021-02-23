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
import '@polymer/paper-card/paper-card.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/app-layout/app-grid/app-grid-style';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@material/mwc-icon';
class MyDashboard extends PolymerElement {
  static get template() {
    return html`
    <app-location route="{{route}}" url-space-regex="^[[rootPath]]">
      </app-location>

      <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}">
      </app-route>
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
          }
       
        paper-card{
        width:300px;
        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
        transition: all 0.15s ease;
        border: none;
           }
       .card:hover {
          box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);
            }

       .flex {
           @apply(--layout-horizontal);
           text-align: justify;
          -ms-text-justify: distribute-all-lines;
          text-justify: distribute-all-lines;
          width:100%;}

      .card {
        margin-left: 5px;
        margin-right: 5px;
        width:300px;
          }
      
      .container{
         margin-left:100px;
       }
     paper-card{
        column-gap: 90px;
       }
      .card{
        margin-right:60px;
      }
      
      footer {
        min-height: 100px;
        background-color: #ced4da;
      }
      nav paper-button{
         }
    
     li p paper-button{
      float:left;
       }
     
      ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        background-color:grey;
         }
      
      li paper-button {
        display:inline;
        float:right;
        font-size:20px;
         }
      img{
       
        width:100%;
         }
      footer h2{
        margin-top:70px;
        font-size:30px;
          }
      p{
        margin-left:20px;
          }
      .fancy{
        
          font-size: 6.5rem;
          color: #f15555;
          margin-left:100px;
           }
        .fancy1{
         font-size: 6.5rem;
         color: #74b876;
          margin-left:100px;
        }
        .fancy2{
          font-size: 6.5rem;
          color: black;
           margin-left:100px;
         }
         .container{
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
         }
        
        


      
      </style>
<div class="body">
      
   <ul>
  <li> <p> <paper-button on-click="invest" class="pink" >Dashboard</paper-button></p>
 <li> <paper-button on-click="invest" class="pink" >Invest</paper-button>
<li> <paper-button on-click="planning" class="pink" >Planning</paper-button>
  <li><paper-button on-click="dashboard" class="pink" >Home</paper-button>
</ul>
   
	<div class="image">
<img src="./images/invest.jpg" draggable="false"/>
</div>


<div class="container flex">
<div class="card">
  <paper-card heading="Planning"> <mwc-icon class="fancy"><span class="material-icons">
  assessment red 
  </span></mwc-icon>
    <div class="card-content">
   <p> Financial Planning is the process of determining ways to earn, save and spend money and the amount you need to earn, invest and spend. By planning your finances, you manage your money such that you reach your life goals.</p>
  </div>
<p>more information?<paper-button  on-click="planning" class="pink" >click here</paper-button></p>
</paper-card>
</div>


<div class="card">
  <paper-card heading="Investment"> <mwc-icon class="fancy1"><span class="material-icons">
  paid
  </span></mwc-icon> 
    <div class="card-content">
   <p> Investments mean buying assets that you expect to generate a better rate of return in the near future. investing is risky process, Investing is a complex process and we would recommend you to seek the advice of professional.</p>
  </div>
<p>more information?<paper-button on-click="invest" class="pink" >click here</paper-button></p>
</paper-card>
</div>

<div class="card">
  <paper-card heading="Examples">  <mwc-icon class="fancy2">account_circle</mwc-icon> 
    <div class="card-content">
   <p> finacial planning differs from person to person , based on income people can manage their finacial plans ,  It predominantly deals with preservation, growth and further accumulation of the existing wealth , </p>
  </div>
<p>more information?<paper-button on-click="example" class="example" >click here</paper-button></p>
</paper-card>
</div>
</div>


<footer>
<h2><center>@Uniquehire.in</center></h2>
</footer>
</div>



    `;
  }
  // navigating dashboard page to planning page

  planning(){
  
      this.set('route.path','/planning');
   }
  //  nagiating to invest page
   invest(){
     this.set('route.path','/invest');
}
//  nagiating to users page
example(){
  this.set('route.path','/example');
}

  }

window.customElements.define('my-dashboard', MyDashboard);
