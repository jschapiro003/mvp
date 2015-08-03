var RoomateView = Backbone.View.extend({

	tagName: 'div',
	template: _.template($('#roomate-template').html()),
	
	render:function(){
		
		 this.$el.html(this.template(this.model.attributes));

    return this;
	}
});