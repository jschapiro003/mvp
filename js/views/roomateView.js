var RoomateView = Backbone.View.extend({

	tagName: 'div',
	template: _.template($('#roomate-template').html()),
	initialize: function(){
		var self = this;
		this.listenTo(this.model, "change", this.render);
		this.listenTo(this.model, "update", this.render);
		this.listenTo(this.model, "add", this.render);
	},
	events: {
		'click img':'displayProfile'
	},
	
	render:function(){
		console.log('re rendering')
		 this.$el.html(this.template(this.model.attributes));

    return this;
	},
	displayProfile: function(){
	alert('attempt to display profile' + localStorage.getItem('username'))
		 window.location.href = "profile.html"
	}
});