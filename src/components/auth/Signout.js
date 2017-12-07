import React from 'react';
import {connect} from 'react-redux';
import {signOutUser} from '../../actions/signinUser'

export class Signout extends React.Component{ 

    componentWillMount(){
        this.props.signoutUser();
    }


    render(){
        return(
            <div>
                <h3>Sorry to see you go.....</h3>
                <h5>have a good day!!!</h5>
            </div>
        );
    }
};

const mapDispatchToActions=(dispatch, props)=>({
    signoutUser : ()=> dispatch(signOutUser())
});

export default connect(null, mapDispatchToActions)(Signout);