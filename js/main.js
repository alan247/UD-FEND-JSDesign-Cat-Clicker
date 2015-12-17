$(function() {
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

    saveCatInfo: function(catName) {
      var allCats = model.data;

      for(var i = 0; i < allCats.length; i++) {
        if(allCats[i].name === catName) {
          var newName = $('#new-name').val();
          var newImage = $('#new-picture').val();
          var newClickCount = $('#new-click-count').val();

          allCats[i].clickCount = newClickCount;
          allCats[i].name = newName;
          allCats[i].image = newImage;
        }
      }

      viewList.updateItem(catName, newName);
      viewCat.render(newName);
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
    },

    updateItem: function(catName, newName) {
      $('.cat-item:contains("' + catName + '")').text(newName);
      console.log('Clearlist called');
    }
  };

  var viewCat ={
    init: function() {

      // Listen for clicks on cat list and render cat
      $('.cat-item').on('click', function() {
        $(this).addClass('active').siblings().removeClass('active');
        viewCat.render($(this).text());
      });

      // Prevent default button functionality
      $('button').on('click', function(e) {
        e.preventDefault();
      });

      // Listen for clicks on image and add 1 to current cat click count
      $('#cat-container').on('click', function() {
        var catName = $(this).siblings('h1').text();
        manager.addClick(catName);
      });

      // Listen for clicks on admin button and show admin area
      $('#admin-button').on('click', function() {
        var catName = $('#cat-h1').text();

        $('#admin-area').show();
        $('#admin-button').hide();
        viewCat.fillForm(catName);
      });

      // Listen for clicks on save button and update cat info
      $('#save').on('click', function() {
        var catName = $('#cat-h1').text();
        manager.saveCatInfo(catName);
      });

      // Listen for clicks on cancel button and hide admin area
      $('#cancel').on('click', function() {
        $('#admin-area').hide();
        $('#admin-button').show();
      });
    },

    /**
    * @description Fills the form with current cat info
    * @param {string} - Cat name
    **/
    fillForm: function(catName) {
      var currentCat = manager.getOneCat(catName);
      var currentCatName = currentCat.name;
      var currentCatImg = currentCat.image;
      var currentCatClicks = currentCat.clickCount;

      $('#new-name').val(currentCatName);
      $('#new-picture').val(currentCatImg);
      $('#new-click-count').val(currentCatClicks);

    },

    /**
    * @description  Renders cat on main view based on its name
    * @param {string} - Cat name
    **/
    render: function(catName) {
      var currentCat = manager.getOneCat(catName);
      var currentCatName = currentCat.name;
      var currentCatImg = currentCat.image;
      var currentCatClicks = currentCat.clickCount;

      $("#click-counter").show().text(currentCatClicks);
      $('#admin-button, #cancel, #save').show();

      $('#cat-h1').text(currentCatName);
      $('#cat-container').html('<img src="'+currentCatImg+'" />');

      $('#admin-button').show();
      $('#admin-area').hide();

      this.fillForm(catName);
    }
  };

  manager.init();
}());

