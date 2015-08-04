var Roomate = Backbone.Model.extend({
	defaults: {
		name:'roomate',
		points:0,
		mostRecentTask:'',
		completedTasks: []
	},
	initialize: function(){
		
	},
	increaseScore : function(pointIncrease){
		
		this.set('points',this.get('points') + pointIncrease);
	},
	completeTask : function(task){
		this.get('completedTasks').push(task);
	},
	addMostRecentTask: function(task){

		console.log('setting most recent task')
		var task = task.toString()
		this.set('mostRecentTask',task);
	}
});

