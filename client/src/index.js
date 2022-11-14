import React from 'react';
//import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
//provider is going to keep track of that store which is that global state and that allows us to access that
//store from anywhere inside of the app, we dont have to be exactly in a parent or a child component
//import { applyMiddleware, compose} from 'redux';
import { configureStore } from '@reduxjs/toolkit';
//import thunk from 'redux-thunk';
import './index.css';

import reducers from './reducers';

import App from './App';
//redux setting
const store = configureStore({
    reducer: { reducers: reducers}
});
//**EXAMPLE HOW TO USE IT IN OLDER VERSION OF REACT, BELOW IS CODE FOR NEW VERSION**/
// ReactDOM.render(
//     //wrap out application with a provider component
//     <Provider store={store}>
//         <App />
//     </Provider>,
//      document.getElementById('root')
// );

createRoot(document.getElementById('root')).render(
    //wrap out application with a provider component
     <Provider store={store}>
         <App />
     </Provider>
)

//compose(applyMiddleware(thunk))