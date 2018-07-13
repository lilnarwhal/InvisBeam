import React from 'react';
import "./uses.css";
import { Navbar } from "../navbar/navbar.js";

export class UsesPage extends React.Component {
  render(){
    return(
      <div>
        <h1 class="usesHeader">What could you use an INVISIBLITY BEAM for?</h1>
        <br />
        <Navbar />
        <br />
        <list class="usesp">
            <ul>
              <li>- Break into concerts</li>
              <li>- Halloween enhancement</li>
              <li>- Scare siblings</li>
              <li>- Sneak out of the house</li>
              <li>- Hide belongings</li>
              <li>- Pranks</li>
              <li>- Government assistance</li>
              <li>- Harry Potter will become reality</li>
            </ul>
        </list>
        <img src="https://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/griffin-the-invisible-man-hotel-transylvania-77.5.jpg" alt="mr.invisible" />
      </div>
    );
  }
}