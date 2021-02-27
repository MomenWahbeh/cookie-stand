'use strict';

const hours = ["6am ", "7am ", "8am ", "9am ", "10am ", "11am ", "12am ", "1pm ", "2pm ", "3pm ", "4pm ", "5pm ", "6pm ", "7pm "];
function random(min, max) {
  return Math.floor((Math.random() * (max - min + 1)) + min);
}


function Shop(locname, minCustomers, maxCustomers, avirageCookies) {
  this.locname = locname;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookiesCus = avgCookiesCus ;
  this.customersPerHour = [];
  this.avgCookiesPerHour = [];
  this.totalCookies = 0;

 
}

Shop.prototype.calRandomCustomer = function () {
  for (let i = 0; i < hours.length; i++) {
    this.customersPerHour.push(randomCustomer(this.minCustomers,this.maxCustomers))
    }
  }

Shop.prototype.calAvgCookiesPerHour = function () {
  for (let i = 0; i < this.customersPerHour.length; i++) {

    this.avgCookiesPerHour.push(Math.floor(this.customersPerHour[i]*this.avgCookiesCus));
    this.totalCookies +=Math.floor(this.customersPerHour[i]*this.avgCookiesCus)
  }
}

Shop.prototype.calTotalCookies = function(){

let total=0;
for (let i=0; i<this.avgCookiesPerHour.length;i++) {
  total+= this.avgCookiesPerHour[i]
}
return total;
}
Shop.prototype.totalOfTotal = function(object){
  this.calRandomCustomer();
  this.calAvgCookiesPerHour();
  this.calTotalCookies();

}

let dataName;
Shop.prototype.render = function(){

let tr = document.createElement('tr')
table.appendChild(tr)

dataName = document.createElement("td")
tr.appendChild(dataName)
dataName.textContent = this.locname;


  for (let i = 0; i < hours.length; i++) {
    let theElement = document.createElement('td');
    tr.appendChild(theElement);
    theElement.textContent = this.avgCookiesPerHour[i];
  }


  let dataTotal = document.createElement('td');
  
 tr.appendChild(dataTotal)
 dataTotal.textContent= this.calTotalCookies();
}

function randomCustomer(min,max){
  let rCustomer = Math.floor(Math.random()*((max-min+1)+min))
  return rCustomer;


let seattle = new Shop('Seattle', 23, 65, 6.3);
 let tokyo = new Shop('Tokyo', 3, 24, 1.2);
 let dubai = new Shop('Dubai', 11, 38, 3.7);
/ let paris = new Shop('Paris', 20, 38, 2.3);
 let lima = new Shop('Lima', 2, 16, 4.6)

let allShops = [seattle, tokyo, dubai, paris, lima]




 for (let i = 0; i < hours.length; i++) {
   allShops[i].totalOfTotal();
 }

 let Shops = document.getElementById("shops");
 let table  = document.createElement('table');
 Shops.appendChild(table)


function rowHeading(){
 let tr1= document.createElement("tr")
 table.appendChild(tr1)

 let tableHeading;
 for (let i = 0; i<hours.length;i++){
   tableHeading = document.createElement("th");
   tr1.appendChild(tableHeading);
   tableHeading.textContent = hours[i];
 }

 tableHeading =document.createElement("th");
 tr1.appendChild(tableHeading)
 tableHeading.textContent = "Loc Daily Total";
}
rowHeading();


for (leti=0, i<allShops.length,i++){
  allShops[i].render();
}

let dataTotal;
let grandData;
let grandTotal =0;
let lstTr;
function footerHeading(){
  lstTr = document.createElement("tr")
  table.appendChild(lstTr)

  dataTotal = document.createElement("td")
  lstTr.appendChild(dataTotal)
  dataTotal.innerTxt = "Totals"
  dataTotal.style.fontweight = "500";
  for (let i=0, i< hours.length; i++){
    dataTotal = document.createElement("td")
    lstTr.appendChild(dataTotal)
    let subTotal = 0;
    if (i<hours.length) {
      for ( let j= 0; l< allShops.length; j++){
        subTotal += allShops[j].avgCookiesPerHour[i];
      }
      dataTotal.textContent = subTotal;
    }
  }
}



for (let j = 0; j < allShops.length; j++) {
grandTotal += allShops[j]totalCookies;
}
grandData = document.createElement("td")
lstTr.appendChild(grandData)
grandData.textContent = grandTotal;

return dataTotal
}

footerHeading

let newShops= document.getElementById('ShopsForm')
newShops.addEventListener('submit',submitter)


function submitter(event){
  event.preventDefault();
  let newLocName = event.target.locname.value;
  let mincustomer = event.target.minCustomers.value;
    let maxcustomer = event.target.maxCustomers.value;
    let avgCookiepercustomer = event.target.avgCookie.value;



    if ((newLocName=="")|| !isNaN(newLocName)){
      alert("Kindly Insert Valid Location Name")
    } else if ((isNaN(minCustomers)|| minCustomers=="")||(isNaN(maxCustomers)||maxCustomers=="")||(isNaN(avgCookiepercustomer)|| avgCookiepercustomer =="")){
      alert("Kindly Insert Valid Numbers")
    } else isNaN (Numbers(minCustomers)>Numbers(maxCustomers)){
      alert(" Double Check the Max is Higher than Min")

    }else{
      console.log(allShops);
      let theNewShop = newShops (newLocName,minCustomers, maxCustomers,avgCookiepercustomer)
      allShops.push(theNewShop);
      theNewShop.calTotalCookies();
      lstTr.remove();
      grandTotal =0 ;
      theNewShop.render();
      footerHeading();
      newShops.reset ();
    }
}

