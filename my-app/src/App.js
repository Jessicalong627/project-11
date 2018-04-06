import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Redirect,
Switch
} from 'react-router-dom';

// App comp
 import Container from  './Container';
 import PathNotFound from './PathNotFound';



class App extends Component {

    constructor() {
      super();
      this.state = {
        loading: true,
        query: ``
      };
    }

  changeValue (text) { this.setState({query : text}); }

//main app 
  render(){
    return (
    <BrowserRouter>
           <div className="container">
         <Switch>
         <Route exact path='/' render={ () => <Redirect to={`/Nature`}/>}/>
         <Route  path='/search' render={ () => <Container changeValue={this.changeValue.bind(this)} value={this.state} />}/>
         <Route  path='/Nature' render={ () => <Container value='Nature'/>}/>
        <Route  path='/NewYork' render={ () => <Container  value="NewYork"/>}/>
        <Route  path='/Sunset' render={ () => <Container   value="Sunset" />}/>
        <Route component={PathNotFound} />
          </Switch>
         </div>
  </BrowserRouter>
      );
    }
   }


export default App;
