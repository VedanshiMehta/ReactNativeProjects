import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./userTypes"

export const fecthUsersRequest=()=>{
    return {
        type: FETCH_USERS_REQUEST
    }
}
export const fecthUsersSuccess = (user, addUser = false) =>{
    return {
        type: FETCH_USERS_SUCCESS,
        payload:user,
        addUser,
    }
}

export const fetchUserFailure= error =>{
    return{
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

export const getUserFromAPi = () => {
  return (dispatch) => {
    dispatch(fecthUsersRequest());

    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json()) 
      .then((users) => {
        dispatch(fecthUsersSuccess(users));
      })
      .catch((error) => {
        dispatch(fetchUserFailure(error)); 
      });
  };
};

export const addPostApi= postsData =>{
  return async(dispatch) =>{
    dispatch(fecthUsersRequest());
     await fetch('https://jsonplaceholder.typicode.com/posts',
      {
        method:'POST',
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify(postsData)
      })
      .then((response) => response.json())
      .then((user)=> 
      {
        dispatch(fecthUsersSuccess(user,true));
        console.log(user)
      })
      .catch((error)=>{
        dispatch(fetchUserFailure(error.message)); 
      })
  }
}