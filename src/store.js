const STORAGE_KEY = 'todo-app';

function load() {
	if (typeof(localStorage) !== 'undefined' && localStorage) {
		const data = localStorage.getItem(STORAGE_KEY);
		return data ? JSON.parse(data) : {};
	} else {
		return {};
	}
}

function save() {
	if (typeof(localStorage) !== 'undefined' && localStorage) {
		localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
	}
}

window.addEventListener('storage', function(event) {
	if (event.key === STORAGE_KEY) {
		data = load();
	}
});


let data = load();

export default {
	setUser: function(user) {
		data.user = user;
		save();
		//util.updateViewField('user.name', user.name);
	},
	getUser: function() {
		return data.user;
	},
	setError: function(error) {
		data.error = error;
		//util.updateViewField('error', error);
	},
	getError: function() {
		return data.error;
	},
	setTodos: function(todos) {
		data.todos = todos;
		save();
	},
	getTodos: function() {
		return data.todos;
	},
	addTodo: function(todo) {
		data.todos.push(todo);
		save();
	},
	getTodo: function(id) {
		const todo = data.todos.filter(todo => todo.id === Number(id));
		return todo.length === 1 ? todo[0] : null;
	},
	deleteTodo: function(id) {
		const i = data.todos.findIndex(todo => todo.id === Number(id));
		if (i >= 0) {
			data.todos.splice(i, 1);
			save();
		}
	},

	erase: function() {
		data = {};
		if (typeof(localStorage) !== 'undefined' && localStorage) {
			localStorage.removeItem(STORAGE_KEY);
		}
	}
};

