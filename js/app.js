
//initializations
var roomateNames = ['Jon','Payam','Steven','Adam','Prad'];
var roomates = new Roomates({model:Roomate});
var tasks = new Tasks({model:Task});

var loadDishWasher = new Task({
	taskName:'Load the DishWasher',
	pointValue:10,
	dailyDouble:false
});

var emptyDishWasher = new Task({
	taskName:'Empty the DishWasher',
	pointValue:20,
	dailyDouble:false
});

var takeOutTrash = new Task({
	taskName:'Take Out the Trash',
	pointValue:25,
	dailyDouble:true
});

var prize = new Prize({
	name:'Chipotle',
	dollarValue:9.00
});

//add models to respective collections

_.each(roomateNames,function(name){
	//create model and add to collection
	roomates.add(new Roomate({
	  name:name
	}));
});

tasks.add(loadDishWasher);
tasks.add(emptyDishWasher);
tasks.add(takeOutTrash);


var app = new RoomatesView();







