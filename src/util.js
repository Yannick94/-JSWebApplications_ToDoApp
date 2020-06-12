const DOMAIN = 'http://distsys.ch:1450/';

export default {

	getRestUrl: function(resource) {
		return DOMAIN + resource;
	},

	getAuthorizationHeader: function(user) {
		return 'Basic ' + btoa(user.name + ':' + user.password);
	},

	showAuthContent: function(visible) {
		if (visible) {
			//$('[data-auth=true]').fadeIn(400);
		} else {
			//$('[data-auth=true]').fadeOut(400);
		}
	},

	updateViewField: function(key, value) {
		//$('[data-field="'+key+'"]').html(value);
	}
};

