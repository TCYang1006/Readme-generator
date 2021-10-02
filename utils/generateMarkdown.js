// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// Eclipse Public License 1.0
//[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// The MIT License
// [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// Open Database License (ODbL)
// [![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}

// `;
// }

// TODO: Create a function to generate the template for README
module.exports.getReadMe = (response) => {
  return `
  
  # ${response.Title}

  ## License
  ${response.License}
  
  ## Description: 
  ${response.Description}

  ###Contents
  1.  [Installation](#installation)
  2.  [Usage](#usage)
  
  ## Installation:  
  ${response.Installation}

  ## Usage:
  ${response.Usage}

  ## Contributing:
  ${response.Contribution}

  ## Tests:
  To run tests, run the following line at the command prompt:
  npm test

  `;
};