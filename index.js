const inquirer = require('inquirer');
const fs = require('fs');
const axios = require('axios');
const generateMarkdown = require('./utils/generateMarkdown');


const questions = [
    {
        type: 'input',
        message: 'What is the title of this project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username'
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email'
    },
    {
        type: 'input',
        message: 'Write a description for your project?',
        name: 'description'
    },
    {
        type: 'input',
        message: 'What are the installation instructions?',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'What is the project badge?',
        name: 'badge'
    },
    {
        type: 'input',
        message: 'What is the project usage?',
        name: 'usage' 
    },
    {
        type: 'input',
        message: 'What are you contributing to the project?',
        name: 'contributing'
    },
    {
        type: 'input',
        message: 'Provide test instruction for the project!',
        name: 'test' 
    },
    {
        type: 'input',
        message: 'What is the project license?',
        name: 'licence' 
    },
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//     fs.writeFile (
//         '/README.md',
//         console.log('check check')
//     )
// }

inquirer
    .prompt(questions)
    .then((data) => {
        const githubUrl = `https://api.github.com/users/${data.github}`;
        axios.get(githubUrl).then((x) => {
            //info connected to the generateMarkdown file
            const info = {
                name: x.data.username,
                email: x.data.email
            };
            // console.log(questions)
            fs.writeFile('README.md', generateMarkdown(data, info), (err) => {
                if(err) {
                    throw err;
                    // console.log(err);
                };
                console.log('File Created: SUCCESS!');
            })
        })
    })

// TODO: Create a function to initialize app
function init() {
    // inquirer.prompt(questions).then(resp => {
    //     writeToFile(resp)
    // })
}

init();
