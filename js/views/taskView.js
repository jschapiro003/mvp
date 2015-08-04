var TaskView = Backbone.View.extend({

	//tagName: 'input',
	template: _.template($('#task-template').html()),
	
	render:function(){
		
		 this.$el.html(this.template(this.model.attributes));

    return this;
	}
});