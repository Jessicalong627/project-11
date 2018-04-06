import React from 'react';
import Image from './Image';
import ImgNotFound from './ImgNotFound';

const ImageContainer = props => {
const results = props.data;

/// maps over images and displays unless it cant be found
  let photos;
   if (results.length > 0) {
   photos = results.map(image =>
     <Image url={"https://farm" + image.farm + ".staticflickr.com/" + image.server + "/" + image.id + "_" + image.secret + "_m.jpg"} key={image.id}/>);
   } else {
     photos = <ImgNotFound />
   }


  return(
    <div className="photo-container">
      <h2>{props.formValue}</h2>
      <ul>
        {photos}
      </ul>
    </div>
  )
}

export default ImageContainer;
