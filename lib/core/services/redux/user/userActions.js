import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./userTypes"

export const fecthUsersRequest=()=>{
    return {
        type: FETCH_USERS_REQUEST
    }
}
export const fecthUsersSuccess = user =>{
    return {
        type: FETCH_USERS_SUCCESS,
        payload:user
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

    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json()) 
      .then((users) => {
        dispatch(fecthUsersSuccess(users));
      })
      .catch((error) => {
        dispatch(fetchUserFailure(error)); 
      });
  };
};