import { FETCH_FAILURE, FETCH_REQUEST, FETCH_SUCCESS } from "./postsTypes";

export const fecthRequest = () => {
    return {
        type: FETCH_REQUEST
    };
};

export const fecthSuccess = (posts, addPosts = false) => {
    return {
        type: FETCH_SUCCESS,
        payload: posts,
        addUser: addPosts,
    };
};

export const fetchUserFailure = error => {
    return {
        type: FETCH_FAILURE,
        payload: error
    };
};

export const getPostsFromApi = () => {
    return (dispatch) => {
        dispatch(fecthRequest());
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((posts) => { // Corrected variable name from 'users' to 'posts'
                dispatch(fecthSuccess(posts));
            })
            .catch((error) => {
                dispatch(fetchUserFailure(error));
            });
    };
};

export const addPostApi = postsData => {
    return async (dispatch) => {
        dispatch(fecthRequest());
        await fetch('https://jsonplaceholder.typicode.com/posts',
            {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(postsData)
            })
            .then((response) => response.json())
            .then((newPost) => { 
              const tempId = Date.now().toString();
                const postWithLocalId = { ...postsData, id: `local-${tempId}` };
                dispatch(fecthSuccess(postWithLocalId, true));
                console.log(newPost);
            })
            .catch((error) => {
                dispatch(fetchUserFailure(error.message));
            });
    };
};

export const deletePostApi = postID => {
    return async (dispatch) => {
        dispatch(fecthRequest());
        console.log(postID);
        await fetch(`https://jsonplaceholder.typicode.com/posts/${postID}`,
            {
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(postsData)
            })
            .then((response) => response.json())
            .then((newPost) => { 
                dispatch(fecthSuccess(newPost));
                console.log(newPost);
            })
            .catch((error) => {
                dispatch(fetchUserFailure(error.message));
            });
    };
};