'use strict';


Product.allProducts = [];
Product.totalClicks = 0;

var index1 = 0;
var index2 = 0;
var index3 = 0;


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
var imgEl2 = document.getElementById('img2');
var imgEl3 = document.getElementById('img3');

//event listener on the image
imgEl1.addEventListener('click', countClick1);
imgEl2.addEventListener('click', countClick2);
imgEl3.addEventListener('click', countClick3);

//return a random Index from the Product.allProducts array
function randomIndex() {
  return Math.floor(Math.random() * Product.allProducts.length);
}

function countClick1() {
  Product.allProducts[index1].clickCount++;
  randomProducts();
}

function countClick2() {
  Product.allProducts[index2].clickCount++;
  randomProducts();
}

function countClick3() {
  Product.allProducts[index3].clickCount++;
  randomProducts();
}

function randomProducts() {

  //choose a random index
  index1 = randomIndex();
  index2 = randomIndex();
  index3 = randomIndex();

  //display that image
  imgEl1.src = Product.allProducts[index1].filepath;
  imgEl2.src = Product.allProducts[index2].filepath;
  imgEl3.src = Product.allProducts[index3].filepath;

  //increment displayCount for that index
  Product.allProducts[index1].displayCount++;
  Product.allProducts[index2].displayCount++;
  Product.allProducts[index3].displayCount++;

}

randomProducts();
