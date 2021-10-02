// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const readMeTemplate = require('./src/readme-template.js');

// TODO: Create an array of questions for user input
const questions = [
    {type: 'input',
    message: 'What is the title of your project?',
    name: 'Title'},
    {type: 'input',
    message: 'Describe your project?',
    name: 'Description'},
    {type: 'input',
    message: 'What do you need to install to run your project?',
    name: 'Installation'},
    {type: 'input',
    message: 'What does your project uses?',
    name: 'Usage'},
    {type: 'input',
    message: 'What are the contribution guidelines?',
    name: 'Contribution'}
];



// TODO: Create a function to initialize app
const init = () => (
    inquirer.prompt(questions).then(response => writeReadMe(response))
    
    
    
    // inquirer.prompt(questions).then(response => console.log(response))
    // .then(
    //     fs.writeFile('READM.md', readMeTemplate(response),(err)=>{
    //         if(err) throw err;
    //     })
    // )
)

// TODO: Create a function to write README file
const writeReadMe = (response) =>(
fs.writeFile('README.md', readMeTemplate.getReadMe(response), err =>{
    if (err) throw err;
    else
    console.log('Readme complete! Check out README.md to see the output!');
})
);


// Function call to initialize app
init();

