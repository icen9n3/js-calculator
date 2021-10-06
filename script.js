let decimalAllowed = true;
let firstNumber = 0;
let operator, plus;
const numberBtn = document.querySelectorAll(".num")
let displayOverFlow = "";
let overFlowRound = 0


//adds eventlistener to number buttons
for(i = 0; i < numberBtn.length; i++)
{let addNumBtn = numberBtn[i]
addNumBtn.addEventListener("click", function(){updateDisplay(addNumBtn.innerText)})}




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
  {
    displayValue = (parseFloat(displayField.textContent).toPrecision(10));
    displayField.innerText = "error";
 
  //   displayValue = (parseFloat(displayField.textContent).toPrecision(5));
  //   overFlowRound = displayValue.toString()
  //  displayField.innerText = overFlowRound;


  //    displayOverFlow += "displayField.textContent";
  //    clearDisplay(false);   
  // displayValue = parseFloat(displayOverFlow)

}
 else
  {displayValue = parseFloat(displayField.textContent)}}   
 
 else
 {if(displayField.innerText.length > 10)
  {


// lastEnteredNum = displayField.innerText.slice(-1) ;
// displayValue = (parseFloat(displayField.textContent).toPrecision(5));

 
// displayValue *=  10
// displayValue += parseInt(lastEnteredNum) ;
// overFlowRound = displayValue.toString();
// displayField.innerText = overFlowRound ;


    displayField.innerText ="error";
//  resetCheck(1)
//  displayOverFlow += displayField.textContent;
// clearDisplay(false);


// displayValue = parseFloat(displayOverFlow)

}
  else    
  {displayValue = parseInt(displayField.innerText)};}}


function updateDisplay(x){displayField.textContent =  displayField.innerText + x; 
        checkLength();}



function decimalCheck(){
  if (decimalAllowed === true)
{ updateDisplay(".");
decimalAllowed = false}}


function clearDisplay(decimalAllowed){
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
  resetCheck(0);  
  operandCheck(1);
 }

function selectSubtract(){
  firstNumber = displayValue;
  operator = subtract;
  
  resetCheck(0);
  operandCheck(1)
}

function selectMultiply(){
  firstNumber = displayValue;
  operator = multiply;
  
  resetCheck(0);
  operandCheck(1)
}

function selectDivide(){
  firstNumber = displayValue;
  operator = divide;  
  resetCheck(0);
  operandCheck(1)
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


function operandCheck(value) {
    if (value == 1)
{

for(i=0; i < numberBtn.length; i++)
  {buttonLoop = numberBtn[i];
    buttonLoop.addEventListener("click",operandUpdate);}
  }

else if 
(value == 0)
 {for(i=0; i < numberBtn.length; i++)
    {buttonLoop = numberBtn[i];
      buttonLoop.removeEventListener("click",operandUpdate);}
    }}


function operandUpdate() {
  last = displayValue; 
  lastNum = String(last).slice(-1);   
  clearDisplay();
  operandCheck(0);
  updateDisplay(lastNum)

}




//for keyboard


document.onkeydown = function(event) {

key = event.keyCode;
console.log(event.keyCode)

switch (key)
{
// 0
case 48:
case 96:
  numberBtn[9].click();
break;
// 1
case 49:
case 97:
  numberBtn[6].click();
break;
// 2
case 50:
case 98:
  numberBtn[7].click();
break;

//3
case 51:
case 99:
  numberBtn[8].click();
break;
// 4
case 52:
case 100:
  numberBtn[3].click();
break;

// 5
case 53:
case 101:
  numberBtn[4].click();
break;

// 6
case 54:
case 102:
  numberBtn[5].click();
break;

// 7
case 55:
case 103:
// updateDisplay(7);
numberBtn[0].click();
break;
// 8
case 56:
case 104:
  numberBtn[1].click();
break;

// 9
case 57:
case 105:
  numberBtn[2].click();
break;


//decimal
case 110:
case 190:
  decimalCheck(decimalAllowed);
  break;

// add
case 107:
  selectAdd();
break;

// subtract
case 109:
case 189:
  selectSubtract();
  break;


  // divide
  case 111:
  case 191:
    selectDivide();
    break;


    // multiply
     case 106:
selectMultiply();
   break;
   

  case 8:
  backspace();
  break;

  case 35:
    clear();
    break;

   


case 13:
operate();
break;

}}



