//reducer is a function that accepts the state and action, then based on the action type do some logic and
//returns either action or the state changed by the action, usually multiple if statements, thats why switch is prefered

// eslint-disable-next-line import/no-anonymous-default-export
export default (posts = {}, action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return posts;
        case 'CREATE':
            return posts;
        default:
            return posts;
    }
}

//renaming state to posts to simplify things because our state is always going to be simply post