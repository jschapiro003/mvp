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
		window.currentUser.increaseScore(pointIncrease);

		setTimeout(function(){
			$("input:checked").removeAttr('checked');
		},800)
		

	}


});