'use strict';

const hours = ["6am ", "7am ", "8am ", "9am ", "10am ", "11am ", "12am ", "1pm ", "2pm ", "3pm ", "4pm ", "5pm ", "6pm ", "7pm "];
function random(min, max) {
  return Math.floor((Math.random() * (max - min + 1)) + min);
}

let shops = [];
function Shop(locname, minCustomers, maxCustomers, avirageCookies) {
  this.locname = locname;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avirageCookies = avirageCookies;
  this.customersPerHour = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  this.cookiesPerHour = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  this.totalcookiesPerHour = 0;

  shops.push(this);
}
Shop.prototype.calulateCustomersPerHour = function () {
  for (let i = 0; i < hours.length; i++) {
    this.customersPerHour[i] = random(this.minCustomers, this.maxCustomers);
  }
}
Shop.prototype.calculateCookiesPerHour = function () {
  for (let i = 0; i < hours.length; i++) {
    this.cookiesPerHour[i] = Math.floor(this.customersPerHour[i] * this.avirageCookies);
    this.totalcookiesPerHour += this.cookiesPerHour[i];
  }
}
let seattle = new Shop('Seattle', 23, 65, 6.3);
let tokyo = new Shop('Tokyo', 3, 24, 1.2);
let dubai = new Shop('Dubai', 11, 38, 3.7);
let paris = new Shop('Paris', 20, 38, 2.3);
let lima = new Shop('Lima', 2, 16, 4.6);

console.log(shops);

let parent = document.getElementById('parent');
// console.log(parent);

let table = document.createElement('table');
parent.appendChild(table);

function makeHeader() {
  let headerRow = document.createElement('tr');
  table.appendChild(headerRow);


  let firstTh = document.createElement('th');
  firstTh.textContent = 'Name';
  headerRow.appendChild(firstTh);
  for (let i = 0; i < hours.length; i++) {
    let theElement = document.createElement('th');
    headerRow.appendChild(theElement);
    theElement.textContent = hours[i];
  }
  let lastTh = document.createElement('th');
  lastTh.textContent = 'Total per Shop';
  headerRow.appendChild(lastTh);
}
Shop.prototype.render = function () {
  let dataRow = document.createElement('tr');
  table.appendChild(dataRow);

  let nameData = document.createElement('td');
  dataRow.appendChild(nameData);
  nameData.textContent = this.locname;


  for (let i = 0; i < hours.length; i++) {
    let tdElement = document.createElement('td');
    tdElement.textContent = this.cookiesPerHour[i];
    dataRow.appendChild(tdElement)

  }

  console.log(this.totalcookiesPerHour);
  let totalDataforEachShop = document.createElement('td');
  dataRow.appendChild(totalDataforEachShop);
  totalDataforEachShop.textContent = this.totalcookiesPerHour;
}



makeHeader();

for (let i = 0; i < shops.length; i++) {
  console.log(shops[i])
  shops[i].calulateCustomersPerHour();
  shops[i].calculateCookiesPerHour();
  shops[i].render();
}
makeFooter()
function makeFooter()
{ let footerRow = document.createElement('tr');
  let tableData=document.createElement('td');
  table.appendChild(footerRow);
  footerRow.appendChild(tableData);
  tableData.textContent='Totals'
  let totalSum = 0
  for ( let i=0; i < shops.length; i++){
  totalSum += shops[i].totalcookiesPerHour } 
  for (let i = 0; i < hours.length; i++){
    let tdElement = document.createElement('td');
    let sum=0; 
    for (let j = 0; j < shops.length; j++){
      sum += shops[j].cookiesPerHour[i];
      
      
      }

    tdElement.textContent=sum
    footerRow.appendChild(tdElement)

  }

  let tdElement = document.createElement('td');
  footerRow.appendChild(tdElement)
  tdElement.textContent=totalSum
}