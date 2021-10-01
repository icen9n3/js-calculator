let decimalAllowed = true;
let firstNumber = 0;
let operator, plus;
const numberBtn = document.querySelectorAll(".num")

//adds eventlistener to number buttons
for(i = 0; i < numberBtn.length; i++)
{let addNumBtn = numberBtn[i]
addNumBtn.addEventListener("click", function(){updateDisplay(addNumBtn.innerText)})}


// const numberZero = document.querySelector("#num0");
// numberZero.addEventListener("click", function(){updateDisplay("0")})

// const numberOne = document.querySelector("#num1");
// numberOne.addEventListener("click", function(){updateDisplay("1")})

// const numberTwo = document.querySelector("#num2");
// numberTwo.addEventListener("click", function(){updateDisplay("2")})

// const numberThree = document.querySelector("#num3");
// numberThree.addEventListener("click", function(){updateDisplay("3")})

// const numberFour = document.querySelector("#num4");
// numberFour.addEventListener("click", function(){updateDisplay("4")})

// const numberFive = document.querySelector("#num5");
// numberFive.addEventListener("click", function(){updateDisplay("5")})

// const numberSix = document.querySelector("#num6");
// numberSix.addEventListener("click", function(){updateDisplay("6")})

// const numberSeven = document.querySelector("#num7");
// numberSeven.addEventListener("click", function(){updateDisplay("7")})

// const numberEight = document.querySelector("#num8");
// numberEight.addEventListener("click", function(){updateDisplay("8")})

// const numberNine = document.querySelector("#num9");
// numberNine.addEventListener("click", function(){updateDisplay("9")})





//operator functions
 const add = function(firstNumber, secondNumber)
{ x = firstNumber + secondNumber;};

const subtract = function (firstNumber, secondNumber)
{ x = firstNumber - secondNumber;};

let multiply = function (firstNumber, secondNumber)
{x = firstNumber * secondNumber};

let divide = function (firstNumber, secondNumber)
{y = firstNumber/secondNumber;
  x = (parseFloat(y).toPrecision(5));
  decimalAllowed = false;};




let display = document.getElementById("display")
const decimal = document.querySelector("#decimal");

decimal.addEventListener("click", function(){decimalCheck(decimalAllowed)})


 function checkLength() {
 if (decimalAllowed == false)   
 {if(displayField.innerText.length > 10)
  {displayField.innerText = "error";}
 else
  {displayValue = parseFloat(displayField.textContent)}}   
 
 else
 {if(displayField.innerText.length > 10)
  {displayField.innerText = "error";
 resetCheck(1)}
  else    
  {displayValue = parseInt(displayField.innerText)};}}


function updateDisplay(x){displayField.textContent =  displayField.innerText + x; 
        checkLength();}
  //  if (decimalAllowed == false)   
  //  {if(displayField.innerText.length > 10)
  //   {displayField.innerText = "error";}
  //  else
  //   {displayValue = parseFloat(displayField.textContent)}}   
   
  //  else
  //  {if(displayField.innerText.length > 10)
  //   {displayField.innerText = "error";
  // resetCheck(1)}
  //   else    
  //   {displayValue = parseInt(displayField.innerText)};}};


function decimalCheck(){
  if (decimalAllowed === true)
{ updateDisplay(".");
decimalAllowed = false}}


function clearDisplay(){
displayField.textContent = "";
decimalAllowed = true;
}

function clear(){
  firstNumber = "";
  secondNumber = "";
  operator = "";
  last = displayValue; 
  lastNum = String(last).slice(-1);   
  clearDisplay();
 
}

function backspace() {
editValue = displayField.innerText;
displayField.innerText = editValue.substring(0, editValue.length - 1)
checkLength();}


const backspaceBtn = document.querySelector("#backspace");
  backspaceBtn.addEventListener("click", backspace);

const clearEntry = document.querySelector("#clearEntry");
clearEntry.addEventListener("click", function(){clearDisplay()})

const clearAll = document.querySelector("#clear");
clearAll.addEventListener("click", function(){clear()})

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
  resetCheck(0);
}

function selectSubtract(){
  firstNumber = displayValue;
  operator = subtract;
  clearDisplay()
  resetCheck(0);
  
}

function selectMultiply(){
  firstNumber = displayValue;
  operator = multiply;
  clearDisplay()
  resetCheck(0);
  
}

function selectDivide(){
  firstNumber = displayValue;
  operator = divide;
  clearDisplay()
  resetCheck(0);

}


function operate()
{ 
  secondNumber = displayValue;
 operator(firstNumber, secondNumber);
 sizeCheck = String(x).length;
 if( sizeCheck > 10)
  {displayField.textContent = (parseFloat(x).toPrecision(5));}
  else 
  {displayField.textContent = x;}
  displayValue = x ;   
  resetCheck(1);
  operator = "";}



  function reset() {
    let last = displayField.innerText 
    clear();
    resetCheck(0)
    updateDisplay(lastNum)
    

  }

 function resetCheck(value) {
if (value == 1)
{

for(i=0; i < numberBtn.length; i++)
  {buttonLoop = numberBtn[i];
    buttonLoop.addEventListener("click",reset);}
  }

else if 
(value == 0)
 {for(i=0; i < numberBtn.length; i++)
    {buttonLoop = numberBtn[i];
      buttonLoop.removeEventListener("click",reset);}
    }}






