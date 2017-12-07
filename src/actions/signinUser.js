import axios from 'axios';
import {browserHistory} from 'react-router';

const ROOT_URL = 'http://localhost:3000';

const authError = (error)=>{
    return {
    type: 'AUTH_ERROR',
    payload: error
  };
};

export const signInUser=({email, password})=>{
    return (dispatch)=>{
        axios.post(`${ROOT_URL}/signin`, {email, password})
        .then((response)=>{
            dispatch({type:'AUTH_USER'});   //update state to authenticated
            localStorage.setItem('token', response.data.token);// save jwt token
            browserHistory.push('/feature');    //redirect the user
        }).catch((err)=>{
            dispatch(authError('Bad Login Info'));
        })
    }
}

export const signOutUser=()=>{
    localStorage.removeItem('token');   //deletes the token
    return {type: 'UNAUTH_USER'};
};

export const signupUser=({email,password})=>{
    return (dispatch)=>{
        axios.post(`${ROOT_URL}/signup`, {email, password})
        .then((response)=>{
            dispatch({type:'AUTH_USER'});
            localStorage.setItem('token', response.data.token);
            browserHistory.push('.feature');
        }).catch((err)=>{
            dispatch(authError(err.response.data.error));
        });
    }
};

export const fetchMessage=()=>{
   return (dispatch)=>{
    axios.get(ROOT_URL, {
            headers:{authorization:localStorage.getItem('token')}
    }) 
        .then((response)=>{

        })
   };
};