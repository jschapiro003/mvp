

//initializations
var roomateNames = ['Jon','Payam','Steven','Adam','Prad'];
var roomates = new Roomates();
var tasks = new Tasks();

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

var tidyLivingRoom = new Task({
	taskName:'Tidy the Living Room',
	pointValue:45,
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
	  name:name,
	  image:'assets/images/' + name.toLowerCase() + '.jpg'
	}));
});


tasks.add(loadDishWasher);
tasks.add(emptyDishWasher);
tasks.add(takeOutTrash);
tasks.add(tidyLivingRoom)





var app = new RoomatesView();
var taskContainer = new TasksView();



$('button').on('click',function(){
	console.log('click event')
	setTimeout(function(){
		$('#taskContainer').toggleClass('hidden');
	},700);
	
})


while(!window.currentUser){
	var username = prompt('Welcome! Who would you like to sign in as?');
	var found = false;
	roomates.each(function(roomate){
		if (username === roomate.get('name')){
			window.currentUser = roomate;
			console.log('we found a match')
			found = true;
		}
	});

	if (found === false){
		alert('Sorry, that roomate does not exist');
	}

}








