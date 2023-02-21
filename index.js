

// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const api = require('./utils/api.js');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
    type: 'input',
    message: "What is your GitHub username?",
    name: 'username',
    default: 'potential-enigma',
    validate:
    (answerVal) => {
            if (answerVal.length < 1) {
                return console.log("Please enter your a valid Github username.");
            }
            return true;
        },
}
    {
    type: 'input',
    message: "What is the name of your GitHub repo?",
    name: 'repo',
    default: 'this-is-my-GH-repo',
    validate: 

    }
    {
    type: 'input',
    message: "What is the title of your project",
    name: 'title',
    default: 'Project Title',
    validate: 
    }

    {
    type: 'input',
    message: "",
    name: 'description',
    default: '',
    validate: 
    }
//WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
//THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
    {
        type: 'input',
        message: "",
        name: 'installation instructions',
        default: '',
        validate: 
    }

    {
        type: 'input',
        message: "",
        name: 'usage info',
        default: '',
        validate: 
    }

    {
        type: 'input',
        message: "",
        name: '',
        default: '',
        validate: 
    }
    {
        type: 'input',
        message: "",
        name: 'contribution guidelines',
        default: '',
        validate: 
    }
    {
        type: 'input',
        message: "",
        name: '',
        default: 'test instructions',
        validate: 
    }


    // WHEN I choose a license for my application from a list of options
    // THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
    {
        type: 'list',
        message: "",
        name: 'license',
        choices: ['Apache 2.0', 'Boost', 'BSD 2-Clause', 'BSD 3-Clause', 'Creative Commons', 'Eclipse', 'GNU GPL v3', 'Hippocratic', 'IBM IPL', 'ISC', 'MIT', 'Mozilla MPL', 'Open Data Commons (BY)', 'Open Database License (ODbL)', 'Perl', 'SIL Open Font', 'Unlicense', 'WTFPL', 'Zlib', '', '', '', '', ''],
    }
    {
        type: 'input',
        message: "",
        name: '',
        default: '',
        validate: 
    }
]





;

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
async function init() {
    try {

    }
}

// Function call to initialize app
init();

