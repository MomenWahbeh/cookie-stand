'use strict'; 

const hours = ["6am ","7am ","8am ","9am ","10am ","11am ","12am ","1pm ","2pm ","3pm ","4pm ","5pm ","6pm ","7pm "];
function random(min,max){
  return Math.floor(Math.random()*(max-min+1)+min);
  }

  const Seattle = {
    locname:'Seattle',
    minCustomers: 23,
    maxCustomers: 65, 
    aviragecookies: 6.3,
    customersPerHour:[],
    cookiesperHour:[],
    total : 0,



    calulateCustomersPerHour:function(){
      for(let i=0;i<hours.length;i++){
        this.customersPerHour.push(random(this.minCustomers,this.maxCustomers));
      }
    },

    calculateCookiesPerHour:function(){
      for(let i=0;i<hours.length;i++){
      //console.log(this.customersPerHour[i]);
      this.cookiesperHour.push(Math.floor(this.customersPerHour[i]*this.aviragecookies));
      this.total+=this.cookiesperHour[i]
    }

  },
render:function(){
  let parent= document.getElementById('parent');
  console.log(parent)
  let locname = document.createElement('h3');
  parent.appendChild(locname);
  locname.textContent=this.locname;
  let undorderedList=document.createElement('ul');
  parent.appendChild(undorderedList);

  for (let i =0; i<hours.length;i++){
    let listItem=document.createElement('li');
    undorderedList.appendChild(listItem);
    listItem.textContent= `${hours[i]} ;${this.cookiesperHour[i]} cookies`
  }

let totalitem =document.createElement('li');
undorderedList.appendChild(totalitem);
totalitem.textContent=`total: ${this.total} cookies`;
   
}


}
Seattle.calulateCustomersPerHour();
Seattle.calculateCookiesPerHour();
Seattle.render()
console.log(Seattle); 



const Tokyo = {
  locname:'Tokyo',
  minCustomers: 3,
  maxCustomers: 24, 
  aviragecookies: 1.2,
  customersPerHour:[],
  cookiesperHour:[],
  total : 0,



  calulateCustomersPerHour:function(){
    for(let i=0;i<hours.length;i++){
      this.customersPerHour.push(random(this.minCustomers,this.maxCustomers));
    }
  },

  calculateCookiesPerHour:function(){
    for(let i=0;i<hours.length;i++){
    //console.log(this.customersPerHour[i]);
    this.cookiesperHour.push(Math.floor(this.customersPerHour[i]*this.aviragecookies));
    this.total+=this.cookiesperHour[i]
  }

},
render:function(){
let parent= document.getElementById('parent');
console.log(parent)
let locname= document.createElement('h3');
parent.appendChild(locname);
locname.textContent=this.locname;
let undorderedList=document.createElement('ul');
parent.appendChild(undorderedList);

for (let i =0; i<hours.length;i++){
  let listItem=document.createElement('li');
  undorderedList.appendChild(listItem);
  listItem.textContent= `${hours[i]} ;${this.cookiesperHour[i]} cookies`
}

let totalitem =document.createElement('li');
undorderedList.appendChild(totalitem);
totalitem.textContent=`total: ${this.total} cookies`;
 
}


}
Tokyo.calulateCustomersPerHour();
Tokyo.calculateCookiesPerHour();
Tokyo.render()
console.log(Tokyo); 




