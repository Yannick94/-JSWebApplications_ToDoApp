import util from '../util';
import store from '../store';
import React from 'react';
import { useHistory } from 'react-router-dom';
import _axios from 'axios';

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
			console.log(this.state.token);
			axios.get(util.getRestUrl('todos'),{
				headers: {
					'Authorization' : 'Bearer ' + this.state.token,
					'accept' : 'application/json',
			}}).then(response => 	{
				console.log(response.status);
				console.log(response.data);
			}).catch(error => {
				console.log(error);
			})
		}).catch(function (error){
			console.log(error);
		});


		//const response = await axios.get(util.getRestUrl("users/login"),{headers: {'Authorization' : 'Basic ' + btoa(this.state.name + ':' + this.state.password), 'accept' : 'application/json'}});


		/*axios.get(util.getRestUrl('users/login'),{
			headers: {
				'Authorization': 'Basic ' + btoa(this.state.name + ':' + this.state.password),
				'accept': 'application/json'
			}}
		).then((data) => {
			this.state.token = data;
			this.state.password = '';
			return axios.get(util.getRestUrl('todos'),{
				data: {
					'Authorization': 'Bearer ' + this.state.token,
					'accept': 'application/json'
				}
			});
		}).then(data => {
			store.setUser(this.state.name);
			store.setTodos(data);
			util.showAuthContent(true);
		}).catch((error) => {
			if (error.status === 401) {
				store.setError("Wrong username or password!");
			} else {
				store.setError("Ups, something failed!");
			}
			this.props.history.push("");
		});
		
		
		/*this.getLoginData().then(data => {
			console.log(data);
		});*/
		
		/*var self = this;
		var  apiBaseUrl = util.getRestUrl('users/login');
		const config = {
			method : 'get',
			url: apiBaseUrl,
			headers: {
				'Authorization': 'Basic ' + btoa(this.state.name + ':' + this.state.password),
				'Accept': 'application/json'
			}
		};
		let res = await axios(config);
		console.log(res.status);
		if(res.data.code === 201){
			console.log("Login successfull");
			self.setState({token: res.data.token});

			return <Redirect to='/todos' />;
		}else if(res.data.code === 401){
			console.log("401: Wrong username or password!");
			store.setError("401: Wrong username or password!");
			this.state.Error = "401: Wrong username or password!";
		}else{
			console.log("Ups, something failed!");
			store.setError("Ups, something failed!");
			this.state.Error = "Ups, something failed!";
		}

		
				/*var todosUrl = util.getRestUrl('todos');
				var autHeader = 'Bearer '.concat(this.state.token);
				var acceptHeader = 'application/json';

				axios.get(todosUrl, {headers : {Authorization : autHeader, accept : acceptHeader}}).then(response => {
					if(response.data.code === 200){
						console.log('GetTodos successfull');
						store.setUser(response.data.user);
						store.setTodos(response.data.data);
						//util.showAuthContent(true);
						//router.go('/todos');
					}else if(response.data.code === 401){
						console.log('User not authenticated');
						//store.setError('User not authenticated');
					}else if(response.data.code === 406){
						console.log('unsupported accept type');
						store.setError('unsupported accept type');
					}else{
						console.log('Ups, something failed! - GetTodos');
						store.setError('Ups, something failed!');
					}
				}).catch((error)=>{
					alert(error);
					console.log('error ' +error);
					store.setError(error);
				})*/
	}
}


export default Login;