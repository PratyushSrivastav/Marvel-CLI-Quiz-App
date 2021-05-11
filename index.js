//project created with love using Chalk
var readlineSync=require('readline-sync');
const chalk=require('chalk');

var score=0;

var ironMan=[
  {
  Question:"Question 1: Tony Stark built his first engine at the age of? \n" + "1. Four \n" + "2. Six \n"
          + "3. Seventeen \n" + "4. Fifteen \n",
          Answer :2
  },
  {
            Question:"Question 2: What is Pepper Pots Superhero Name? \n" + "1. Rescue \n" + "2. Help \n"
          + "3. Rendevous \n" + "4. Savior \n",
          Answer:1        
  },
  {
    Question:"Question 3: What is the name of Tony's Computer Assistant? \n" + "1. Friday \n"
          + "2. Edith \n" + "3. Jarvis \n" + "4. Hogan \n",
          Answer: 3
  },
  {
    Question:"Question 4: Who Kidnapped Tony Stark? \n" + "1. Hydra \n" + "2. Hammer \n" + "3. Ten Rings \n"
          + "4. Winter Soldier \n",
          Answer:3
  },
  {
    Question:"Question 5: What is the super-name of Obadiah Stane? \n" + "1. War Monger \n"
          + "2. Iron Monger \n" + "3. Iron Fighter \n" + "4. Iron Patriot \n",
          Answer:2
  }
];
  var captainAmerica=[{
    Question: "Question 1: Which year was Steve Rogers born? \n" + "1. 1915 \n" + "2. 1916 \n" + "3. 1917 \n"
          + "4. 1918 \n",
          Answer: 4
  },
  {
    Question:"Question 2: What is Super Soldier Project officially known? \n" + "1. Project:Insight \n"
          + "2. Project:Rebirth \n" + "3. Project:America \n" + "4. Project:SuperSerum  \n",
          Answer: 2
  },
  {
    Question:"Question 3: What was Captain America's elite unit known as? \n" + "1. Howling Commanods \n"
          + "2. The Patriots \n" + "3. Star Spangled Men \n" + "4. Star Soldiers \n",
          Answer: 1
           },
           {
            Question: "Question 4: Which year was Captain America Unfrozen? \n" + "1. 2009 \n" + "2. 2010 \n"
          + "3. 2011\n" + "4. 2012 \n",
          Answer: 3
           },
           {
             Question:"Question 5: What do Natasha and Steve dress up as in The Winter Soldier? \n"
          + "1. Hipsters \n" + "2. Avengers Outfit \n" + "3. Tourists \n" + "4. National Fans \n",
          Answer: 1
           }
];
var spiderMan=[{
    Question: "Question 1: What is Peter's Middle Name? \n" + "1. Benjamin \n" + "2. Joe \n" + "3. David \n" + "4. Ben \n",
          Answer: 1
  },
  {
    Question:"Question 2: Who was the Villain of Spiderman:Homecoming ? \n" + "1. Green Goblin \n"
          + "2. Vulture \n" + "3. Falcon \n",
          Answer: 2
  },
  {
    Question:"Question 3: Who was the other Spiderman other than Peter? \n" + "1. Reed Richards \n"
          + "2. Bruce Banner \n" + "3. Miles Morales \n",
          Answer: 3
           },
           {
            Question: "Question 4: What is Spiderwoman's real name ? \n" + "1. Mary Jane Conor \n"
          + "2. Jessica Drew \n" + "3. Gwen Stacy \n" + "4. Oliva Benson \n",
          Answer: 2
           },
           {
             Question:"Question 5: Which of these is Not a common nickname for Spidey ? \n" + "1. Wall-Sticker \n"
          + "2. Web-Head \n" + "3. Wall-Crawler \n" + "4. Web-Slinger \n",
          Answer: 1
           }
];

var thor=[{
    Question: "Question 1: Where are the Dark-Elves From ? \n" + "1. Einjehar \n" + "2. Muspelheim \n"
          + "3. Svartalfheim \n" + "4. Vanaheim \n",
          Answer: 3
  },
  {
    Question:"Question 2: What is Thor's Axe called ? \n" + "1. Bloodaxe \n" + "2. DragonFang \n"
          + "3. StormBreaker \n" + "4.ThunderStorm \n",
          Answer: 3
  },
  {
    Question:"Question 3: Which Fellow Avenger Had A Cameo in Thor ? \n" + "1. Black Widow \n"
          + "2. Captain America \n" + "3. Hawkeye \n" + "4. Iron Man \n",
          Answer: 3
           },
           {
            Question: "Question 4: On Which Planet do Thor and Hulk Fight? \n" + "1. Knowhere \n" + "2. Jotunheim \n"
          + "3. Sakaar \n" + "4. Titan \n",
          Answer: 3
           },
           {
             Question:"Question 5: Who Directed Thor:The Dark World ? \n" + "1. Kenneth Branagh \n"
          + "2. Joe Russo \n" + "3. Alan Taylor \n" + "4. Taika Waititi \n",
          Answer: 3
           }
];

