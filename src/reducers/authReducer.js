
export const defaultState={};

export default (state=defaultState, action)=>{
    switch(action.type){
        case 'AUTH_USER':
            return {...state, error:'', authenticated: true};
        case 'UNAUTH_USER':
            return {...state, authenticated: false};
        case 'AUTH_ERROR':
            return {...state, error: action.payload};
        default:
            return state;
    };
};