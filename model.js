//JavaScript Fundamentals

//How to Create a function
function street(name){
 console.log('paate beedi '+ name);// paate beedi mandya
}
street('mandya');

function city(cityName){
    console.log('Hello '+cityName);// Hello mysore
}
city ('mysore');

function multiply(number){
    return number*number;
}
let multi = multiply(12);
console.log(multi); //144
//------------------------------------------------
//Rest Parameter
function stayCars(...allCarIds){
    allCarIds.forEach(id => console.log(id));
}
stayCars(100,200, 300);//100 200 300

function travelBus(val, ...addBusses){
    addBusses.forEach(id => console.log(id));
}
travelBus(100, 200, 300, 400);//200 300 400
//------------------------------------------------

// Destracture Array
 let vechicalId = [12, 24, 36];
 let [vech1, vech2, vech3] = vechicalId;
 console.log(vech1, vech2, vech3);//12 24 36

 let bikeId = [1, 2, 5];
 let bike1, remainingbikeId;
 [bike1, ...remainingbikeId] = bikeId;
 console.log(bike1,remainingbikeId);//1 [2, 5]

 let taxId = [1, 2, 5];
 let remainingTaxId;
 [, ...remainingTaxId] = taxId;
 console.log(remainingTaxId);//[2, 5]
 
 //Destracture objects
  let thar = {id: 5, capacity:'4seats'};
  let {id, capacity} = thar;
  console.log(id, capacity);// 5 4seats

//   let char = {val: 5, style:'maximum'};
//   let val, style;
//   {val, style} = char; error, for this error below program is solution
//   console.log(val, style);

let char = {val: 5, style:'maximum'};
let val, style;
({val, style} = char); 
console.log(val, style);// val style
//------------------------------------------------

//Spread syntax, (This is very similar to rest parameter)

function startVan(van1, van2, van3){
    console.log(van1, van2, van3);
}
let vanId = [100, 200, 300];
startVan(...vanId);// 100 200 300

function startBus(bus1, bus2, bus3, bus4){
    console.log(bus1, bus2, bus3, bus4);
}
let busId = 'abcd';
startBus(...busId);// a b c d 

function startTruck(truck1, truck2, ...rest){
    console.log(rest);
}
let truckId = [10,20,30,40,50,60];
startTruck(...truckId);//[30,40,50,60]
//------------------------------------------------

//





