import { combineReducers } from 'redux';

import posts from './posts';

export default combineReducers({ posts }); //in here as a parametar, we can use all of the individual reducers that we have,in our case posts