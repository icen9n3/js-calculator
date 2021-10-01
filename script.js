let decimalAllowed = true;
let firstNumber = 0;
let operator, plus;
const numberBtn = document.querySelectorAll(".num")


//operator functions
 const add = function(firstNumber, secondNumber)
{ x = firstNumber + secondNumber;};

const subtract = function (firstNumber, secondNumber)
{ x = firstNumber - secondNumber;};

let multiply = function (firstNumber, secondNumber)
{x = firstNumber * secondNumber};

let divide = function (firstNumber, secondNumber)
{x = firstNumber/secondNumber};




let display = document.getElementById("display")
const decimal = document.querySelector("#decimal");

decimal.addEventListener("click", function(){decimalCheck(decimalAllowed)})




function updateDisplay(x){display.textContent =  display.innerText + x; 
   if (decimalAllowed == false)   
   {displayValue = parseFloat(display.textContent)}
   else
   {displayValue = parseInt(display.innerText);}};


function decimalCheck(){
  if (decimalAllowed === true)
{ updateDisplay(".");
decimalAllowed = false}}


function clearDisplay(){
display.textContent = "";
decimalAllowed = true;
}

   




const numberZero = document.querySelector("#num0");
numberZero.addEventListener("click", function(){updateDisplay("0")})

const numberOne = document.querySelector("#num1");
numberOne.addEventListener("click", function(){updateDisplay("1")})

const numberTwo = document.querySelector("#num2");
numberTwo.addEventListener("click", function(){updateDisplay("2")})

const numberThree = document.querySelector("#num3");
numberThree.addEventListener("click", function(){updateDisplay("3")})

const numberFour = document.querySelector("#num4");
numberFour.addEventListener("click", function(){updateDisplay("4")})

const numberFive = document.querySelector("#num5");
numberFive.addEventListener("click", function(){updateDisplay("5")})

const numberSix = document.querySelector("#num6");
numberSix.addEventListener("click", function(){updateDisplay("6")})

const numberSeven = document.querySelector("#num7");
numberSeven.addEventListener("click", function(){updateDisplay("7")})

const numberEight = document.querySelector("#num8");
numberEight.addEventListener("click", function(){updateDisplay("8")})

const numberNine = document.querySelector("#num9");
numberNine.addEventListener("click", function(){updateDisplay("9")})





const clearEntry = document.querySelector("#clearEntry");
clearEntry.addEventListener("click", function(){clearDisplay()})

const clearAll = document.querySelector("#clear");
clearAll.addEventListener("click", function(){clear()})

function clear(){
  firstNumber = "";
  secondNumber = "";
  operator = "";
  last = displayValue; 
  lastNum = String(last).slice(-1);   
  clearDisplay();
 
}

const addBtn = document.querySelector("#addition");
addBtn.addEventListener("click", function(){selectAdd()});


const subtractBtn = document.querySelector("#subtract");
subtractBtn.addEventListener("click", function(){selectSubtract()})

  const multiplyBtn = document.querySelector("#multiply");
multiplyBtn.addEventListener("click", function(){selectMultiply()})

const divideBtn = document.querySelector("#divide");
divideBtn.addEventListener("click", function(){selectDivide()})



const equalBtn = document.querySelector("#equals");
  equalBtn.addEventListener("click", operate);


function selectAdd(){
  firstNumber = displayValue;
  operator = add;
  clearDisplay();
  valueCheck(0);
}

function selectSubtract(){
  firstNumber = displayValue;
  operator = subtract;
  clearDisplay()
  valueCheck(0);
  
}

function selectMultiply(){
  firstNumber = displayValue;
  operator = multiply;
  clearDisplay()
  valueCheck(0);
  
}

function selectDivide(){
  firstNumber = displayValue;
  operator = divide;
  clearDisplay()
  valueCheck(0);

}


function operate()
{ 


  secondNumber = displayValue;
 operator(firstNumber, secondNumber);
  display.textContent = x;
  displayValue = x;
   
  valueCheck(1);
  operator = "";
}



  function reset() {
   var last = display.innerText 
    clear();
    valueCheck(0)
    updateDisplay(lastNum)
    

  }



 function valueCheck(value) {
if (value == 1)
{

for(i=0; i < numberBtn.length; i++)
  {buttonLoop = numberBtn[i];
    buttonLoop.addEventListener("click",reset);}
  }

else if  

(value == 0)
 {
for(i=0; i < numberBtn.length; i++)
    {buttonLoop = numberBtn[i];
      buttonLoop.removeEventListener("click",reset);}
    }

}