var captainMarvel=[{
    Question: "Question 1: Skrulls seek which of these from Project Pegasus ? \n" + "1. Cloaking Tech \n"
          + "2. LightSpeed Engine \n" + "3. Vibranium Deposits \n" + "4. SpaceShip \n",
          Answer: 2
  },
  {
    Question:"Question 2: Which of these is used to Power Mar-Vell's Lab ? \n" + "1. Power Stone \n"
          + "2. Tesseract \n" + "3. Time Stone \n" + "4. Space Stone \n",
          Answer: 2
  },
  {
    Question:"Question 3: Flerkens are a race of Extremely Dangerous Aliens that resemble ? \n"
          + "1. Cats \n" + "2. Goose \n" + "3. Ducks \n" + "4. Racoons \n",
          Answer: 1
           },
           {
            Question: "Question 4: How Many Times Faster can Captain Marvel fly than the speed of light ? \n"
          + "1. 10  \n" + "2. 8 \n" + "3. 4 \n" + "4. 6 \n",
          Answer: 4
           },
           {
             Question:"Question 5: Who is Mar-Vell's son ? \n" + "1. Genis-Vell \n" + "2. Fahr-Vell \n"
          + "3. Gens-Vell \n" + "4. Elysia \n",
          Answer: 1
           }
];

function welcome(){
 var userName=readlineSync.question(console.log(chalk.black.bgWhite.bold("Hi!May I have your name?" )));
 console.log(chalk.blue('Welcome to Marvel Fan Quiz ' +chalk.blueBright.bold.underline(userName  )));

 var userChoice=readlineSync.question(console.log(chalk.magenta('Are you ready to prove your Marvel Fandom?Enter you choice as '+ chalk.bgWhite.bold.underline(' Yes or No ' )))) ;

 if(userChoice.toLowerCase()==='yes')
 {
  console.log(chalk.blue("Good luck!"));
  console.log(chalk.bold.whiteBright.bgBlue("Please type-in answers as Number alongside options.\n"));
  characterChoice();
 }
 else{
   console.log(chalk.cyan("Alas!Regret's on us. We will expect you soon!"));
   process.exit();
 }
}

 //creating function play
 function play(question,answer)
 {
  var userAnswer=readlineSync.question(question);
  if(userAnswer.toLowerCase()==answer)
  {
   console.log(chalk.greenBright('Yay!Right Answer!You are not as Dark as DC'));
   score++;
  }
  else{
    console.log(chalk.redBright('Nada!Wrong Answer'));
    console.log(chalk.greenBright('Correct Answer is: ' +answer));
    score--;
  }
  if(score<1)
  {
    score=0;
  }
console.log("Your Score is: " +score);
 }





function characterChoice()
{
var characteruserChoice=readlineSync.question(chalk.whiteBright.bgMagenta('Enter your choice of characters as a number displayed alongside options.\n 1.Iron Man \n 2.Captain America \n 3.SpiderMan \n 4.Thor \n 5.Captain Marvel \n' ));
if(characteruserChoice==1)
{
for(var i=0;i<ironMan.length;i++)
{
  play(ironMan[i].Question  ,  ironMan[i].Answer);
 }
}
else if(characteruserChoice==2)
{
  for(var i=0;i<captainAmerica.length;i++)
  {
   play(captainAmerica[i].Question , captainAmerica[i].Answer);
  }
}
else if(characteruserChoice==3)
{
  for(var i=0;i<spiderMan.length;i++)
  {
    play(spiderMan[i].Question  , spiderMan[i].Answer);
  }
}
else if(characteruserChoice==4)
{
  for(var i=0;i<thor.length;i++)
  {
    play(thor[i].Question  , thor[i].Answer);
  }
}
else if(characteruserChoice==5)
{
  for(var i=0;i<captainMarvel.length;i++)
  {
    play(captainMarvel[i].Question  , captainMarvel[i].Answer);
  }
}
}

welcome();


var highScore=[
  {
    user: "Pratyush",
    score: 5
  },
  {
    user: "Prateesh",
    score: 4
  },
  {
    user: "Prateek",
    score: 4
  },
  {
    user: "Sandeep",
    score: 3
  }
];


console.log(chalk.bgYellow.bold("\t\t\t HIGH SCORES "));
console.table(  highScore);

var maximum=highScore[0];
for(let j=1;j<highScore.length;j++)
{
  if(highScore[j] > maximum)
  {
    maximum=highScore[j];
  }
}

console.log(chalk.bgWhite.black('If you see that you have beaten the highscore. Text me the screenshot and i will update the details.'));

