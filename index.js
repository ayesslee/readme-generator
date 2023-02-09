// dependencies
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./assets/utils/generateMarkdown');

// user input questions
const questions = [
    {
        type: "input",
        message: "What is the title for your project?",
        name: "title"
    },
    {
        type: "input",
        message: "Provide a description for this project",
        name: "description"
    },
    {
        type: "input",
        message: "What are the installation instructions for this project?",
        name: "installation"
    },
    {
        type: "input",
        message: "What is the usage for this project?",
        name: "usage"
    },
    {
        type: "list",
        message: "Choose the appropriate license:",
        name: "license",
        choices: ['MIT', 'Apache-2.0', 'GPL-3.0', 'BDS-2-Clause', 'BDS-3-Clause', 'BDS-4-Clause', 'none']
    },
    {
        type: "input",
        message: "What was used for this project?",
        name: "contribution"
    },
    {
        type: "input",
        message: "Any test instructions?",
        name: "test"
    },
    {
        type: 'input',
        message: 'What is your github username?',
        name: 'github'
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email'
    }
    
];


// function to write a readme file
function writeToFile(fileName, data) {
    fs.appendFile(fileName, data, (err) => err ? console.error(err) : console.log('Generating README file...'));
};

// initialize app function
function init() {
    inquirer
        .prompt(
            questions
        )
        .then((response) => {
            const READinfo = (generateMarkdown(response));
            writeToFile('README2.md', READinfo);
        });
};

// Function call to initialize app
init();
