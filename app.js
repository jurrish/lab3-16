var numberOfCorrectGuesses = 0;

var visitName = prompt('Welcome! What is your name?');
console.log('the user name is ' + visitName);
alert('Hello ' + visitName);

var arrayCorrectAnswers = [];
var arrayPrompts = [];

var pTagOne = document.getElementById('ans-one');
var pQuesOne = document.getElementById('ques-one');

function firstPrompt () {
  var userInput = prompt('Do you want to play a game? Please type yes/no');
  arrayPrompts.push(pQuesOne.textContent);
  if (userInput.toLowerCase() === 'yes') {
    pTagOne.textContent = 'Cool. Here we go!';
    arrayCorrectAnswers.push(userInput);
    numberOfCorrectGuesses++;
  }else if (userInput.toLowerCase() === 'no'){
    pTagOne.textContent = 'Too bad. Here we go!';
  }else{
    alert('not a valid response');
  }
}
firstPrompt();

var pTagTwo = document.getElementById('ans-two');
var pQuesTwo = document.getElementById('ques-two');

function secondPrompt() {
  var userInput = prompt('Do you think I am over 30? yes/no');
  arrayPrompts.push(pQuesTwo.textContent);
  if (userInput.toLowerCase() === 'yes') {
    pTagTwo.textContent = 'That is a good guess';
    arrayCorrectAnswers.push(userInput);
    numberOfCorrectGuesses++;
  }else if(userInput.toLowerCase() === 'no'){
    pTagTwo.textContent = 'I am actually 31';
  }else{
    alert('not a valid response');
  }
}
secondPrompt();

var pTagThree = document.getElementById('ans-three');
var pQuesThree = document.getElementById('ques-three');

function thirdPrompt() {
  var userInput = prompt('Do you think I would be a good muti-tasker? yes/no');
  arrayPrompts.push(pQuesThree.textContent);
  if (userInput.toLowerCase() === 'yes') {
    pTagThree.textContent = 'I will take that a a compliment';
    arrayCorrectAnswers.push(userInput);
    numberOfCorrectGuesses++;
  }else if(userInput.toLowerCase() === 'no'){
    pTagThree.textContent = 'I disagree!';
  }else{
    alert('not a valid response');
  }
}
thirdPrompt();

var pTagFour = document.getElementById('ans-four');
var pQuesFour = document.getElementById('ques-four');

function fourthPrompt() {
  var userInput = prompt('Do you think my goals are realistic? yes/no');
  arrayPrompts.push(pQuesFour.textContent);
  if (userInput.toLowerCase() === 'yes') {
    pTagFour.textContent = 'Thanks! I agree';
    arrayCorrectAnswers.push(userInput);
    numberOfCorrectGuesses++;
  }else if(userInput.toLowerCase() === 'no'){
    pTagFour.textContent = 'I have to disagree with you';
  }else{
    alert('not a valid response');
  }
}
fourthPrompt();

var pTagFive = document.getElementById('ans-five');
var pQuesFive = document.getElementById('ques-five');
var pTagSix = document.getElementById('ans-six');
var pQuesSix = document.getElementById('ques-six');

function fifthPrompt() {
  var userInput = prompt('Would you hire me? yes/no');
  arrayPrompts.push(pQuesFive.textContent);
  arrayPrompts.push(pQuesSix.textContent);
  if (userInput.toLowerCase() === 'yes') {
    pTagFive.textContent = 'I can start today!';
    arrayCorrectAnswers.push(userInput);
    arrayCorrectAnswers.push(userInput);
    numberOfCorrectGuesses++;
  }else if(userInput.toLowerCase() === 'no'){
    pTagFive.textContent = 'I probably need more experience...';
  }else{
    alert('not a valid response');
  }
}
fifthPrompt();

var pTagSeven = document.getElementById('ans-seven');
var pQuesSeven = document.getElementById('ques-seven');

function sixthPrompt() {
  var amountOfGuesses = 0;
  while(amountOfGuesses < 4 && userInput !== 31){
    var userInput = prompt('how old do you think I am?');
    arrayPrompts.push(pQuesSeven.textContent);
    if (parseInt(userInput) === 31) {
      pTagSeven.textContent = 'good guess!';
      arrayCorrectAnswers.push(userInput);
      numberOfCorrectGuesses++;
      break;
    }else if(isNaN(userInput) === true){
      pTagSeven.textContent = 'please enter a numerical value';
      amountOfGuesses++;
    }else if(parseInt(userInput) < 31){
      pTagSeven.textContent = 'too low!';
      amountOfGuesses++;
    }else if(parseInt(userInput) > 31){
      pTagSeven.textContent = 'too high!';
      amountOfGuesses++;
    }else{
      alert('not a valid response');
      amountOfGuesses++;
    }
  }
}
sixthPrompt();

alert(visitName + ', you answered : ' + numberOfCorrectGuesses + ' out of 7 correct!');

var userChoicesArray = [];
for(i = 0; i < 5; i++){
  userInput = prompt('Name a game');
  userChoicesArray.push(userInput);
}
