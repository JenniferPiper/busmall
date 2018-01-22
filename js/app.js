'use strict';

//array to store all Products
Product.allProducts = [];
//make constructor for Product objects
function Product(filepath, name) {
  this.filepath = filepath;
  this.name = name;
  Product.allProducts.push(this);
}
//create instances of Products

new Product('img/bag.jpg' ,'R2D2 Luggage');
new Product('img/banana.jpg' ,'');
new Product('img/bathroom.jpg' ,'');
new Product('img/boots.jpg' ,'');
new Product('img/breakfast.jpg' ,'');
new Product('img/bubblegum.jpg' ,'');
new Product('img/chair.jpg' ,'');
new Product('img/cthulhu.jpg' ,'');
new Product('img/dog-duck.jpg' ,'');
new Product('img/dragon.jpg' ,'');
new Product('img/pen.jpg' ,'');
new Product('img/pet-sweep.jpg' ,'');
new Product('img/scissors.jpg' ,'');
new Product('img/shark.jpg' ,'');
new Product('img/sweep.png' ,'');
new Product('img/tauntaun.jpg' ,'');
new Product('img/unicorn.jpg' ,'');
new Product('img/usb.gif' ,'');
new Product('img/water-can.jpg' ,'');
new Product('img/wine-glass.jpg' ,'');


//access the image from the DOM

var imgEl = document.getElementById('img1');
// var imgEl2 = document.getElementById('img2');
// var imgEl3 = document.getElementById('img3');

//event listener on the image

imgEl.addEventListener('click', randomProduct);

//callback function for event listener to randomly display a product image

function randomProduct() {
  //choose random Product from Product.allProducts array

  var randomIndex = Math.floor(Math.random() * Product.allProducts.length);

  //display the Product's image 

  imgEl.src = Product.allProducts[randomIndex].filepath;
}

//invoke the callback on page load to show three random product images

randomProduct();