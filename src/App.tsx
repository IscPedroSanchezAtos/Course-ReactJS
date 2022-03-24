import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './containers/HomePage';
import AllProductsPage from './containers/AllProductsPage';
import CheckoutPage from './containers/CheckoutPage';
import { ROUTE } from './constants/route';
import { HeaderNavigation } from './components/HeaderNavigation';
import { applyMiddleware, createStore } from 'redux';
import { rootReducer } from './store/rootReducer';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { watchProductDetailsSaga } from './store/sagas/productDetailsSaga';
import ProductDetailsAction from './store/actions/productDetailAction';
import startRootSaga from './store/rootSaga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(startRootSaga);

store.dispatch({type: ProductDetailsAction.FETCH_PRODUCTS_DETAILS});
(window as any).shopspree = store;
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
