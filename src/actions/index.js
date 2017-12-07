import axios from 'axios';
import {SAVE_COMMENT} from './types';
import {CHANGE_AUTH} from './types';
import {FETCH_USERS} from './types';


export const saveComment=(payload)=>({
    type: SAVE_COMMENT,
    payload
});

export const authenticate=(isLoggedIn)=>({
    type: CHANGE_AUTH,
    payload: isLoggedIn
});

export const fetchUsers=()=>{
    const request = axios.get('https://jsonplaceholder.typicode.com/users');
    return {
        type: FETCH_USERS,
        payload:request
    }
};



                // payload:[
                //     {name: 'David'},
                //     {name: 'Michaela'},
                //     {name: 'Euan'},
                //     {name: 'Charlotte'},
                // ]