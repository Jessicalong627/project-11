import React from 'react';
import axios from 'axios';
import apiKey from './Config';
import Search from './Search';
import Navigation from './Navigation';
import ImageContainer from './ImageContainer';


//Sets loader to true and sets state
class Container extends React.Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      loading: true,
      searchValue: ''
    };
  }


  componentDidMount() {
  this.performSearch();
  }
//Fetches info from flickr api and turns off loader
  performSearch = (query= 'hiking') => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=12&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
       photos: response.data.photos.photo,
       loading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
      this.setState({
      searchValue: query,
      loading: true
    });
  }

  NavHandle = e => {
        this.performSearch(e.target.textContent);
        this.setState({ loading: true });
        console.log(e.target.textContent);
      };

  render() {

    console.log(this.state.photos);

    return (
      <div className="Container">
      <Search onSearch={this.performSearch} />
       <Navigation NavHandle = {this.NavHandle}/>
        {
            (this.state.loading)
            ? <div className='loading'> </div>
            : <ImageContainer data={this.state.photos} formValue= {this.state.searchValue}/>
        }
      </div>
    );
  }
}

export default Container;
