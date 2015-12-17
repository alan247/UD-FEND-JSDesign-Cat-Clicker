
var model = {
    "data": [
      {
        "name":  "Patotas",
        "image": "/images/patotas.jpg",
        "clickCount": 0
      },
      {
        "name":  "Roo",
        "image": "/images/roo.jpg",
        "clickCount": 0
      },
      {
        "name":  "Caty",
        "image": "/images/caty.jpg",
        "clickCount": 0
      },
      {
        "name":  "McMau",
        "image": "/images/mcmau.jpg",
        "clickCount": 0
      },
      {
        "name":  "Panterota",
        "image": "/images/panterota.jpg",
        "clickCount": 0
      }
    ],

    getOneCat: function(catName){
      var allCats = this.data;

      for(var i = 0; i < allCats.length; i++) {
        if(allCats[i].name === catName) {
          return allCats[i];
        }
     }
  }
};


var manager = {
	getCatInfo: function(catName){
    return model.getOneCat(catName);
	},

  getAllCatsInfo: function() {
    return model.data;
  }
};

var viewList = {
	init: function() {



	},

	render: function() {
    var htmlStr = '';
    var allCats = manager.getAllCatsInfo();

    for(var i = 0; i < allCats.length; i++){
      htmlStr += '<li class="cat-item">'+
              allCats[i].name +
              '</li>';
    }
    $('#cat-list').append(htmlStr);
    return htmlStr;
  }

};

var viewCat = {};











/*
var cats =  {
	"names" : [
		"Allison",
		"Johnson"
	]
}


var Cat = function(){
	this.counter = 0;

	var catNames = cats.names;
	for(var i = 0; i < catNames.length; i ++) {
		console.log(catNames[i]);
		// var
		$("#cats-container").append("<div class="cat " + catNames[i] + ""><div class="counter"><span>0</span></div><img onclick="startCats.addClick()" class="cat-picture" src="images/" + catNames[i] + ".jpg" />" + catNames[i] + "</div>");
	}
};

Cat.prototype.addClick = function() {

	console.log(this);

	// $(".cat-picture").on("click", function() {
	// 	var currentCount = Number($("#counter").html());
	// 	currentCount ++;

	// 	$("#counter").html(currentCount);
	// });
};


var startCats = new Cat();

// $(".cat-picture").on("click", startCats.addClick());

*/

