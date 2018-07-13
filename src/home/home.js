import React from 'react';
import ReactDOM from 'react-dom';

import "../styles.css";
import "./home.css";
import "../video/video.js";
import "../video/video.css";
import { Video } from "../video/video.js"
import {Navbar} from "../navbar/navbar.js";

export class HomeHead extends React.Component {
  render() {
    return (
      <div>
        <table className="center">
          <tbody>
            <tr>
              <td className="box"> Home</td>
            </tr>
            <tr>
              <td className="shark"> Invisibility Beam </td>
            </tr>
          </tbody>
        </table>
        <p class="package"> The Invisibility Beam costs $1049.99</p>
      </div>
    );
  }
}

export class InvVideo extends React.Component {
  render() {
    return (
      <div className="centervideo">
        <Video />
      </div>
    );
  }
}
export class HomePage extends React.Component {
  render() {
    return (
      <div className="centerhomepage">
      <div>
        <Navbar />
      </div>
        <h1><HomeHead /></h1>
        <h2><InvVideo /></h2>
        <br />
        <br />
        <a href="https://www.youtube.com/embed/wxH1rmOTpFA" >
          <button>Click to fullscreen</button>
        </a>
      </div>
    );
  }
}






