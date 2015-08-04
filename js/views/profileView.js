var ProfileView = Backbone.View.extend({


	el:'#profileContainer',
	template: _.template($('#profile-template').html()),
	initialize: function(){
		this.render();
	},
	
	render:function(){
		
		 this.$el.html(this.template(this.model.attributes));

    return this;
	}
});