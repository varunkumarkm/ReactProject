
//let, const and Block scoping
console.log(product);
var product = 13;//undefined

//  console.log(modelId);
//  let modelId = 13;//Referance error

var materialId = 12;
console.log(materialId);//12

let carId = 13;
console.log(carId);//13

//Block scoping
let productId = 100;
{
   let productId = 2000;
}
console.log(productId);//100

//  {
//     let busId = 2000
//  }
//  console.log(busId);//Referance error

function updatebusId (){
 busId = 33;
}
let busId = 54;
updatebusId();// when commant this call function result is 54
console.log(busId);//33

let produc = 42;
for (let produc = 0; produc<10; produc++){
}
console.log(produc);//42

let updateFunctions = [];
for (var i = 0; i<3; i++){
   updateFunctions.push(function(){
       return i;
   });
}
console.log(updateFunctions[0]());//2

let updateFunction = [];
for (let i = 0; i<2; i++){
   updateFunction.push(function(){
       return i;
   });
}
console.log(updateFunction[0]());//0

// const keyword
const MARK_PCT = 100;       // const MARK_PCT;
console.log(MARK_PCT);     // console.log(MARK_PCT); // syntax error initialization mandatory

//  const MARK_DCT = 100;
//  MARK_DCT = 10;
//  console.log(MARK_DCT);//Type error assignment to constant variable

const MARK_GCT = 200;
if(MARK_GCT >0){
   const MARK_GCT = 20;
}
console.log(MARK_GCT);//200

//Arrow Functions =>

var getPrice = () => 9.087;
console.log(typeof getPrice);//function

var getPrice = () => 9.087;
console.log(getPrice());//9.087
//Arrow function with no parantisis 
var getPrice = count => count *8;
console.log(getPrice(3));//24 
//Arrow function with 2 parameters, we using more than one parameter we going paranthisis 
var getPrice = (count, tax) => count * 9 * (2 + tax);//9*2+(2+1)=54
console.log(getPrice(2, 1));//54
//using a block example
var getPrice = (count, tax) => {
   var price = count * 4.00;//4*2 * (1+1)=16
   price *= (1+tax);
   return price;
}
console.log(getPrice(2, 1));//16
    
// document.addEventListener('click', function(){
// console.log(this)
// });Referance error document is not defined, But in browsr shows #document

// document.addEventListener('click', () => console.log(this));Referance error document is not defined, But in browsr shows global object window {...}
//ES5 code
var invoice = {
   number: 123,
   process: function(){
      console.log(this);
   }
};
invoice.process();//{number: 123, process [function: process]}
//For ES6 code
var invoice = {
   number: 123,
   process: () => console.log(this) 
};
invoice.process();//{} global object is created

var invoice = {
   number: 123,
   process: function(){//Because process is function here
           return() => console.log(this.number);//return by a process function
   }
};
invoice.process()();//123

var invoice = {
   number: 123,
   process: function(){
           return() => console.log(this.number);
   }
};
var newInvoice = {//we cannot bind a new object in arrow function
   number :456
};
invoice.process().bind(newInvoice)();//123

var invoice = {
   number: 123,
   process: function(){
           return() => console.log(this.number);
   }
};
var newInvoice = {
   number :456
};
invoice.process().call(newInvoice);//123

// var getPrice = ()
//      => 6.78;
//      console.log(typeofgetPrice);syntax Error unexpectred tocken => because arrow function we not use a new line

var getPrice = () => 6.78;
console.log(getPrice.hasOwnProperty("prototype"));//false

//Default function parameters

var getProduct = function(productId = 1000){
   console.log(productId);
};
getProduct();//1000

var getProduct = function(productId = 1000, type = 'software'){
   console.log(productId +', '+type);
};
getProduct(undefined, 'hardware');//1000, hardware

var getTotal = function(price, tax = price*0.07){
   console.log(price+tax);//5*.0.7+5
};
getTotal(5);//5.35

var basetax = 0.07;
var getTotal = function(price, tax = price*basetax){
   console.log(price + tax);//5*.0.7+5
};
getTotal(5);//5.35

var generatebasetax = () => 0.07;
var getTotal = function(price, tax = price * generatebasetax()){
   console.log(price + tax);//5*.0.7+5
};
getTotal(5);//5.35  we can access the function when we specifying a default 

