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
 import '@polymer/paper-input/paper-input.js';
  import '@polymer/paper-button/paper-button.js';
  import '@polymer/paper-card/paper-card.js';
 
  

 
  import './shared-styles.js';

class MyLogin extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;

        }
       .card{
         width:300px;
         margin-left:500px;
         margin-top:100px;
       }
      
       .body{
        background-image: linear-gradient(to right,#667eea , #764ba2);
        margin: 0; height: 570px; overflow: hidden;
      } 
      paper-button.custom {
        align:center;
        margin-left:100px;
        background-color: var(--paper-green-a200);
      }

      
      </style>
      <app-location route="{{route}}" url-space-regex="^[[rootPath]]">
      </app-location>

      <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}">
      </app-route>
      <div class="body">
      <div class="card">
       <h1><center>LOGIN</center></h1>
      
       <paper-input always-float-label   label="Name" id="name" required auto-validate error-message="Enter correct name!"  auto-validate pattern="[a-zA-Z]*" ></paper-input>
   <paper-input type="password" always-float-label label="Password" id="password"  required auto-validate error-message="Enter password!"> </paper-input>
  <paper-button raised class="custom indigo" on-click="login" >Login</paper-button>
<p>Don't have an account?<paper-button on-click="register" class="pink" >click here</paper-button></p>

</div>
</div>
`;
  }
// validating name and password
  login(){
    if(this.$.name.value==""||this.$.password.value==""){
      alert("please enter details")
    }
   else if(this.$.name.value=="rashmi"||this.$.password.value=="rashmi"){
    //  navigating to dashboard
      this.set('route.path','/dashboard');
    }else{
      alert("enter crt details");
     
    }
}
// navigating to register page 
   register() {
  this.set('route.path','/register');
 }


}


// registering elements with browser
window.customElements.define('my-login', MyLogin);
