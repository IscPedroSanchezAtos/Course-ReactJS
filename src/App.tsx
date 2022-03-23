import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './containers/HomePage';
import AllProductsPage from './containers/AllProductsPage';
import CheckoutPage from './containers/CheckoutPage';
import { ROUTE } from './constants/route';
import { HeaderNavigation } from './components/HeaderNavigation';
import { createStore } from 'redux';
import { rootReducer } from './store/rootReducer';
import { Provider } from 'react-redux';
const store = createStore(rootReducer);
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <div className='app-container'>
        <HeaderNavigation />
        <Switch>
          <Route exact component={CheckoutPage} path={ROUTE.CHECKOUT} />
          <Route exact component={AllProductsPage} path={ROUTE.ALL_PRODUCTS} />
          <Route exact component={HomePage} path={ROUTE.HOME} />
          <Redirect to="/" />
        </Switch>
      </div>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
