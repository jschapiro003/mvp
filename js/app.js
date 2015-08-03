
//create roomate models
var roomateNames = ['Jon','Payam','Steven','Adam','Prad'];
var roomates = new Roomates({model:Roomate});
_.each(roomateNames,function(name){
	//create model and add to collection
	roomates.add(new Roomate({
	  name:name
	}));
});

var tasks = new Tasks({model:Task});





