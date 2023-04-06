

// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
inquirer.prompt([
    {
        type: 'input',
        message: "What is your GitHub username?",
        name: 'username',
        default: 'potential-enigma',
        validate: (answerVal) => {
            if (answerVal.length < 1) {
                return console.log("Please enter your a valid Github username.");
            }
            return true;
        }
    },

    {
        type: 'input',
        message: "What is the name of your GitHub repo?",
        name: 'repo',
        default: 'repo-github-name',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please enter your a valid Github title for your repo.");
            }
            return true;
        }
    },

    {
        type: 'input',
        message: "Please enter a description, describing your project",
        name: 'description here',

        default: 'Here is what my github project is and how it works',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please enter your a valid Github description for your repe.");
            }
            return true
        },
    },

    //WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
    {
        type: 'input',
        message: "Describe the steps required to install your project for the Installation section.",
        name: 'installation steps'
    },
    {
        type: 'input',
        message: "Describe the usage of your Github project.",
        name: 'usage desriptor'
    },
    {
        type: 'input',
        message: "How can others contribute to your project? Please detail.",
        name: 'contributor help'
    },
    {
        type: 'input',
        message: "Provide any tests for your application as well as any examples on how to run them.",
        name: 'tests'
    },

    {
        type: 'list',
        message: "Please choose a license",
        name: 'license',
        choices: ['Apache 2.0', 'Boost', 'BSD 2-Clause', 'BSD 3-Clause', 'Creative Commons', 'Eclipse', 'GNU GPL v3', 'Hippocratic', 'IBM IPL', 'ISC', 'MIT', 'Mozilla MPL', 'Open Data Commons (BY)', 'Open Database License (ODbL)', 'Perl', 'SIL Open Font', 'Unlicense', 'WTFPL', 'Zlib', 'None'],
    }

]).then(answers => {
    fs.writeFile("READMEexample.md", generateMarkdown(answers), (err) => {
        if(err) throw err;
        console.log("README created!")
    })
})

