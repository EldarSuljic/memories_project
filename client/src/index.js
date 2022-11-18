import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { reducers } from './reducers';
import App from './App';
import './index.css';


const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

  //**REDUX SETTING**
  // const store = configureStore({
  //     reducer: { reducers: reducers}
  // });
  
  // //**EXAMPLE HOW TO USE IT IN OLDER VERSION OF REACT, BELOW IS CODE FOR NEW VERSION**/
  // ReactDOM.render(
  //     //wrap out application with a provider component
  //     <Provider store={store}>
  //         <App />
  //     </Provider>,
  //      document.getElementById('root')
  // );