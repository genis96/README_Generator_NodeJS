const fs = require('fs');
const inquirer = require('inquirer');
const axios = require('axios');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Include packages needed for this application 

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your age?',
        name: 'age'
    },
    {
        type: 'input',
        message: 'What is your favorite color?',
        name: 'color'
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(resp => {
        writeToFile(resp)
    })
}

// Function call to initialize app
init();
