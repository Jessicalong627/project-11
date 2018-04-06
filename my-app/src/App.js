import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

// App components

 import Container from  './Container';
 import PathNotFound from  './PathNotFound';


// Main app layout
class App extends Component {
  render(){
    return (
    <BrowserRouter>
        <Switch>
         <Route exact path="/" render={ () => <Container /> } />
         <Route exact path="/Nature" render={() => <Container /> } />
         <Route exact path="/NewYork" render={() => <Container /> } />
         <Route exact path="/Sunset" render={() => <Container /> } />
          <Route exact path="/Search" render={() => <Container /> } />
         <Route component={PathNotFound}/>
         </Switch>
  </BrowserRouter>
      );
    }
   }


export default App;
