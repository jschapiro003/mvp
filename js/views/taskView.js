var TaskView = Backbone.View.extend({

	events : {
		'click input.task' : 'taskClick',
		
	},
	template: _.template($('#task-template').html()),
	
	render:function(){
		
		 this.$el.html(this.template(this.model.attributes));

    return this;
	},
	taskClick: function(e){
		console.log(this.model.attributes)
		var pointIncrease = parseInt(this.$el.find('span').text());
		var taskPerformed = this.$el.text().slice(14);
		taskPerformed = taskPerformed.substring(0, taskPerformed.length - 21);
		if (this.model.get('dailyDouble')){
			pointIncrease = pointIncrease * 1.5;
			alert('Congratulations! You just performed the Daily Double Chore. This task is now worth: '+
			 this.model.get('pointValue')* 1.5);
		}
		
		window.currentUser.increaseScore(pointIncrease);
		window.currentUser.addMostRecentTask(taskPerformed);
		window.currentUser.completeTask(taskPerformed);

		setTimeout(function(){
			$("input:checked").removeAttr('checked');
		},800)
		

	}


});