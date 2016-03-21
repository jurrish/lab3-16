// var numberOfCorrectGuesses = 0;
//
// var visitName = prompt('Welcome! What is your name?');
// console.log('the user name is ' + visitName);
// alert('Hello ' + visitName);
//
// var playYesNo = prompt('Do you want to play a game? Please type yes/no');
// playYesNo = playYesNo.toLowerCase();
// console.log('the user wants to play: ' + playYesNo);
// if(playYesNo === 'yes') {
//   alert('Cool. Here we go!');
//   numberOfCorrectGuesses++;
// }else if (playYesNo === 'no'){
//   alert('Too bad. Here we go!');
// }else{
//   alert('not a valid response');
// }

var arrayCorrectAnswers = [];
var arrayPrompts = [];

var pTagOne = document.getElementById('ans-one');
var pQuesOne = document.getElementById('ques-one');

var userInput = prompt('Do you want to play a game? Please type yes/no');
arrayPrompts.push(pQuesOne);
if (userInput.toLowerCase() === 'yes') {
  pTagOne.textContent = 'Cool. Here we go!';
  arrayCorrectAnswers.push(userInput);
}else if (userInput.toLowerCase() === 'no'){
  pTagOne.textContent = 'Too bad. Here we go!';
}else{
  alert('not a valid response');
}

// var ageYesNo = prompt('Do you think I am over 30? yes/no');
// ageYesNo = ageYesNo.toLowerCase();
// console.log('the user thinks i am over 30 but under 35?: ' + ageYesNo);
// if(ageYesNo === 'yes') {
//   alert('That is a good guess');
//   numberOfCorrectGuesses++;
// }else if (ageYesNo === 'no'){
//   alert('I am actually 31');
// }else{
//   alert('not a valid response');
// }


var pTagTwo = document.getElementById('ans-two');
var pQuesTwo = document.getElementById('ques-two');

var userInput = prompt('Do you think I am over 30? yes/no');
arrayPrompts.push(pQuesTwo);
if (userInput.toLowerCase() === 'yes') {
  pTagTwo.textContent = 'That is a good guess';
  arrayCorrectAnswers.push(userInput);
}else if(userInput.toLowerCase() === 'no'){
  pTagTwo.textContent = 'I am actually 31';
}else{
  alert('not a valid response');
}

// var multiYesNo = prompt('Do you think I would be a good muti-tasker? yes/no');
// multiYesNo = multiYesNo.toLowerCase();
// console.log('the user thinks my I am a good multi-tasker: ' + multiYesNo);
// if(multiYesNo === 'yes') {
//   alert('I will take that a a compliment');
//   numberOfCorrectGuesses++;
// }else if(multiYesNo === 'no'){
//   alert('I disagree!');
// }else{
//   alert('not a valid response');
// }
//
var pTagThree = document.getElementById('ans-three');
var pQuesThree = document.getElementById('ques-three');

var userInput = prompt('Do you think I would be a good muti-tasker? yes/no');
arrayPrompts.push(pQuesThree);
if (userInput.toLowerCase() === 'yes') {
  pTagThree.textContent = 'I will take that a a compliment';
  arrayCorrectAnswers.push(userInput);
}else if(userInput.toLowerCase() === 'no'){
  pTagThree.textContent = 'I disagree!';
}else{
  alert('not a valid response');
}

// var goalsYesNo = prompt('Do you think my goals are realistic? yes/no');
// goalsYesNo = goalsYesNo.toLowerCase();
// console.log('the user thinks my goals are realistic: ' + goalsYesNo);
// if(goalsYesNo === 'yes') {
//   alert('Thanks! I agree');
//   numberOfCorrectGuesses++;
// }else if(goalsYesNo === 'no') {
//   alert('I have to disagree with you');
// }else{
//   alert('that is not a valid response');
// }

var pTagFour = document.getElementById('ans-four');
var pQuesFour = document.getElementById('ques-four');

var userInput = prompt('Do you think my goals are realistic? yes/no');
arrayPrompts.push(pQuesFour);
if (userInput.toLowerCase() === 'yes') {
  pTagFour.textContent = 'Thanks! I agree';
  arrayCorrectAnswers.push(userInput);
}else if(userInput.toLowerCase() === 'no'){
  pTagFour.textContent = 'I have to disagree with you';
}else{
  alert('not a valid response');
}

//
// var hireYesNo = prompt('Would you hire me? yes/no');
// hireYesNo = hireYesNo.toLowerCase();
// console.log('Would the user hire me?: ' + hireYesNo);
// if(hireYesNo === 'yes') {
//   alert('I can start today!');
//   numberOfCorrectGuesses++;
//   var answerSix = prompt('Seriously?? You would hire me? yes/no');
//   console.log('confirmation of job hire: ' + answerSix);
// }else if(hireYesNo === 'no'){
//   alert('I probably need more experience...');
// }else{
//   alert('not a valid answer!!!');
// }

var pTagFive = document.getElementById('ans-five');
var pQuesFive = document.getElementById('ques-five');
var pTagSix = document.getElementById('ans-six');
var pQuesSix = document.getElementById('ques-six');

var userInput = prompt('Would you hire me? yes/no');
arrayPrompts.push(pQuesFive);
arrayPrompts.push(pQuesSix);
if (userInput.toLowerCase() === 'yes') {
  pTagFive.textContent = 'I can start today!';
  arrayCorrectAnswers.push(userInput);
  arrayCorrectAnswers.push(userInput);
}else if(userInput.toLowerCase() === 'no'){
  pTagFive.textContent = 'I probably need more experience...';
}else{
  alert('not a valid response');
}

//
// var amountOfGuesses = 0;
// while(amountOfGuesses < 4 && userGuess !== 31){
//   var userGuess = prompt('how old do you think I am?');
//   userGuess = parseInt(userGuess);
//   amountOfGuesses++;
//   if(userGuess === 31){
//     console.log('user guessed 31 and amount of guesses was less than 4');
//     alert('good guess!');
//     numberOfCorrectGuesses++;
//   } else if(isNaN(userGuess) === true){
//     console.log('user did not enter a numerical value');
//     alert('please enter a numerical value');
//   } else if(userGuess < 31){
//     console.log('the user guessed<31 and amount of guesses <4');
//     alert('too low!');
//   } else if(userGuess > 31){
//     console.log('user guessed >31, amt of guesses <4');
//     alert('too high!');
//   } else{
//     alert('out of guesses!');
//   }
// }
//
// alert(visitName + ', you answered : ' + numberOfCorrectGuesses + ' out of 7 correct!');
//
// var userChoicesArray = [];
// for(i = 0; i < 5; i++){
//   userInput = prompt('Name a game');
//   userChoicesArray.push(userInput);
// }
