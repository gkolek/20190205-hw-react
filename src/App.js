import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'

import Header from './Header'
import MainView from './MainView'
import Contact from './Contact'

const links = [
  { url: "/", text: "MainView " },
  { url: "/Contact", text: "Contact" },

]

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header links={links} />
          <Route path="/" exact component={MainView} />
          <Route path="/Contact" component={Contact} />
          
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
