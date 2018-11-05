import React, { Component } from 'react';
import axios from 'axios';
import apiKey from './Config';
import Navigation from './Navigation';
import ImageContainer from './ImageContainer';

export default class Container extends Component {
  constructor() {
    super();
    this.state = {
      images: [],
      loading: true
    };
  }
  componentDidMount() { this.performSearch(this.props.value); }


  changeSearchText(text) {
    this.props.changeValue(text);
    this.performSearch(text);
  }
// Perform search for flickr
  performSearch (query) {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=12&format=json&nojsoncallback=1`)
    .then( response => {
      this.setState(
        {
          images: response.data.photos.photo,
          loading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
    }

    render() {
      return (
          <div className="container">
            <Navigation changeSearchText={this.changeSearchText.bind(this)}/>
            {
               (this.state.loading)
          ? <div className='loading'> </div>
          :  <ImageContainer data={this.state.images}/>
          }
          </div>
      );
    }
}
