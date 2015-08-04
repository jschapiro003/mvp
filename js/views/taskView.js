var TaskView = Backbone.View.extend({

	events : {
		'click input' : 'taskClick'
	},
	template: _.template($('#task-template').html()),
	
	render:function(){
		
		 this.$el.html(this.template(this.model.attributes));

    return this;
	},
	taskClick: function(e){
		var pointIncrease = parseInt(this.$el.find('span').text());
		var taskPerformed = this.$el.text().slice(10);
		
		console.log('task performed: ' + taskPerformed);
		window.currentUser.increaseScore(pointIncrease);
		window.currentUser.addMostRecentTask(taskPerformed);

		setTimeout(function(){
			$("input:checked").removeAttr('checked');
		},800)
		

	}


});