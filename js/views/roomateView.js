var RoomateView = Backbone.View.extend({

	tagName: 'div',
	template: _.template($('#roomate-template').html()),
	initialize: function(){
		var self = this;
		this.listenTo(this.model, "change", this.render);
		this.listenTo(this.model, "update", this.render);
		this.listenTo(this.model, "add", this.render);
	},
	
	render:function(){
		
		 this.$el.html(this.template(this.model.attributes));

    return this;
	}
});