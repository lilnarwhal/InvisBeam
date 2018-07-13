import React from "react";
import ReactDOM from 'react-dom';
import "./navbar.css";
import "../Team/team.css";
import {TeamPage} from "../Team/team.js";
import {UsesPage} from "../uses/uses.js";
import "../uses/uses.css";
import {HomePage} from "../home/home.js";
import {How} from "../howitworks/howitworks.js";

export class Navbar extends React.Component {
  gotouses(){
    ReactDOM.render(<UsesPage />, document.getElementById('root'));
  }
  gototeam() {
    ReactDOM.render(<TeamPage />, document.getElementById('root'));
  }
  gotohomepage() {
    ReactDOM.render(< HomePage />, document.getElementById('root'));
  }
  gotohowpage() {
    ReactDOM.render(<How />, document.getElementById('root'));
  }



  render() {
    return (
      <div class="colordiv">
        <table>
          <thead>
            <th><a onClick={this.gotohomepage}>Home</a></th>
            <th><a onClick={this.gotohowpage}>How It Works</a></th>
            <th><a onClick={this.gotouses}>Uses</a></th>
            <th><a onClick={this.gototeam}>Team</a></th>
          </thead>
        </table>
      </div>

    );
  }
}