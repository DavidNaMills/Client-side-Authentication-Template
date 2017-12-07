import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {connect} from 'react-redux';
// import * as actions from '../../actions/signinUser';
import {signInUser} from '../../actions/signinUser';


const renderInput = (field) => (
    <div>
        <input {...field.input} type={field.type}/>
        {field.meta.touched &&
        field.meta.error &&
        <span className="error">{field.meta.error}</span>}
    </div>
);

class SignIn extends React.Component{ 

    handleFormSubmit=({email, password})=>{
        this.props.signInUser({email, password});
    }

    render(){
        const {handleSubmit} = this.props;
        console.log(this.props.errorMessage);
        return(
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <fieldset className="form-group">
                    <label>Email:</label>
                    <Field name='email' component={renderInput} type="text" className="form-control" />
                </fieldset>
                <fieldset className="form-group">
                    <label>Password:</label>
                    <Field name='password' component={renderInput} type="text" className="form-control" />
                </fieldset>
                {this.props.errorMessage && <div className="alert alert-danger">Sorry! {this.props.errorMessage}</div>}
                <button action="submit" className="btn btn-primary">Sign In</button>
            </form>
        );
    }
};


const mapDispatchToProps = (dispatch, props)=>({
    signInUser: ({email, password})=>dispatch(signInUser({email, password}))
});

const mapStateToProps = (state)=>({
    errorMessage: state.auth.error
});

export default reduxForm({
    form: 'signin'
})(connect(mapStateToProps, mapDispatchToProps)(SignIn));