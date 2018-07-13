import React from 'react';

export class Video extends React.Component{
  render(){
    return(
      <div>
        <iframe title="invisvideo" width="560" height="315" src="https://www.youtube.com/embed/wxH1rmOTpFA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </div>
    );
  }
}