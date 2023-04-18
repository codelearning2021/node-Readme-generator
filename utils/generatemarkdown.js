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
    return `![License](https://img.shields.io/badge/BSD-3-Clause.svg)(https://opensource.org/licenses/BSD-3-Clause)`
  }
  else if (license === 'Creative Commons') {
    return `![License](https://img.shields.io/badge/creative-commons.svg)(https://opensource.org/licenses/creative-commons)`
  }
  else if (license === 'Eclipse') {
    return `![License](https://img.shields.io/badge/eclipse.svg)(https://opensource.org/licenses/eclipse)`
  }

  else if (license === 'Hippocratic') {
    return `![License](https://img.shields.io/badge/hippocratic.svg)(https://opensource.org/licenses/hipporatic)`
  }
  else if (license === 'IBM IPL') {
    return `![License](https://img.shields.io/badge/ibm-ipl.svg)(https://opensource.org/licenses/ibm-ipl)`
  }
  else if (license === 'ISC') {
    return `![License](https://im.shields.io/badge/ISC.svg)(https://opensource.org/licenses/ISC)`

  }
  else if (license === 'MIT') {
    return `![License](https://img.shields.io/badge/License-MIT-yellow.svg)(https://opensource.org/licenses/MIT)`
  }
  else if (license === 'Mozilla MPL') {
    return `![License](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)(https://opensource.org/licenses/MPL-2.0)`
  }
  else if (license === 'Open Data Commons (BY)') {
    return `![License](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)(https://opendatacommons.org/licenses/by/)`
  }
  else if (license === 'Open Database License (ODbL)') {
    return `![License](https://img.shields.io/badge/License-ODbL-brightgreen.svg.svg)(https://opensource.org/licenses/ODbL)`
  }
  else if (license === 'Perl') {
    return `![License](https://img.shields.io/badge/License-Perl-0298c3.svg)(https://opensource.org/licenses/Artistic-2.0)`
  }
  else if (license === 'SIL Open Font') {
    return `![License](https://img.shields.io/badge/sil-open-font.svg)(https://opensource.org/licenses/sil-open-font)`
  }
  else if (license === 'Unlicense') {
    return `![License](https://img.shields.io/badge/unlicense.svg)(https://opensource.org/licenses/unlicense)`
  }
  else if (license === 'WTFPL') {
    return `![License](https://img.shields.io/badge/WTFPL.svg)(https://opensource.org/licenses/WTFPL)`
  }
  else if (license === 'Zlib') {
    return `![License](https://img.shields.io/badge/zlib.svg)(https://opensource.org/licenses/zlib)`
  }
  else if (license === 'None') {
    return ''
  }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

# Table of Contents
    ----------------------
* [Repo User](#repo - username)
      * [Description](#description)
      * [Usage](#usage)
      * [Contributors](#contributors)
      * [Tests](#tests)
      * [License](#license)


## Repo Username
  ${ data.username }

  ## Description

      * The what, why, and how:*

        ${ data.description }
  
  ## Repo Name: ${ data.repo }
  
  ## Instructions
  * Steps required to install project and how to get the development environment running:

  ${ data.instructions }

  ## Usage
  ${ data.installation_steps }

  ## Contributors
  ${data.contributor_help}

  ## Tests
  ${data.tests}

  ## License
  ${ renderLicenseSection(data.license) }

    `
}

module.exports = generateMarkdown;
