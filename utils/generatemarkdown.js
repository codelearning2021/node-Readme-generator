// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// let draftMarkdown = 
// `# ${userResponses.title}
// ![Badge for GitHub repo top language](https://img.shields.io/github/languages/top/${userResponses.username}/${userResponses.repo}?style=flat&logo=appveyor) ![Badge for GitHub last commit](https://img.shields.io/github/last-commit/${userResponses.username}/${userResponses.repo}?style=flat&logo=appveyor)

// Check out the badges hosted by [shields.io](https://shields.io/).



// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {
//   if (license !== '') {  draftMarkdown += `
    
//   }

// }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'Apache 2.0' ) {
    return `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)(https://opensource.org/licenses/Apache-2.0)`
  } else if(license === 'Boost') {
    return `![License](https://img.shields.io/badge/License-Boost-blue.svg)(https://opensource.org/licenses/Boost)`
  } 
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  // Create a table of contents from user input
// let tableContents = `## Table of Contents`;

// if (data.installation !== '') { tableContents += `
//   * [Installation](#installation)` };

//   if (data.usage !== '') { tableContents += `
//   * [Usage](#usage)` };

//   if (data.contributing !== '') { tableContents += `
//   * [Contributing](#contributing)` };

//   if (data.tests !== '') { tableContents += `
//   * [Tests](#tests)` };



//   if (data.installation !== '') {
  
//     draftMarkdown +=
//     `
    
//     ## Installation
    
//     *Steps required to install project and how to get the development environment running:*
    
//     ${data.installation}`
//     };


  return `# ${data.repo}
# Table of Contents
----------------------
* 

# License
${renderLicenseSection(data.license)}


  
`;
}

module.exports = generateMarkdown;

// title, anything in acceptance criteria