var getTotal = function(price, tax = 0.07){
   console.log(arguments.length);// it is not a best practice for using the arguments within a function
};
getTotal(5.00);//1

// var getTotal = function(price = adjustment, adjustment = 1.00){
//    console.log(price + adjustment);// syntax error, use before decleration
// };
// getTotal();

var getTotal = function(price = adjustment, adjustment = 1.00){
   console.log(price + adjustment);
};
getTotal(5);//6

// Creating a dynamic function with default
var getTotal = new Function("price = 20.00", "return price;");
console.log(getTotal());//20

//Rest and Spread
//Rest
//Catagories wiil be set to an array
var showCatagories = function (productId, ...Catagories){
   console.log(Catagories instanceof Array);
};
showCatagories(123, 'search', 'advertising');//true

var showCatagories = function (productId, ...Catagories){
   console.log(Catagories);
};
showCatagories(123, 'search', 'advertising');//['search', 'advertising']

var showCatagories = function (productId, ...Catagories){
   console.log(Catagories);
};
showCatagories(123);//[]

var showCatagories = function (productId, ...Catagories){
};
console.log(showCatagories.length);//1

var showCatagories = function (productId, ...Catagories){
   console.log(arguments.length);
};
showCatagories(123, 'search', 'advertising');//3

//what happens for new dynamic function
var showCatagories = new Function("...catagories", "return catagories");
console.log(showCatagories('search', 'advertising'));//[ 'search', 'advertising' ]

//Spread
var prices = [45, 78, 34];
var MaxPrice = Math.max(...prices);
console.log(MaxPrice);//78

var prices = [45, 78, 34];
var newPriceArray = [...prices];
console.log(newPriceArray);//[ 45, 78, 34 ]

var newPriceArray = Array (...[,,]);
console.log(newPriceArray);//[ undefined, undefined ]

var newPriceArray =  [...[,,]];
console.log(newPriceArray);//[ undefined, undefined ]

var MaxCode = Math.max(..."43210");
console.log(MaxCode);

var codeArray = ["A", ..."BCD", "E"];
console.log(codeArray);

//Object literal extensions:

var price = 8.09, quality = 30;
var productView = {
   price,
   quality
};
console.log(productView);// {price: 8.09, quality: 30}

var price = 8.09, quality = 30;
var productView = {
   price,
   quality,
   calculateValue(){
      return this.price * this.quality
   }
};
console.log(productView.calculateValue());//242.7
                 //or
                 var price = 8.09, quality = 30;
                 var productView = {
                    price,
                    quality,
                    "calculateValue"(){
                       return this.price * this.quality
                    }
                 };
                 console.log(productView["calculateValue"]());//242.7     
                 
 var field = 'dynamicfield'
 var price = 9.98
 var productView = {
   [field] : price
 };
 console.log(productView);//{ dynamicfield: 9.98 }     
 
 var field = 'dynamicfield'
 var price = 9.98
 var productView = {
   [field + "-001"] : price
 };
 console.log(productView);//{ 'dynamicfield-001': 9.98 }

   var method = 'doit'
   productView = {
      [method + "-001"] (){
         console.log('in a method');
      }
   };
   productView ['doit-001']();// in a method

   var ident = 'productId'
      productView = {
         get [ident] () {
            return true;
         },
         set [ident] (value){
         }
      };
      console.log(productView.productId);//true

      //for ...of loops:

      var catagories = ['hardware', 'software', 'vaporware'];
      for (var item of catagories){
         console.log(item);//hardware software vaporware
      }

      var catagories = [,,];
      for(var item of catagories){
         console.log(item);//undefined undefined
      }

      var codes = "ABCDE";
      var count = 0;
      for (var code of codes){
         count++ ;
      }
      console.log(count);

      //Octal and binary literals: ES6 is new support for this

      var value = 0o10;//it is begin with 0 and followed by o and O is octal value
      console.log(value);//8

      var value = 0O10;
      console.log(value);//8

      var value = 0b10;// b means binary value
      console.log(value);//2

      var value = 0B10;
      console.log(value);//2

      //Template literals

      let invoiceNum = '1350';// Here we using backtik
      console.log(`Invoice Number:${invoiceNum}`);//Invoice Number:1350

      let invoiceNumb = '1350';// Here we using backtik
      console.log(`Invoice Number:\${invoiceNumb}`);//Invoice Number:${invoiceNumb}

      let message = `A
      B
      C`;
      console.log(message);//we get ABC on different line

      let invoiceNumber = '1350';
      console.log(`Invoice Number: ${"Inv-" + invoiceNumber}`);//Invoice Number: Inv-1350

