var Roomate = Backbone.Model.extend({
	defaults: {
		name:'roomate',
		points:0,
		mostRecentTask:'',
		completedTasks: []
	}
});

