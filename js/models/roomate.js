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
		this.completedTasks.push(task);
	},
	addMostRecentTask: function(task){
		this.set('mostRecentTask',task);
	}
});

