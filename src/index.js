import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import reduxThunk from 'redux-thunk';


import reducers from './reducers';
import Async from './middlewares/async';

import App from './components/app';
import SignIn from './components/auth/Signin';
import Signout from './components/auth/Signout';
import Signup from './components/auth/Signup';
import RequireAuth from './components/auth/requireAuthentication';
import Feature from './components/Feature';
import Welcome from './components/Welcome';


const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

const store = createStoreWithMiddleware(reducers);
const token = localStorage.getItem('token');

if(token){
  store.dispatch({type:'AUTH_USER'});
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Welcome} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signout" component={Signout} />
        <Route path="/signup" component={Signup} />
        <Route path="/feature" component={RequireAuth(Feature)} />
      </Route>

    </Router>
  </Provider>
  , document.querySelector('.container'));