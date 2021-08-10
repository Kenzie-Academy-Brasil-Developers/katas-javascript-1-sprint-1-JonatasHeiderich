function oneThroughTwenty() {
  let meuRetorno = [];
for (let counter = 1; counter <= 20; counter++) {
  meuRetorno.push(counter)
}

return meuRetorno
}
console.log(oneThroughTwenty());

function evensToTwenty() {
    let meuRetorno = [];
  for (let counter = 1; counter <= 20; counter++) {
  if (counter % 2 ===0)
    meuRetorno.push(counter)
  }
  
  return meuRetorno
  }
  console.log(evensToTwenty());

function oddsToTwenty() {
  let meuRetorno = [];
for (let counter = 1; counter <= 20; counter++) {
if (counter % 2 !==0)
  meuRetorno.push(counter)
}

return meuRetorno
}
console.log(oddsToTwenty());

function multiplesOfFive() {
  let meuRetorno = [];
for (let counter = 1; counter <= 100; counter++) {
if (counter % 5 ===0 || counter % 5 === 5)
  meuRetorno.push(counter)
}

return meuRetorno
}
console.log(multiplesOfFive());


function squareNumbers() {
  let meuRetorno = [];
for (let counter = 1; counter <= 100; counter++) {
let qP = counter * counter
if (qP <=100){
  meuRetorno.push(qP)
}
}
return meuRetorno
}
console.log(squareNumbers())

function countingBackwards() {
    
  /* Your code goes below
  Write a for or a while loop
  return the result */
}

//call function countingBackwards

function evenNumbersBackwards() {
    
 /* Your code goes below
  Write a for or a while loop
  return the result */
}

//call function evenNumbersBackwards

function oddNumbersBackwards() {
    
 /* Your code goes below
  Write a for or a while loop
  return the result */
}

//call function oddNumbersBackwards

function multiplesOfFiveBackwards() {
    
 /* Your code goes below
  Write a for or a while loop
  return the result */
}

//call function multiplesOfFiveBackwards

function squareNumbersBackwards() {
    
   /* Your code goes below
  Write a for or a while loop
  return the result */
}

//call function squareNumbersBackwards
