const inquirer = require('inquirer');
const fs = require('fs');
// const axios = require('axios');
const generate = require('./utils/generateMarkdown');

// TODO: Include packages needed for this application 

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your email?',
        name: 'age'
    },
    {
        type: 'input',
        message: 'What is the title of this project?',
        name: 'color'
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // fs.writeFile (
    //     '/README.md',
    //     console.log('check check')
    // )
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(resp => {
        writeToFile(resp)
    })
}

// Function call to initialize app
init();
