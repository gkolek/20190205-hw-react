import { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import MainView from './MainView';
import Contact from './Contact';
import { links } from './App';
export class App extends Component {
  render() {
    return (<BrowserRouter>
      <div className="App">

        <Header links={links} />

        <Route path="/" exact component={MainView} />
        <Route path="/Contact" component={Contact} />
      </div>
    </BrowserRouter>);
  }
}
