import React from 'react';
import Header from './components/Header';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Movies from './components/Movies';
import Categories from './components/Categories';
import About from './components/About';
import Hata from './components/Hata';

function App() {
  return (
    <div>
        <Header />
        <Switch>
          <Route exact path = "/" component= { Home } />
          <Route path = "/movies" component= { Movies } />
          <Route path = "/categories" component= { Categories } />
          <Route path = "/about" component= { About } />
          <Route component= { Hata } />
        
        </Switch>
        
    </div>
  ); 
}

export default App;
