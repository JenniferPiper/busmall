'use strict';


Product.allProducts = [];
Product.totalClicks = 0;
Product.currentIndex1 = 0;
//Product.currentIndex2 = 0;
//Product.currentIndex3 = 0;

//make constructor for Product objects
function Product(filepath, name, displayCount, clickCount) {
  this.filepath = filepath;
  this.name = name;
  this.displayCount = displayCount;
  this.clickCount = clickCount;
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
// new Product('img/dragon.jpg' ,'Dragon Meat');
// new Product('img/pen.jpg' ,'Pen Utensils');
// new Product('img/pet-sweep.jpg' ,'Pet Sweeper Shoes');
// new Product('img/scissors.jpg' ,'Pizza Scissors');
// new Product('img/shark.jpg' ,'Shark Sleeping Bag');
// new Product('img/sweep.png' ,'Sweeper for Baby');
// new Product('img/tauntaun.jpg' ,'Tauntaun Sleeping Bag');
// new Product('img/unicorn.jpg' ,'Unicorn Meat');
// new Product('img/usb.gif' ,'USB Tentacle');
// new Product('img/water-can.jpg' ,'Unique Watering Can');
// new Product('img/wine-glass.jpg' ,'Decorative Wine Glass');

function initializeCounts() {
  for(var i in Product.allProducts){
    Product.allProducts[i].displayCount = 0;
    Product.allProducts[i].clickCount = 0;
  }
}
//console.log(Product.allProducts);

//access the image from the DOM
var imgEl1 = document.getElementById('img1');
//var imgEl2 = document.getElementById('img2');
//var imgEl3 = document.getElementById('img3');

//event listener on the image

imgEl1.addEventListener('click', countClick(Product.currentIndex1));
imgEl1.addEventListener('click', randomProducts);
//imgEl2.addEventListener('click', randomProducts);
//imgEl3.addEventListener('click', randomProducts);

//return a random Index from the Product.allProducts array
function randomIndex() {
  return Math.floor(Math.random() * Product.allProducts.length);
}

function randomProducts() {
  //choose a random index
  var index1 = randomIndex();


  //set Product.currentIndex1 to that index
  Product.currentIndex1 = index1;

  //display that image
  imgEl1.src = Product.allProducts[index1].filepath;

  //increment displayCount for that index
  //Product.allProducts[index1].displayCount++;


  //imgEl2.src = Product.allProducts[index].filepath;
  //imgEl3.src = Product.allProducts[index].filepath;


}

function countClick(index) {

  Product.allProducts[index].clickCount++;
  //console.log(Product.allProducts);
  //console.log(index);
}


initializeCounts();
randomProducts(0);
