import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductList from './ProductList';
import ProductDetails from './ProductDetails';
import AddProduct from './AddProduct';
import EditProduct from './EditProduct';
import DeleteProduct from './DeleteProduct';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><a href="/">ProductList</a></li>
            <li><a href="/add">AddProduct</a></li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact component={ProductList} />
          <Route path="/products/:id" component={ProductDetails} />
          <Route path="/add" component={AddProduct} />
          <Route path="/edit/:id" component={EditProduct} />
          <Route path="/delete/:id" component={DeleteProduct} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
