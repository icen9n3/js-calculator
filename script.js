let decimalAllowed = true;
let firstNumber = 0;
let operator, plus;
const numberButtonList = document.querySelectorAll(".num")
let displayOverFlow = "";
let overFlowRound = 0


//adds eventlistener to number buttons
for(i = 0; i < numberButtonList.length; i++)
{
  let addNumBtn = numberButtonList[i]
addNumBtn.addEventListener("click", function(){updateDisplay(addNumBtn.innerText)})
}




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
}

 else
  {displayValue = parseFloat(displayField.textContent)}}   
 
 else
 {if(displayField.innerText.length > 10)
  {

    displayField.innerText ="error";

// lastEnteredNum = displayField.innerText.slice(-1) ;
// displayValue = (parseFloat(displayField.textContent).toPrecision(5));

 
// displayValue *=  10
// displayValue += parseInt(lastEnteredNum) ;
// overFlowRound = displayValue.toString();
// displayField.innerText = overFlowRound ;


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
decimalAllowed = false}};


function clearDisplay(decimalAllowed){
displayField.textContent = "";
decimalAllowed = true;
};

function clear(){
  firstNumber = "";
  secondNumber = "";
  operator = "";
  lastDisplayValue = displayValue; 
  lastDisplayValueToNum = String(lastDisplayValue).slice(-1);
  // decimalAllowed = true;   
  clearDisplay();
 };





function backspace() {
editValue = displayField.innerText;
displayField.innerText = editValue.substring(0, editValue.length - 1)
checkLength();};


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
};

function selectSubtract(){
  firstNumber = displayValue;
  operator = subtract;  
  resetCheck(0);
  operandCheck(1)
};

function selectMultiply(){
  firstNumber = displayValue;
  operator = multiply;  
  resetCheck(0);
  operandCheck(1)
};

function selectDivide(){
  firstNumber = displayValue;
  operator = divide;  
  resetCheck(0);
  operandCheck(1)
};


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
  decimalAllowed = true;
  operator = "";};



  function reset() {
    let lastDisplayValue = displayField.innerText 
    clear();
    resetCheck(0)
    updateDisplay(lastDisplayValueToNum)   
  }

function resetCheck(value) {
if (value == 1)
{

for(i=0; i < numberButtonList.length; i++)
  {buttonsListNumber = numberButtonList[i];
    buttonsListNumber.addEventListener("click",reset);}
  }

else if 
(value == 0)
 {for(i=0; i < numberButtonList.length; i++)
    {buttonsListNumber = numberButtonList[i];
      buttonsListNumber.removeEventListener("click",reset);}
    }};



    //adds and removes number button  event listeners after operand
    // is selected. removes event listeners when a number button is entered
function operandCheck(value) {
    if (value == 1)
{
  for(i=0; i < numberButtonList.length; i++)
  {buttonsListNumber = numberButtonList[i];
    buttonsListNumber.addEventListener("click",operandUpdate);}
  }

else if 
(value == 0)
 {
   for(i=0; i < numberButtonList.length; i++)
    {buttonsListNumber = numberButtonList[i];
      buttonsListNumber.removeEventListener("click",operandUpdate);}
  }};


function operandUpdate() {
  decimalAllowed = true;
  lastDisplayValue = displayValue; 
  lastDisplayValueToNum = String(lastDisplayValue).slice(-1);   
  clearDisplay();
  operandCheck(0);  
  updateDisplay(lastDisplayValueToNum);
};




//for keyboard


document.onkeydown = function(event) {

key = event.keyCode;
console.log(event.keyCode)

switch (key)
{
// key: 0
case 48:
case 96:
  numberButtonList[9].click();
break;
// key: 1
case 49:
case 97:
  numberButtonList[6].click();
break;
// key: 2
case 50:
case 98:
  numberButtonList[7].click();
break;

// key: 3
case 51:
case 99:
  numberButtonList[8].click();
break;
// key: 4
case 52:
case 100:
  numberButtonList[3].click();
break;

// key: 5
case 53:
case 101:
  numberButtonList[4].click();
break;

// key: 6
case 54:
case 102:
  numberButtonList[5].click();
break;

// key: 7
case 55:
case 103:
// updateDisplay(7);
numberButtonList[0].click();
break;
// key: 8
case 56:
case 104:
  numberButtonList[1].click();
break;

// key: 9
case 57:
case 105:
  numberButtonList[2].click();
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



