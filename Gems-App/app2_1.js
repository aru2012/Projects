/*Adding an image array to our Product array*/
(function(){
	var app = angular.module('store', []);
	app.controller('StoreController', function(){
	this.products=gems;//including gem as the property of value from inside of the function
	});
  app.controller('PanelController', function(){
  
    this.tab = 1; //instead of using ng-init directive using this for tab initialization
    /*init good for prototyping but initialization and
     configuration should go inside of controller
    -taking assignment logic out of html and create a function expression
    taking a parameter setTab, and we will set tab property equal to that variable
     */
    this.selectTab = function(setTab){
        this.tab = setTab;
    };
    this.isSelected = function(checkTab){
        return this.tab === checkTab;
    };

  });
  app.controller("ReviewController", function(){
    this.review = {};
    this.products=gems;
    this.addReview = function(product){
      product.reviews.push(this.review); //push this product's review on array
      this.review = {}; //clear out the review so form will reset
    };
  });
	
	var gems = [
  {
    name: 'Azurite',
    description: "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
    shine: 8,
    price: 110.50,
    rarity: 7,
    color: '#CCC',
    faces: 14,
    images: [
      {
      	full:"images/gem-02.gif",
      },
      {
       	full:"images/gem-05.gif",
      }
    ],
    reviews: [
      {
        stars:5,
        body:"I love this product!",
        author: "aru@nima.com",
      }
    ]
  }, 
  {
    name: 'Bloodstone',
    description: "Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.",
    shine: 9,
    price: 22.90,
    rarity: 6,
    color: '#EEE',
    faces: 12,
    images: [
       {
      	full:"images/gem-03.gif",
      },
      {
       	full:"images/gem-06.gif",
      }
    ],
    reviews: [
      {
        stars:5,
        body:"I love this product!",
        author: "aru@nima.com",
      }
    ]
  },
   {
    name: 'Zircon',
    description: "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.",
    shine: 70,
    price: 1100,
    rarity: 2,
    color: '#000',
    faces: 6,
    images: [
       {
      	full:"images/gem-08.gif",
      },
      {
       	full:"images/gem-02.gif",
      }
    ],
    reviews: [
      
    ]
  }];
})();

