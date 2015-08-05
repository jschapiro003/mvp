var CompletedTasksView = Backbone.View.extend({
	el:'#completedTasks',
	template: _.template($('#completedTask-template').html()),
	initialize:function(){
		
		this.collection.bind("change", function(model, attributes){
  // do something with the model, here
  		this.render(model);
		}.bind(this));
	},
	render:function(model){
		
			if (!model.get('completedTasks').length){
				return;
			}
			this.$el.append(this.template(model.attributes));
		
		
		return this;
	}

});