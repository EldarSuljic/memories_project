import * as api from '../api'; //* means import everything from the actions as api, so you can use it like api.fetchPosts

//Action Creators - funcitons that return actions
//action is just an object that has the type and payload
//since we are be dealing with asynchronous logic we have to add async(dispatch) function
//and isteand of returning action, we have to dispatch it
export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();

        dispatch({ type: 'FETCH_ALL', payload: data })
    } catch (error) {
        console.log(error.message);
    }
   
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);

        dispatch({ type: 'CREATE', payload: data});
    } catch (error) {
        console.log(error);
    }
}
