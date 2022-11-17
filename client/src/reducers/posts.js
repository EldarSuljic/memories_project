//reducer is a function that accepts the state and action, then based on the action type do some logic and
//returns either action or the state changed by the action, usually multiple if statements, thats why switch is prefered

// eslint-disable-next-line import/no-anonymous-default-export
export default (posts = [], action) => {
    switch (action.type) {
        case 'DELETE':
            return posts.filter((post) => post._id !== action.payload);
        case 'UPDATE':
            return posts.map((post) => post._id === action.payload._id ? action.payload : post)
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...posts, action.payload]; // spread all the posts (....posts) and then we have to add a new post which is stored in the action.payload
        default:
            return posts;
    }
}
//action.payload is updated post
//renaming state to posts to simplify things because our state is always going to be simply post since we have one reducer