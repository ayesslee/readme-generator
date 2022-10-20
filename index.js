// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./assets/utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your username for Github?",
        name: "username"
    },
    {
        type: "input",
        message: "What is the name of your project?",
        name: "project"
    },
    {
        type: "input",
        message: "Write a short description of your project",
        name: "summary"
    },
    {
        type: "input",
        message: "What command is used to install the necessary items",
        name: "install"
    },
    {
        type: "input",
        message: "How do I use this application?",
        name: "usage"
    },
    {
        type: "input",
        message: "How are tests run with this application?",
        name: "test"
    },
    {
        type: "input",
        message: "How can someone contribute to this application?",
        name: "contribute"
    },
    {
        type: "list",
        message: "What type of license does your project use?",
        name: "license",
        choices: [
            "MIT",
            "APACHE",
            "Mozilla Public License 2.0",
            "ISC",
            "None"
        ]
    }
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
   let answers = generateMarkdown(data);
   fs.writeFile(fileName, answers, function (error) {
    if (error) {
        return console.log(error)
    }
    console.log('Successfully created README file')
   });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function (data) {
        var fileName = 'README.md';
        writeToFile(fileName, data)
    });
}


// Function call to initialize app
init();
