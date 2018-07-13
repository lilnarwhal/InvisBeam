import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { Navbar } from "./navbar/navbar.js";
import {TeamPage} from "./Team/team.js";
import {UsesPage} from "./uses/uses.js";
import {HomePage} from "./home/home.js";
class WholePage extends React.Component {
  render() {
    return (
      <div>
        <h1 class="title">Invisiblility Beam</h1>
        <br />
        <HomePage />
      </div>
    );
  }
}


ReactDOM.render(<WholePage />, document.getElementById('root'));







