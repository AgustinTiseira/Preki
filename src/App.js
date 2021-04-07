import React,{useState} from 'react'
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import catalogo from './components/catalogo/catalogo.jsx'
import searchBar from './components/nav/nav.jsx';
import footer from './components/footer/footer.jsx'
import main from './components/main/main.jsx'
import AppContext from './applications'
import product from './components/product/product.jsx'
import fav from './components/fav/fav.jsx'

function App() {
  
  return (
    <BrowserRouter>
      <AppContext>
      <Route  path="/" component={searchBar} />
      <Route exact path="/" component={main} />
      <Route exact path="/" component={catalogo}/>
      <Route path="/product/:id" component={product}/>
      <Route path="/fav" component={fav}/>
      <Route path="/" component={footer} />
      </AppContext>
    </BrowserRouter>
  );
}

export default App;
