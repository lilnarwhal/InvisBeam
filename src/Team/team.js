import React from 'react';
import { Elina } from "../images/images.js";
import { Ananya } from "../images/images.js";
import { Sharanya } from "../images/images.js";
import { Lily } from "../images/images.js";
import {Navbar} from "../navbar/navbar.js";
import "./team.css";
export class TeamPage extends React.Component {
  render(){
    return(
      <div>
        <div>
          <Navbar />
        </div>
        <table>
          <tbody>
            <tr>
              <td className="text-center leftimg">
                <Elina />
                <p>Elina</p>
              </td>
              <td className="text-center"><Ananya />
              <p>Ananya</p>
              </td>
              <td className="text-center"><Sharanya />
              <p>Sharanya</p>
              </td>
              <td className="text-center rightimg"><Lily />
              <p>Lily</p>
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <br />
        <h3 class="teamp">Elina- Home page, background </h3>
        <h3 class="teamp">Ananya- Navagation bar, How it Works CSS</h3>
        <h3 class="teamp">Sharanya- How it Works JS, How it Works CSS</h3>
        <h3 class="teamp">Lily- Team Page, Navagation bar CSS</h3>
      </div>
    );
  }
}