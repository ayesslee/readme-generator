// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'Apache-2.0':
      badge = "[![License: Apache-2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]"
      break;
    case 'BDS-4-Clause':
      badge = "[![License: BSD-4-Clause](https://img.shields.io/badge/License-BSD_4--Clause-blue.svg)]"
      break;
    case 'BDS-3-Clause':
      badge = "[![License: BSD-3-Clause](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]"
      break;
    case 'BDS-2-Clause':
      badge = "[![License: BSD-2-Clause](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)]"
      break;
    case 'MIT':
      badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]"
      break;
    case 'GPL-3.0':
      badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]"
      break;
    case 'none':
      badge = "";
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'Apache-2.0':
      Link = '(https://opensource.org/licenses/Apache-2.0)'
      break;
    case 'BDS-4-Clause':
      Link = '(https://opensource.org/licenses/BSD-4-Clause)'
      break;
    case 'BDS-3-Clause':
      Link = '(https://opensource.org/licenses/BSD-3-Clause)'
      break;
    case 'BDS-2-Clause':
      Link = '(https://opensource.org/licenses/BSD-2-Clause)'
      break;
    case 'MIT':
      Link = '(https://opensource.org/licenses/MIT)'
      break;
    case 'GPL-3.0':
      Link = '(https://www.gnu.org/licenses/gpl-3.0)'
      break;
    case 'none':
      Link = '';
  }
  return Link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  var section = renderLicenseBadge(license) + renderLicenseLink(license);
  return section;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseSection(data.license)}
## Description
${data.description}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contribution](#contribution)
* [Tests](#tests)
* [Questions](#questions)
        
## Installation
${data.installation}
## Usage
${data.usage}
## License
${data.license}
## Contribution
${data.contribution}
## Tests
${data.test}
## Questions
If you have any questions, please reach me at:
[Github](https://github.com/${data.github})
Email: ${data.email}
`;
};

module.exports = generateMarkdown;