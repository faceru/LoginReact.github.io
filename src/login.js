import React, { Component } from 'react';
import FormErrors from './formErrors';
import 'bootstrap/dist/css/bootstrap.css'; 
import 'bootstrap/dist/css/bootstrap-theme.css';
import './App.css';
class Login extends Component {
	constructor(props){
		super(props);
		this.state = {
			email: '',
			password: '',
			formErrors:{email:'', password:''},
			emailValid: false,
			passwordValid: false,
			formValid: false
		};
	}
	handleSubmit(event){
		event.preventDefault();

		console.log('form is submitted');
	}
	handleEmailChange(event){
		console.log('email was changed');
		this.setState({email: event.target.value});
		const name = event.target.name;
	  const value = event.target.value;
	  this.setState({[name]: value}, 
	                () => { this.validateField(name, value) });
	}
	
	handlePasswordChange(event){
		console.log('password was changed');
		this.setState({password: event.target.value});
		const name = event.target.name;
	  const value = event.target.value;
	  this.setState({[name]: value}, 
	                () => { this.validateField(name, value) });
	}
	
	validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;

    switch(fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'password':
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? '': ' is too short';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    emailValid: emailValid,
                    passwordValid: passwordValid
                  }, this.validateForm);
}
		validateForm() {
		  this.setState({formValid: this.state.emailValid &&
		                            this.state.passwordValid});

		}
		errorClass(error) {
    		return(error.length === 0 ? '' : 'has-error');
		}

  render() {
    return (
      <form onSubmit={this.handleSubmit}
      className='demoForm'
      >
      	<div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
      	<input type='email' placeholder='E-mail'
      	className="form-control"
      	name='email' 
      	value={this.state.email}
      	onChange={this.handleEmailChange.bind(this)}
      	/>
      	</div>
      	<div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
      	<input type='password' placeholder='password'
      	className="form-control"
      	name='password'
      	value={this.state.password}
      	onChange={this.handlePasswordChange.bind(this)}
      	/>
      	</div>
      	<button
      	className="btn btn-primary"
      	type='submit'
      	disabled={!this.state.formValid}
      	>login</button>
      	<div className="panel panel-default mypanel">
 			<FormErrors formErrors={this.state.formErrors} />
		</div>
      </form>
    );
  }
}

export default Login;