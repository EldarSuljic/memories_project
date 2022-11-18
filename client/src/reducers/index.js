import { combineReducers } from 'redux';

import posts from './posts.js';

export const reducers = combineReducers({ posts });
    //export default combineReducers({ posts });
    //in here as a parametar, we can use all of the individual reducers that we have,in our case posts