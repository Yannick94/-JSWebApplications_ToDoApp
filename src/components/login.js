import util from '../util';
import store from '../store';
import React from 'react';
import { withRouter } from 'react-router-dom';
import _axios from 'axios';
import user from '../User';

const baseUrl = util.getRestUrl("");
const axios = _axios.create({
baseUrl,
timeout: 10000,
});


class Login extends React.Component{
	constructor(props) {
		super(props);
		this.state={name:'',
		password:'',
		token:'',
		hasError: ''}
	}



	render(){
		return (<div>
			<h2>Login</h2>
			<form>
				<label>Name</label>
				<input name="username" hinttext="Enter your Username" floatinglabeltext="Username" onChange ={this.handleChangeUsername}/>
				<label>Password</label>
				<input name="password" type="password" hinttext="Enter your Password" floatinglabeltext="Password" onChange= {this.handleChangePassword}/>
				<button onClick={(event) => this.handleClick(event)} className="primary">Login</button> <button data-action="register" className="secondary">Register</button>
			</form>
			<p data-field="error" className="message danger">{this.state.Error}</p>
		</div>);
	}

	handleChangeUsername = (event) => {
		this.setState({name: event.target.value});
	}
	handleChangePassword = (event) => {
		this.setState({password: event.target.value});
	}

	handleClick(event){
		console.log(this.state.name);
		console.log(this.state.password);
		console.log(btoa(this.state.name + ':' + this.state.password));
		console.log(util.getRestUrl("users/login"));

		var myUrl = util.getRestUrl('users/login');
		var myheader = {
			'Authorization': 'Basic ' + btoa(this.state.name + ':' + this.state.password),
			'accept': 'application/json'
		}

		axios.post(myUrl,null,{
			headers : myheader
		}).then(response => {
			this.state.token = response.data;
			this.state.password = '';
			user.token = response.data;
			user.password = '';
			console.log(this.state.token);
		}).catch(function (error){
			console.log(error);
		});

		const myUrlTodos = util.getRestUrl('todos');
		var myheaderTodos = {
			'Authorization' : 'Bearer ' + this.state.token,
			'accept': 'application/json'
		}
		if(this.state.token != ''){
			axios.get(myUrlTodos,{headers : myheaderTodos}).then(response => {
				console.log(response.status)
				console.log(response.data);
				store.setUser(user);
				store.setTodos(response.data);
			}).catch(error => {
				if(error.status === 401){
					store.log("Wrong username or password!!");
				}else{
					store.setError("Ups, something failed!");
				}
			})
		}
	}
}


export default Login;