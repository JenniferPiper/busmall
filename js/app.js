'use strict';

Product.allProducts = [];
//Product.totalClicks = 0;

var sessionClicks = 0;

var index1 = 0;
var index2 = 0;
var index3 = 0;

//Number of total clicks before showing results.
var MAX_CLICKS = 25;

//var ulEl = document.getElementById('results');

//array to hold the indices of the three most-recently-displayed products
var displayedIndices = [];

//make constructor for Product objects
function Product(filepath, name) {
  this.filepath = filepath;
  this.name = name;
  this.displayCount = 0;
  this.clickCount = 0;
  Product.allProducts.push(this);
}


//create instances of Products
function createProducts(){
  Product.totalClicks = 0;
  new Product('img/bag.jpg' ,'R2D2 Luggage');
  new Product('img/banana.jpg' ,'Banana Slicer');
  new Product('img/bathroom.jpg' ,'Bathroom Tablet Holder');
  new Product('img/boots.jpg' ,'Toeless Boots');
  new Product('img/breakfast.jpg' ,'Breakfast Appliance');
  new Product('img/bubblegum.jpg' ,'Meatball Bubble Gum');
  new Product('img/chair.jpg' ,'Convex Chair');
  new Product('img/cthulhu.jpg' ,'Cthulhu Action Figure');
  new Product('img/dog-duck.jpg' ,'Dog Duck Bill');
  new Product('img/dragon.jpg' ,'Dragon Meat');
  new Product('img/pen.jpg' ,'Pen Utensils');
  new Product('img/pet-sweep.jpg' ,'Pet Sweeper Shoes');
  new Product('img/scissors.jpg' ,'Pizza Scissors');
  new Product('img/shark.jpg' ,'Shark Sleeping Bag');
  new Product('img/sweep.png' ,'Sweeper for Baby');
  new Product('img/tauntaun.jpg' ,'Tauntaun Sleeping Bag');
  new Product('img/unicorn.jpg' ,'Unicorn Meat');
  new Product('img/usb.gif' ,'USB Tentacle');
  new Product('img/water-can.jpg' ,'Unique Watering Can');
  new Product('img/wine-glass.jpg' ,'Decorative Wine Glass');
}

//access the images from the DOM
var imgEl1 = document.getElementById('img1');
var imgEl2 = document.getElementById('img2');
var imgEl3 = document.getElementById('img3');

//event listeners on the images
imgEl1.addEventListener('click', countClick1);
imgEl2.addEventListener('click', countClick2);
imgEl3.addEventListener('click', countClick3);

//return a random Index from the Product.allProducts array
function randomIndex() {
  return Math.floor(Math.random() * Product.allProducts.length);
}

function countClick1() {
  Product.allProducts[index1].clickCount++;
  afterClick();
}

function countClick2() {
  Product.allProducts[index2].clickCount++;
  afterClick();
}

function countClick3() {
  Product.allProducts[index3].clickCount++;
  afterClick();
}

function afterClick(){
  Product.totalClicks++;
  sessionClicks++;
  console.log('total clicks: ' + Product.totalClicks);
  console.log('session clicks: ' + sessionClicks);
  if( sessionClicks >= MAX_CLICKS ){
    imgEl1.removeEventListener('click', countClick1);
    imgEl2.removeEventListener('click', countClick2);
    imgEl3.removeEventListener('click', countClick3);
    showResults();
  }
  else{
    randomProducts();
  }
}

function storeProducts(){
  var products = JSON.stringify(Product.allProducts);
  localStorage.setItem( 'products', products);
  localStorage.setItem('totalClicks', Product.totalClicks);
}
function retrieveProducts() {
  Product.allProducts = JSON.parse( localStorage.getItem( 'products' ) );
  Product.totalClicks = JSON.parse( localStorage.getItem('totalClicks') );
}

function showResults() {
  storeProducts();
  var barColors = [];
  var clicksPerProduct = [];
  var chartLabels = [];
  for( var i in Product.allProducts) {

    //fill array  with chosen color for chart bars
    barColors[i] = 'lightgreen';

    //fill array with product names
    chartLabels[i] = Product.allProducts[i].name;

    //fill array with click count for each product
    clicksPerProduct[i] = Product.allProducts[i].clickCount;

    // var liEl = document.createElement('li');
    // liEl.textContent = Product.allProducts[i].name + ': Displayed ' + Product.allProducts[i].displayCount + ' times and chosen ' + Product.allProducts[i].clickCount + ' times.';
    // ulEl.appendChild(liEl);
  }
  var sectionEl = document.getElementById('results-section');
  var pEl = document.createElement('p');
  pEl.textContent = 'Total Clicks: ' + Product.totalClicks;
  sectionEl.appendChild(pEl);


  var context = document.getElementById('results-chart').getContext('2d');
  var resultsChart = new Chart(context, { //eslint-disable-line
    type: 'bar',
    data: {
      labels: chartLabels,
      datasets: [{
        label: 'Number of Clicks',
        data: clicksPerProduct,
        backgroundColor: barColors
      }]
    },
    options: {
      scales: {
        xAxes: [{
          ticks: {
            autoSkip: false
          }
        }],
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}

function randomProducts() {
  //choose  random indices
  index1 = randomIndex();
  index2 = randomIndex();
  index3 = randomIndex();

  // recalculate index1 if it matches index2 or index3, or if it is found in the displayedIndices array
  while( index1 === index2 || index1 === index3 || displayedIndices.includes(index1)) {
  // console.log(index1 + '' + index2 + '' + index3);
    index1 = randomIndex();
  }

  //recalculate index2 if it matches index1 or index3, or if it is found in the displayedIndices array
  while( index2 === index1 || index2 === index3 || displayedIndices.includes(index2)) {
    //console.log(index1 + '' + index2 + '' + index3);
    index2 = randomIndex();
  }

  //recalculate index3 if it matches index1 or index2, or if it is found in the displayedIndices array
  while( index3 === index1 || index3 === index2 || displayedIndices.includes(index3)) {
    //console.log(index1 + '' + index2 + '' + index3);
    index3 = randomIndex();
  }

  //display those images
  imgEl1.src = Product.allProducts[index1].filepath;
  imgEl2.src = Product.allProducts[index2].filepath;
  imgEl3.src = Product.allProducts[index3].filepath;

  //increment displayCount for those indices
  Product.allProducts[index1].displayCount++;
  Product.allProducts[index2].displayCount++;
  Product.allProducts[index3].displayCount++;

  //rewrite the array of indices of recently-displayed products
  displayedIndices = [];
  displayedIndices.push(index1);
  displayedIndices.push(index2);
  displayedIndices.push(index3);

  // debugging messages
  // for (var j in displayedIndices) {
  //   console.log(displayedIndices[j] + ': ' + Product.allProducts[displayedIndices[j]].name + ' displayed: ' + Product.allProducts[displayedIndices[j]].displayCount + ' clicked: ' + Product.allProducts[displayedIndices[j]].clickCount);
  // }

}
if(localStorage.products){
  retrieveProducts();
}
else {
  createProducts();
}
index1 = randomIndex();
index2 = randomIndex();
index3 = randomIndex();
randomProducts();