// alert(300)
// alert only works with numbers

console.log(100)


// JavaScript Class 2 - 26/03/2025

// Data Types


console.log( `Jide123`) 
// string

console.log(334) 
// number

console.log( false); 
// boolean

console.log(typeof(false)); 
// typeof is used to check what data type a value is


// Variables

var studentThatCameLate = 'Sultan'

console.log(studentThatCameLate);

// Operators in JS
// Arithmetic Operator

console.log(2==='2');

var base = 6
var height = 5

var areaOfTriangle = (1/2 * (base * height))
console.log("Area of triangle=" +areaOfTriangle);


// Assignment: Find area of the shapes below



// Area of Sqaure

var l = 5

var areaOfSquare = l**2
console.log("The area of square= "+areaOfSquare);

// Area of Circle

var Pi = 3.142
var r = 200

var areaOfCircle = Pi * r**2
console.log("The area of circle= "+areaOfCircle);

// Area of Rhombus

var d1 = 5
var d2 = 6

var areaOfRhombus = 1/2 * d1*d2
console.log("The area of rhombus= "+areaOfRhombus);

// Area of Trapezium

var base1 = 5
var base2 = 6
let h = 10

var areaOfTrapezium = (1/2 * (base1+base2) * h)
console.log("Area of Trapezium= "+areaOfTrapezium);

// Area of Parallelogram

var base = 6
var height = 5

var areaOfParallelogram = (base * height)
console.log("Area of Parallelogram= "+areaOfParallelogram);


// Calculate body mass index (BMI)

var weight = 80
var height = 1.8

var bodyMassIndex = (weight / height**2)
console.log("Body Mass Index= "+bodyMassIndex);





// JavaScript Class 3 - 27/03/2025
// Date

var currentYear=new Date().getFullYear()
// var otherDate=2025;

    // console.log(date);
    

// var birthYear=prompt(`Enter your birth year`);
// var age=currentYear-birthYear
// alert(`You are`+age+' years old');


// Concatenation 

// Classwork
// var firstName= 'Damilare'
// var market= 'Wazo'

// alert('I am going to oja'+market)


// Assigment: Get values from user and perform the four arithmetic operations on them

// Addition
alert("Let's do some basic arithmetics. Inputs will be demanded of you as we perform the calculations. Shall we?")
alert("Addition is first on the list. Click on Okay or press Enter to continue")
var firstValue=Number(prompt("Enter the first number to be added"));
var secondValue=Number(prompt("Enter the second number"));

var addition= firstValue + secondValue;

alert ('Answer= ' +addition)




// Subtraction
alert("Now we move to subtraction")
var firstValue=Number(prompt("Enter the first number for subtraction"));
var secondValue=Number(prompt("Enter a lesser number to be subtracted"));

var sub= firstValue - secondValue;

alert ('Answer= ' +sub)


// Multiplication
alert("It's time to multiply...Let's do it!")
var firstValue=Number(prompt("Enter the first number for multiplication"));
var secondValue=Number(prompt("Enter the second number"));

var times= firstValue * secondValue

alert ('Answer= ' +times)

// Division
alert("Lastly, we will be dividing")
var firstValue=Number(prompt("Enter the first number for division"));
var secondValue=Number(prompt("Enter a lesser number"));

var div= firstValue / secondValue

alert ('Answer= ' +div)
alert("That's it! I guess that was fun")