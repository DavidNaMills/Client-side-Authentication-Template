import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {connect} from 'react-redux';
import { signupUser } from '../../actions/signinUser';



const renderInput = (field) => (
    <div>
        <input {...field.input} type={field.type}/>
        {field.meta.touched &&
        field.meta.error &&
        <span className="error">{field.meta.error}</span>}      {/*this allows for error messages*/}
    </div>
);


export class Signup extends React.Component{ 

    handleFormSubmit=(formProps)=>{
        this.props.signupUser(formProps)
    };


    render(){
        const {handleSubmit} = this.props;
        return(
            <div>
                <div>Signup</div>
                <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <fieldset className="form-group">
                    <label>Email:</label>
                    <Field name='email' component={renderInput} type="text" className="form-control" />
                </fieldset>
                <fieldset className="form-group">
                    <label>Password:</label>
                    <Field name='password' component={renderInput} type="password" className="form-control" />
                </fieldset>
                <fieldset className="form-group">
                    <label>Confirm Password:</label>
                    <Field name='passwordConfirm' component={renderInput} type="password" className="form-control" />
                </fieldset>

                {this.props.errorMessage && <div className="alert alert-danger">Sorry! {this.props.errorMessage}</div>}
                <button action="submit" className="btn btn-primary">Sign Up</button>
            </form>                
            </div>
        );
    }
};


const validate=({password, passwordConfirm, email})=>{
    const errors = {};

    if(!email){
        errors.email = 'Please enter an email';
    }

    if(!password){
    errors.password="Please enter a password";
    }

    if(!passwordConfirm){
    errors.passwordConfirm="Password must match";
    }

    if(password !== passwordConfirm){
        errors.password = 'Passwords Must Match';
    }

    return errors;
};



const mapDispatchToProps = (dispatch)=>({
    signupUser: (formProps)=>dispatch(signupUser(formProps))
});


const mapStateToProps = (state)=>({
    errorMessage: state.auth.error
});

export default reduxForm({
    form: 'signup',
    validate
})(connect(mapStateToProps, mapDispatchToProps)(Signup));

// 