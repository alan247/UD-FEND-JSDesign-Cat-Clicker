
var model = {
    "data": [
      {
        "name":  "Patotas",
        "image": "images/patotas.jpg",
        "clickCount": 0
      },
      {
        "name":  "Roo",
        "image": "images/roo.jpg",
        "clickCount": 0
      },
      {
        "name":  "Caty",
        "image": "images/caty.jpg",
        "clickCount": 0
      },
      {
        "name":  "McMau",
        "image": "images/mcmau.jpg",
        "clickCount": 0
      },
      {
        "name":  "Pantera",
        "image": "images/pantera.jpg",
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
  },

  getOneCat: function(catName) {
    return model.getOneCat(catName);
  },

  addClick: function(catName) {
    var allCats = model.data;

    for(var i = 0; i < allCats.length; i++) {
      if(allCats[i].name === catName) {
        allCats[i].clickCount ++;
      }
    }

    viewCat.render(catName);
  },

  init: function() {
    viewList.init();
    viewCat.init();
  }
};

var viewList = {
	init: function() {
    this.render();
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

var viewCat ={
  init: function() {
    $('.cat-item').on('click', function() {
      viewCat.render($(this).text());
      console.log(this);
    });

    $('#cat-container').on('click', function() {
      var catName = $(this).siblings('h1').text();
      manager.addClick(catName);
    });
  },

  render: function(catName) {
    var currentCat = manager.getOneCat(catName);
    var currentCatName = currentCat.name;
    var currentCatImg = currentCat.image;
    var currentCatClicks = currentCat.clickCount;

    $("#click-counter").show().text(currentCatClicks);

    $('#cat-h1').text(currentCatName);
    $('#cat-container').html('<img src="'+currentCatImg+'" />');
  }
};

manager.init();



