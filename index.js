var readlinesync = require("readline-sync"); 

console.log("Hello!, Welcome to Bollywood Quiz.")
var name = readlinesync.question("What is ur good name ? ");
console.log("Welcome",name);
console.log("");

console.log("Rules : -- ");
console.log("");

console.log("This is quiz consists of 3 levels");
console.log("To enter next level you have to answer more questions correctly of present level then wrong.");
console.log("");
console.log("Level 1: 1 points every question (3 questions)");
console.log("Level 2: 2 points every question (2 questions)");
console.log("Level 3: 5 points every question (1 questions)");

question1 = [ { ques: " 'Darr Ki Dikkat Yehi Hain Ke Wo Kabhi bhi khatam Ho Sakta Hain' . Identify the character. ",ans: "Kaleen Bhaiya"},
               { ques: "What is written on the number plate of a car driven by Munna ? ", ans: "King of Mirzapur"},
               { ques: "Full name of character played by Pankaj Tripathi ? ",  ans: "Akhandanand Tripathi"},
                ];

question2 = [ { ques: "Which of actor has the same surname in the series 'Mirzapur' as he does in real life? ", ans: "Pankaj Tripathi"},
               { ques: "'Hum ek naya niyam bana rahe hai, ke Mirzapur ke gaddi pe baithne wala ___________ '.  Fill in the blanks. ", ans: "Koi bhi niyam badal sakta hai"} ];
               
question3 = [ { ques: "Who is admin's favourite character in Mirzapur ? ", ans: "Munna Bhaiya"}];

var score = 0;

function ask(question, answer)
{
  var ans = readlinesync.question(question);
  if(ans==answer)
  {
    console.log("You are right");
    return 1;
  }
  else
  {
    console.log("You are wrong");
    return 0;
  }
}
console.log("");
console.log("LEVEL 1 : ");
console.log("------");
for(var i=0; i<question1.length; i=i+1)
{
  currques=question1[i];
  var re = ask(currques.ques,currques.ans);
  if(re==1)
  {
    score =score+1;
  }
  console.log("Current Score : ",score);
  console.log("");
}
if(score>=2)
{
  console.log("");
  console.log("LEVEL 2 : ");
  console.log("------");
  for(var i=0; i<question2.length; i=i+1)
  {
    currques=question2[i];
    var re = ask(currques.ques,currques.ans);
    if(re==1)
    {
      score =score+2;
    }
    console.log("Current Score : ",score);
    console.log("");
  }
}
if(score>=6)
{
  console.log("");
  console.log("LEVEL 3 : ");
  console.log("------");
  for(var i=0; i<question3.length; i=i+1)
  {
    currques=question3[i];
    var re = ask(currques.ques,currques.ans);
    if(re==1)
    {
      score =score+5;
    }
    console.log("Current Score : ",score);
    console.log("");
  }
}

console.log("-------");
console.log("Final Score : ",score);