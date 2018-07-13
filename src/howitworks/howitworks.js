import React from "react";
import { ProductOne, ComicImage, ComicImage2 } from "../images/images.js";
import "../styles.css";
import {Navbar} from "../navbar/navbar.js";
//import the image.js file from image folder
export class ImgSection extends React.Component {
  render() {
    return (
      <div className="thingy2 alignleftplz">
        <ProductOne  className="alignleftplz"/>
      </div>
    );
  }
}

export class TextSection extends React.Component {
  render() {
    return (
      <div className="lastmin">
        <li>
          Things are opaque becuase light enters and exits the material but it
won't exit in a straight line instead it gets scattered all over the
place.
</li>
        <li>
          What the beam does is guide the light through the object as if there
was nothing there.
</li>
        <li>
          A powerful beam such as a laser pumps it full of energy and changes
the objects properties making it transparent or invisible to other
lightwaves
</li>
        <li>
          {" "}
          The laser has to have a specific pattern to make the object invisible
so not all lasers work
</li>
      </div>
    );
  }
}
export class How extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <ImgSection />
        <br />
        <TextSection />
      </div>
    );
  }
}
