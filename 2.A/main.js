const myQuestion = [
    {
      Question: "How long does it take a pineapple to grow?",
      Answer: "18 to 24 months"
    },
    {
      Question: "How many hearts does an Octopus have?",
      Answer: "3 hearts"
    },
    {
      Question: "Blue whales tounges can weigh as much as what animal?",
      Answer: "A full grown female elephant"
    }
  ];

  console.log(myQuestion);

const randomIndex = Math.floor(Math.random() * myQuestion.length);
let randomQuestion = myQuestion[randomIndex];
let inputAnswer = prompt(randomQuestion.Question);

window.alert("Your answer is " + inputAnswer);
window.alert("The correct answer is " + randomQuestion.Answer + "!");
window.alert("In conclusion, you answered " + inputAnswer + ". The correct answer is " +randomQuestion.Answer + "!" )