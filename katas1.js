function oneThroughTwenty() {
  let meuRetorno = [];
 for (let counter = 1; counter <= 20; counter++) {
   meuRetorno.push(counter)
 }
 return meuRetorno
}
console.log(oneThroughTwenty());


function evensToTwenty() {
  let meuRetorno1 = [];
 for (let counter = 1; counter <= 20; counter++) {
  if (counter % 2 ===0);
    meuRetorno1.push(counter)
  } 
    return meuRetorno1
}
  console.log(evensToTwenty());


function oddsToTwenty() {
  let meuRetorno2 = [];
 for (let counter = 1; counter <= 20; counter++) {
 if (counter % 2 !==0)
  meuRetorno2.push(counter)
}
return meuRetorno2
}
console.log(oddsToTwenty());


function multiplesOfFive() {
  let meuRetorno3 = [];
  for (let counter = 1; counter <= 100; counter++) {
  if (counter % 5 ===0 || counter % 5 === 5)
  meuRetorno3.push(counter)
 }
 return meuRetorno3
}
console.log(multiplesOfFive());


function squareNumbers() {
  let meuRetorno4 = [];
 for (let counter = 1; counter <= 100; counter++) {
 let qP = counter * counter
 if (qP <=100){
  meuRetorno4.push(qP)
 }
 }
 return meuRetorno4
}
console.log(squareNumbers())



function countingBackwards() {
  
    let meuRetorno5 = [];
   for (let counter = 20; counter > 0; counter--){
   meuRetorno5.push(counter)
   }
   return meuRetorno5;
   }
   console.log(countingBackwards());
  

function evenNumbersBackwards() {
  let meuRetorno6 = [];
 for (let counter = 20; counter > 0; counter--) {
 if (counter % 2 ===0)
  meuRetorno6.push(counter)
 }
  return meuRetorno6
}
console.log(evenNumbersBackwards());



  function oddNumberBackwards(){
    let meuRetorno7 = []
    for (let counter = 20; counter > 0; counter--){
    if (counter % 2 !== 0)
    meuRetorno7.push(counter)
    }
    return meuRetorno7
    }
    console.log(oddNumberBackwards())
   

    function multiplesOfFiveBackwards() {
      let meuRetorno8 = [];
      for (let counter = 100; counter > 0; counter--){
          if(counter % 5 === 0 || counter % 5 === 5)
              meuRetorno8.push(counter)
      }
      return meuRetorno8
  }
  console.log(multiplesOfFiveBackwards());


function squareNumbersBackwards(){
    let meuRetorno9 = [];
    for (let counter = 100; counter > 0; counter--){
        let qP = counter * counter 
        if (qP <= 100) {
            meuRetorno9.push(qP)
        }
    }
    return meuRetorno9
}
console.log(squareNumbersBackwards())