const Dubai = {
  locname:'Dubai',
  minCustomers: 11,
  maxCustomers: 38, 
  aviragecookies: 3.7,
  customersPerHour:[],
  cookiesperHour:[],
  total : 0,



  calulateCustomersPerHour:function(){
    for(let i=0;i<hours.length;i++){
      this.customersPerHour.push(random(this.minCustomers,this.maxCustomers));
    }
  },

  calculateCookiesPerHour:function(){
    for(let i=0;i<hours.length;i++){
    //console.log(this.customersPerHour[i]);
    this.cookiesperHour.push(Math.floor(this.customersPerHour[i]*this.aviragecookies));
    this.total+=this.cookiesperHour[i]
  }

},
render:function(){
let parent= document.getElementById('parent');
console.log(parent)
let locname= document.createElement('h3');
parent.appendChild(locname);
locname.textContent=this.locname;
let undorderedList=document.createElement('ul');
parent.appendChild(undorderedList);

for (let i =0; i<hours.length;i++){
  let listItem=document.createElement('li');
  undorderedList.appendChild(listItem);
  listItem.textContent= `${hours[i]} ;${this.cookiesperHour[i]} cookies`
}

let totalitem =document.createElement('li');
undorderedList.appendChild(totalitem);
totalitem.textContent=`total: ${this.total} cookies`;
 
}


}


Dubai.calulateCustomersPerHour();
Dubai.calculateCookiesPerHour();
Dubai.render()
console.log(Dubai); 


const Paris = {
  locname:'Paris',
  minCustomers: 20,
  maxCustomers: 38, 
  aviragecookies: 2.3,
  customersPerHour:[],
  cookiesperHour:[],
  total : 0,



  calulateCustomersPerHour:function(){
    for(let i=0;i<hours.length;i++){
      this.customersPerHour.push(random(this.minCustomers,this.maxCustomers));
    }
  },

  calculateCookiesPerHour:function(){
    for(let i=0;i<hours.length;i++){
    //console.log(this.customersPerHour[i]);
    this.cookiesperHour.push(Math.floor(this.customersPerHour[i]*this.aviragecookies));
    this.total+=this.cookiesperHour[i]
  }

},
render:function(){
let parent= document.getElementById('parent');
console.log(parent)
let locname= document.createElement('h3');
parent.appendChild(locname);
locname.textContent=this.locname;
let undorderedList=document.createElement('ul');
parent.appendChild(undorderedList);

for (let i =0; i<hours.length;i++){
  let listItem=document.createElement('li');
  undorderedList.appendChild(listItem);
  listItem.textContent= `${hours[i]} ;${this.cookiesperHour[i]} cookies`
}

let totalitem =document.createElement('li');
undorderedList.appendChild(totalitem);
totalitem.textContent=`total: ${this.total} cookies`;
 
}


}
Paris.calulateCustomersPerHour();
Paris.calculateCookiesPerHour();
Paris.render()
console.log(Paris); 



const Lima = {
  locname:'Lima',
  minCustomers: 2,
  maxCustomers: 16, 
  aviragecookies: 4.6,
  customersPerHour:[],
  cookiesperHour:[],
  total : 0,



  calulateCustomersPerHour:function(){
    for(let i=0;i<hours.length;i++){
      this.customersPerHour.push(random(this.minCustomers,this.maxCustomers));
    }
  },

  calculateCookiesPerHour:function(){
    for(let i=0;i<hours.length;i++){
    //console.log(this.customersPerHour[i]);
    this.cookiesperHour.push(Math.floor(this.customersPerHour[i]*this.aviragecookies));
    this.total+=this.cookiesperHour[i]
  }

},
render:function(){
let parent= document.getElementById('parent');
console.log(parent)
let locname= document.createElement('h3');
parent.appendChild(locname);
locname.textContent=this.locname;
let undorderedList=document.createElement('ul');
parent.appendChild(undorderedList);

for (let i =0; i<hours.length;i++){
  let listItem=document.createElement('li');
  undorderedList.appendChild(listItem);
  listItem.textContent= `${hours[i]} ;${this.cookiesperHour[i]} cookies`
}

let totalitem =document.createElement('li');
undorderedList.appendChild(totalitem);
totalitem.textContent=`total: ${this.total} cookies`;
 
}


}
Lima.calulateCustomersPerHour();
Lima.calculateCookiesPerHour();
Lima.render()
console.log(Lima); 