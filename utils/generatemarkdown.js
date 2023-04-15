// All license options

function renderLicenseSection(license) {
  if (license === 'Apache 2.0') {
    return `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)(https://opensource.org/licenses/Apache-2.0)`
  } else if (license === 'Boost') {
    return `![License](https://img.shields.io/badge/License-Boost-blue.svg)(https://opensource.org/licenses/Boost)`
  } else if (license === 'BSD 2-Clause') {
    return `![License](https://img.shields.io/badge/License-BSD-2-Clause-blue.svg)(https://opensource.org/licenses/BSD-2-Clause)`
  }
  else if (license === 'BSD 3-Clause') {

  }
  else if (license === 'Creative Commons') {

  }
  else if (license === 'Eclipse') {

  }

  else if (license === 'Hippocratic') {

  }
  else if (license === 'IBM IPL') {

  }
  else if (license === 'ISC') {

  }
  else if (license === 'MIT') {

  }
  else if (license === 'Mozilla MPL') {

  }
  else if (license === 'Open Data Commons (BY)') {

  }
  else if (license === 'Open Database License (ODbL)') {

  }
  else if (license === 'Perl') {

  }
  else if (license === 'SIL Open Font') {

  }
  else if (license === 'Unlicense') {

  }
  else if (license === 'WTFPL') {

  }
  else if (license === 'Zlib') {

  }
  else if (license === 'None') {
    return ''
  }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `

  ## Repo Username
  ${data.username}

  ## Description 
  
  *The what, why, and how:* 
  
  ${userResponses.description}
  
  # ${data.repo}
  
## Instructions
${data.instructions}
  
* Steps required to install project and how to get the development environment running:

# Table of Contents
----------------------
* 

# License
${renderLicenseSection(data.license)}

`
}

module.exports = generateMarkdown;


// type: 'input',
//         message: "Describe the steps required to install your project for the Installation section.",
//         name: 'installation_steps'
//     },
//     {
//         type: 'input',
//         message: "Describe the usage of your Github project.",
//         name: 'usage_desriptor'
//     },
//     {
//         type: 'input',
//         message: "How can others contribute to your project? Please detail.",
//         name: 'contributor_help'
//     },
//     {
//         type: 'input',
//         message: "Provide any tests for your application as well as any examples on how to run them.",
//         name: 'tests'