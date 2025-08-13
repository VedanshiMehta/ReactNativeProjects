import { FETCH_FAILURE, FETCH_REQUEST, FETCH_SUCCESS } from "./postsTypes"

const initialState ={
    isLoading: false,
    posts: [],
    error:''
}

const postsReducer = (state = initialState,action)=>{
    switch(action.type){
        case FETCH_REQUEST:
            return{
                ...state,
                isLoading: true
            }
        case FETCH_SUCCESS:{
            const fetchedPosts = action.payload;

            if (action.addUser) {
                // If we're adding a new post, just prepend it to the list.
                return {
                    ...state,
                    isLoading: false,
                    posts: [fetchedPosts, ...state.posts],
                    error: ''
                };
            } else {
                // If it's a full fetch, we replace the existing API posts but keep the local ones.
                // We'll filter out any old API posts from the state and add the newly fetched ones.
                const localPosts = state.posts.filter(p => typeof p.id === 'string' && p.id.startsWith('local-'));
                const allPosts = [...localPosts, ...fetchedPosts];
                
                return {
                    ...state,
                    isLoading: false,
                    posts: allPosts,
                    error: ''
                };
            }
        }
        case FETCH_FAILURE:
            return{
                isLoading: false,
                posts: [],
                error:action.payload
            }
        default:
             return state
    }
}

export default postsReducer