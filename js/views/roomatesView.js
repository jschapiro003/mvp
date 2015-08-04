var RoomatesView = Backbone.View.extend({
	el: '#leaderboard',
	initialize: function(){
		this.render();
	},
	render:function(){
		this.$el.html('');
		
			roomates.each(function(newRoomate){
			
				var roomateView = new RoomateView({
					model: newRoomate
				});

				this.$el.append(roomateView.render().el);
			}.bind(this))
		
		return this;
	}
});