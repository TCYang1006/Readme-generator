// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const { left } = require('inquirer/lib/utils/readline');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'Title'
    },
    {
        type: 'input',
        message: 'Describe your project?',
        name: 'Description'
    },
    {
        type: 'input',
        message: 'What do you need to install to run your project?',
        name: 'Installation'
    },
    {
        type: 'input',
        message: 'What does your project uses?',
        name: 'Usage'
    },
    {
        type: 'input',
        message: 'What are the contribution guidelines?',
        name: 'Contribution'
    },
    {
        type: 'list',
        message: 'Please select a license type?',
        name: 'License',
        choices:['Eclipse Public License 1.0', 'The MIT License', 'Open Database License (ODbL)']
    },
    {
        type: 'input',
        meassage: 'What is your gitHub username?',
        name: 'ghName'
    },
    {
        type: 'input',
        message: 'Please enter your email address',
        name: 'Email'
    }
];



//Create a function to initialize app
const init = () => (
    inquirer.prompt(questions).then(response => writeReadMe(response))
)

//Create a function to write README file
const writeReadMe = (response) => (
    fs.writeFile('README.md', generateMarkdown.getReadMe(response), err => {
        if (err) throw err;
        else
            console.log('Readme complete! Check out README.md to see the output!');
    })
);


// Function call to initialize app
init();

