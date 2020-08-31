#!/usr/bin/env node

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');

const inquirer = require('inquirer');

const { Command } = require('commander'); // (normal include)
//const { Command } = require('../'); // include commander in git clone of commander repo
const program = new Command();

const pkg = require('../package.json');

let projectName;
let helpCalled = false;

program
  .version(pkg.version)
  .action(name => {
    projectName = name;
  })

program.on('--help', function() {
  help();
  helpCalled = true;
});


function help() {
  console.log('');
  console.log(`    No arguments are required.`);
  console.log('');
  console.log(`    If you have any issues or requests, please file an issue at ${chalk.cyan('https://github.com/dabit3/create-new-cli/issues')}`);
  console.log('');
}
program.parse(process.argv);

clear();

console.log(
  chalk.cyan.bold(
    figlet.textSync('John CLI', { horizontalLayout: 'default',font: 'Elite',
    

    whitespaceBreak: true })
  )
);




// console.log(" https://github.com/Joaosilgo");


console.log('Hi, welcome to john Cli ');

var questions = [
  {
    type: 'confirm',
    name: 'toBeDelivered',
    message: 'Is this for delivery?',
    default: false,
  },
  {
    type: 'input',
    name: 'phone',
    message: "What's your phone number?",
    validate: function (value) {
      var pass = value.match(
        /(\d{9})/g
      );
      if (pass) {
        return true;
      }

      return 'Please enter a valid phone number';
    },
  },
  {
    type: 'list',
    name: 'size',
    message: 'What size do you need?',
    choices: ['Large', 'Medium', 'Small'],
    filter: function (val) {
      return val.toLowerCase();
    },
  },
  {
    type: 'input',
    name: 'quantity',
    message: 'How many do you need?',
    validate: function (value) {
      var valid = !isNaN(parseFloat(value));
      return valid || 'Please enter a number';
    },
    filter: Number,
  },
  {
    type: 'expand',
    name: 'toppings',
    message: 'What about the toppings?',
    choices: [
      {
        key: 'p',
        name: 'Pepperoni and cheese',
        value: 'PepperoniCheese',
      },
      {
        key: 'a',
        name: 'All dressed',
        value: 'alldressed',
      },
      {
        key: 'w',
        name: 'Hawaiian',
        value: 'hawaiian',
      },
    ],
  },
  {
    type: 'rawlist',
    name: 'beverage',
    message: 'You also get a free 2L beverage',
    choices: ['Pepsi', '7up', 'Coke'],
  },
  {
    type: 'input',
    name: 'comments',
    message: 'Any comments on your purchase experience?',
    default: 'Nope, all good!',
  },
  {
    type: 'list',
    name: 'prize',
    message: 'For leaving a comment, you get a freebie',
    choices: ['cake', 'fries'],
    when: function (answers) {
      return answers.comments !== 'Nope, all good!';
    },
  },
];

inquirer.prompt(questions).then((answers) => {
  console.log('\nOrder receipt:');
  console.log(JSON.stringify(answers, null, '  '));
});

/*
const { exec } = require("child_process");

exec("npm install express", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});

*/


/*var clui = require('clui');
 
var Progress = clui.Progress;
 
var thisProgressBar = new Progress(20);

console.log(thisProgressBar.update(10, 30));
 
// or
 
var thisPercentBar = new Progress(20);

console.log(thisPercentBar.update(0.4));











var CLI = require('clui'),
    Spinner = CLI.Spinner;
 
var countdown = new Spinner('Exiting in 10 seconds...  ', ['⣾','⣽','⣻','⢿','⡿','⣟','⣯','⣷']);
 
countdown.start();
 
var number = 10;
setInterval(function () {
  number--;
  countdown.message('Exiting in ' + number + ' seconds...  ');
  if (number === 0) {
    process.stdout.write('\n');
    process.exit(0);
  }
}, 1000);

*/



