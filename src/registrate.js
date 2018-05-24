import React, { Component } from 'react';
import FormErrors from './formErrors'
import 'bootstrap/dist/css/bootstrap.css'; 
import 'bootstrap/dist/css/bootstrap-theme.css';
import './App.css';


class Registrate extends Component {
	constructor(props){
		super(props);
		this.state = {
			email: '',
			name: '',
			surname: '',
			password: '',
			formErrors:{
				email:'',
				password:'',
				name:'',
				surname:'' 
			},
			emailValid: false,
			passwordValid: false,
			formValid: false,
			nameValid:false,
			surnameValid:false
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
	handleNameChange(event){
		console.log('name was changed');
		this.setState({name: event.target.value});
		const name = event.target.name;
		const value = event.target.value;
	  this.setState({[name]: value}, 
	                () => { this.validateField(name, value) });
	}
	handleSurnameChange(event){
		console.log('surname was changed');
		this.setState({surname: event.target.value});
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
    let nameValid = this.state.nameValid;
    let surnameValid = this.state.surnameValid;

    switch(fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'password':
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? '': ' is too short';
        break;
        case 'name':
        nameValid = value.length >= 2;
        fieldValidationErrors.name = nameValid ? '': ' is too short';
        break;
        case 'surname':
        surnameValid = value.length >= 2;
        fieldValidationErrors.surname = surnameValid ? '': ' is too short';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    emailValid: emailValid,
                    passwordValid: passwordValid,
                    nameValid: nameValid,
                    surnameValid: surnameValid
                  }, this.validateForm);
	}
	validateForm() {
		  this.setState({formValid: this.state.emailValid &&
		                            this.state.passwordValid &&
		                        	this.state.nameValid &&
		                        	this.state.surnameValid});

		}
		errorClass(error) {
    		return(error.length === 0 ? '' : 'has-error');
		}
  render() {
    return (
      <form onSubmit={this.handleSubmit}
 		className='demoForm'
      >
      	<input type='email' placeholder='E-mail'
      	name='email'
      	className="form-control" 
      	value={this.state.email}
      	onChange={this.handleEmailChange.bind(this)}
      	/>

      	<input type='text' placeholder='Name'
      	name='name'
      	className="form-control"
      	value={this.state.name}
      	onChange={this.handleNameChange.bind(this)}
      	/>

      	<input type='text' placeholder='Surname'
      	name='surname'
      	className="form-control"
      	value={this.state.surname}
      	onChange={this.handleSurnameChange.bind(this)}
      	/>

      	<input type='password' placeholder='password'
      	name='password'
      	className="form-control"
      	value={this.state.password}
      	onChange={this.handlePasswordChange.bind(this)}
      	/>

      	<button 
      	className="btn btn-primary"
      	type='submit'
      	disabled={!this.state.formValid}
      	>Registrate</button>
      	<div className="panel panel-default mypanel">
 			<FormErrors formErrors={this.state.formErrors} />
		</div>
      </form>
    );
  }
}

export default Registrate;