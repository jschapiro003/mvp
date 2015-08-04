var TasksView = Backbone.View.extend({
	el: '#taskContainer',
	initialize: function(){
		this.render();
	},
	render:function(){
		this.$el.html('');
		
			tasks.each(function(task){
			
				var taskView = new TaskView({
					model: task
				});

				this.$el.append(taskView.render().el);
			}.bind(this))
		
		return this;
	}
});