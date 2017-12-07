import React from 'react';
import {connect} from 'react-redux';
import {fetchMessage} from '../actions/signinUser';


class Feature extends React.Component{ 

    componentWillMount(){
        this.props.fetchMessage();
    }

    render(){
        return(
            <div>
                <h4>This is a feature in a private route</h4>
            </div>
        );
    }

};


const mapDispatchToProps=(dispatch, props)=>({
    fetchMessage: ()=>dispatch(fetchMessage())
});

export default connect(null, mapDispatchToProps)(Feature);