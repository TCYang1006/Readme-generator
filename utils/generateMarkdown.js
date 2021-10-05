

// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// Eclipse Public License 1.0

const renderLicenseBadge = (license) => {
  let tempLicense = license;
  let licenseBadge;

  if (tempLicense === "Eclipse Public License 1.0") {
    licenseBadge = "https://img.shields.io/badge/License-EPL%201.0-red.svg";
  } else if (tempLicense === "The MIT License") {
     licenseBadge = "https://img.shields.io/badge/License-MIT-yellow.svg";
  } else {
    licenseBadge = "https://img.shields.io/badge/License-ODbL-brightgreen.svg";
  }
  return licenseBadge;
}


// Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license) { }
const renderLicenseLink = (license) => {
  let tempLicense = license;
  let licenseBadge = renderLicenseBadge(license);
  let licenseLink;

  if (tempLicense === "Eclipse Public License 1.0") {
    licenseLink = `[![License: ODbL](${licenseBadge})](https://opensource.org/licenses/EPL-1.0)`;
  } else if (tempLicense === "The MIT License") {
     licenseLink = `[![License: ODbL](${licenseBadge})](https://opensource.org/licenses/MIT)`;
  } else {
    licenseLink = `[![License: ODbL](${licenseBadge})](https://opendatacommons.org/licenses/odbl/)`;
  }
  return licenseLink;
}

// Create a function that returns the license section of README
// If there is no license, return an empty string

//function renderLicenseSection(license) { }




// Create a function to generate the template for README
module.exports.getReadMe = (response) => {

  return `
  
# ${response.Title}

## License
${response.License}
${renderLicenseLink(response.License)}

## Description: 
${response.Description}

### Contents
1.  [Installation](#installation)
2.  [Usage](#usage)
3.  [Contributing](#contributing)
4.  [Tests](#tests)

## Installation:  
${response.Installation}

## Usage:
${response.Usage}

## Contributing:
${response.Contribution}

## Tests:
To run this project, type "node index.js" or "node index" at the command prompt (quotation marks are not required)

## Questions:
Github profile:[${response.ghName}](https://github.com/${response.ghName})
If there are any additional questions about this project, please contact me at [${response.Email}](${response.Email})`;
};