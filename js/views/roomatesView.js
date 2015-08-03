var RoomatesView = Backbone.View.extend({
	el: '#leaderboard',
	initialize: function(){
		this.render();
	},
	render:function(){
		
		
			roomates.each(function(newRoomate){
			console.log('lets do this a bunch')

				var roomateView = new RoomateView({
					model: newRoomate
				});

				this.$el.append(roomateView.render().el);
			}.bind(this))
		console.log('we are done here')
		return this;
	}
});