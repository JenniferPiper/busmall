'use strict';


Product.allProducts = [];
Product.totalClicks = 0;

var index1 = 0;


//array to hold the three currently-displayed products
//var displayedProducts = [];

//make constructor for Product objects
function Product(filepath, name) {
  this.filepath = filepath;
  this.name = name;
  this.displayCount = 0;
  this.clickCount = 0;
  Product.allProducts.push(this);
}


//create instances of Products

// new Product('img/bag.jpg' ,'R2D2 Luggage');
new Product('img/banana.jpg' ,'Banana Slicer');
// new Product('img/bathroom.jpg' ,'Bathroom Tablet Holder');
// new Product('img/boots.jpg' ,'Toeless Boots');
new Product('img/breakfast.jpg' ,'Breakfast Appliance');
// new Product('img/bubblegum.jpg' ,'Meatball Bubble Gum');
new Product('img/chair.jpg' ,'Convex Chair');
// new Product('img/cthulhu.jpg' ,'Cthulhu Action Figure');
new Product('img/dog-duck.jpg' ,'Dog Duck Bill');


//access the image from the DOM
var imgEl1 = document.getElementById('img1');

//event listener on the image
imgEl1.addEventListener('click', countClick1);

//return a random Index from the Product.allProducts array
function randomIndex() {
  return Math.floor(Math.random() * Product.allProducts.length);
}

function countClick1() {
  Product.allProducts[index1].clickCount++;
  randomProducts();
}

function randomProducts() {

  //choose a random index
  index1 = randomIndex();

  //display that image
  imgEl1.src = Product.allProducts[index1].filepath;

  //increment displayCount for that index
  Product.allProducts[index1].displayCount++;

}

randomProducts(0);
