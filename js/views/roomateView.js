var RoomateView = Backbone.View.extend({

	tagName: 'div',
	template: _.template($('#roomate-template').html()),
	initialize: function(){
		var self = this;
		this.listenTo(this.model, "change", this.render);
	},
	
	render:function(){
		
		 this.$el.html(this.template(this.model.attributes));

    return this;
	}
});