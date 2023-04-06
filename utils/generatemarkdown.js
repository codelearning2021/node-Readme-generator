function renderLicenseSection(license) {
  if (license === 'Apache 2.0' ) {
    return `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)(https://opensource.org/licenses/Apache-2.0)`
  } else if(license === 'Boost') {
    return `![License](https://img.shields.io/badge/License-Boost-blue.svg)(https://opensource.org/licenses/Boost)`
  } else if(license === '') {

  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
if (name !=== '') {
  
}
  


  ## Instructions
  
  *Steps required to install project and how to get the development environment running:*
  
  ${userResponses.instructions}`


  };

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

// Optional Usage section
  if (userResponses.usage !== '') {
  
  draftMarkdown +=
  
  `