//Interpolation takes first before the function call for example
function showMessage(message){
   let invoiceNo = '99';
   console.log(message);
}
let invoiceNo = '1350';
showMessage (`Invoice Number: ${invoiceNo}`);//Invoice Number: 1350

function processInvoice(segments){
   console.log(segments);
}
processInvoice `template`;//[ 'template' ]

function processInvoice(segments, ...values){
   console.log(segments);
   console.log(values)
}
let invoiceNumbe = '1350';
let amount = '2000'
processInvoice `Invoice: ${invoiceNumbe} for ${amount}`;//[ 'Invoice: ', ' for ', '' ] [ '1350', '2000' ]

// Destracturing
let salary = ['32000', '50000', '75000'];
let [low, average, high] = salary;
console.log(average);//50000

let salaryVal = ['32000', '50000'];
let [low1, average1, high1] = salaryVal;
console.log(high1);//undefined

let salaryValue = ['32000', '50000','75000'];
let [low2, ,high2] = salaryValue;
console.log(high2);//75000

//Rest Parameter
let salaryValu = ['32000', '50000','75000'];
let [low3, ...remaining] = salaryValu;
console.log(remaining);//[ '50000', '75000' ]

let salry = ['32000', '50000'];
let [low4, average4, high4 = 88000] = salry;
console.log(high4);//88000

//Nested Array
let salry1 = ['32000', '50000',['88000', '98000']];
let [low5, average5, [actualLow, actualHigh]] = salry1;
console.log(actualLow);//88000

let salry2 = ['32000', '50000'];
let low6, average6, high6;
[low6, average6, high6 = 88000] = salry2;
console.log(high6);//88000

function reviewSalary ([low, average], high = '88000'){
console.log(average);
}
reviewSalary(['32000', '50000']);//50000

//Destracturing objects example
//working with array we using square brackets[], working with objects we using curly brackets {}
let salarygiven = {
  low7: '32000',
  average7: '50000',
  high7: '75000' 
};
let {low7, average7, high7} = salarygiven;
console.log(high7);//75000

let salarygive = {
   low8: '32000',
   average8: '50000',
   high8: '75000' 
 };
 let {low8: newLow, average8: newAverage, high8: newHigh} = salarygive;
 console.log(newAverage);//50000

//  let salarygivened = {
//    low9: '32000',
//    average9: '50000',
//    high9: '75000' 
//  };
//  let newLow1, newAverage1, newHigh1;
//     {low9: newLow1, average9: newAverage1, high9: newHigh1} = salarygivened;
//  console.log(newHigh1);//SyntaxError: Unexpected token and how to fix this

let salarygivened = {
   low9: '32000',
   average9: '50000',
   high9: '75000' 
 };
 let newLow1, newAverage1, newHigh1;
    ({low9: newLow1, average9: newAverage1, high9: newHigh1} = salarygivened);
 console.log(newHigh1);//75000

 let [maxCode, minCode] = 'AZ';
 console.log(`min: ${minCode} max: ${maxCode}`);//min: Z max: A

 //Advanced Destracture
 let [high10, low10] = [,];
 console.log(`high: ${high10} low: ${low10}`);//high: undefined low: undefined

//  let [high11, low11] = undefined;//instade of undefined we use 'null' also same error 
//  console.log(`high:${high11} low:${low11}`);//we get a runtime error(TypeError:undefined is not iterable)
 
 try{
       let [high12, low12] = undefined;
 }catch(e){
   console.log(e.name);//TypeError
 }

 let [high13, low13, ] = [500, 200] ;
 console.log(`high: ${high13} low: ${low13}`);//high: 500 low: 200

 for (let [a,b] of [[5,10]]){
   console.log(`${a} ${b}`)
 }// 5 10

 let count1 = 0;
 for (let [c,d] of [[5,10]]){
   console.log(`${c} ${d}`);
   count1++ ;
 }
 console.log(count1);//5 10 next line 1












