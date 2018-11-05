import React, { Component } from 'react';
import Image from './Image';
import ImgNotFound from './ImgNotFound';

export default class ImageContainer extends Component {
//Gets url and displays results unless img cant be found
  render() {
   const results = this.props.data;
    let images;
     if (results.length > 0) {
      images = results.map(image =>
       <Image url={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`} key={image.id}/>
      );
    } else {
      images = <ImgNotFound />
    };
     return(
       <div className="photo-container">
         <h2>Results</h2>
         <ul>
          {images}
        </ul>
      </div>
    );
  }
}
