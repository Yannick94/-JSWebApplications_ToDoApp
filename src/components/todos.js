import React from 'react';
import {Link} from 'react-router-dom';
import Store from '../store';

class Todos extends React.Component{
	constructor(props) {
		super(props);
		this.state={name:'',
		password:'',
		token:''}
    }
    render(){
		var header = (<div>
			<h2>My Todos</h2>
				<ul>
				<li>
					<a href="#" class="icon success">✓</a>
					<span class="todo-title"></span>
					<a  href="#" class="icon info"></a>
					<span class="actions">
						<a  href="#" class="icon">✎</a>
						<a href="#"  class="icon danger">✗</a>
					</span>
				</li>
					{Store.getTodos.map((todo => {
						if(todo.important && todo.completed){
							return (<li key={todo.id} class='completed important'>{todo.id} <b>{todo.title}</b> {todo.dueDate}</li>)
						}
						if(todo.completed){
							return (<li key={todo.id} class='completed'>{todo.id} <b>{todo.title}</b> {todo.dueDate}</li>)
						}
						if(todo.important){
							return (<li key={todo.id} class='important'>{todo.id} <b>{todo.title}</b> {todo.dueDate}</li>)
						}else{
							return (<li key={todo.id}>{todo.id} <b>{todo.title}</b> {todo.dueDate}</li>)
						}
						
					}))}
				</ul>
			</div>
			);
        return (header);
	}
}

export default Todos;