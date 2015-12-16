
var cats =  {
	'names' : [
		'Allison',
		'Johnson'
	]
}


var Cat = function(){
	this.counter = 0;

	var catNames = cats.names;
	for(var i = 0; i < catNames.length; i ++) {
		console.log(catNames[i]);
		// var
		$('#cats-container').append('<div class="cat ' + catNames[i] + '"><div class="counter"><span>0</span></div><img onclick="startCats.addClick()" class="cat-picture" src="images/' + catNames[i] + '.jpg" />' + catNames[i] + '</div>');
	}
};

Cat.prototype.addClick = function() {

	console.log(this);

	// $('.cat-picture').on('click', function() {
	// 	var currentCount = Number($('#counter').html());
	// 	currentCount ++;

	// 	$('#counter').html(currentCount);
	// });
};


var startCats = new Cat();

// $('.cat-picture').on('click', startCats.addClick());

