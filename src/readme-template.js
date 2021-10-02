

module.exports.getReadMe = (response) => {
    return `
    
    # ${response.Title}
    
    ## Description: 
    ${response.Description}

    ###Contents
    1.  [Installation](#installation)
    2.  [Usage](#usage)
    
    ## Installation:  
    ${response.Installation}

    ## Usage:
    ${response.Usage}

    ## Contribution:
    ${response.Contribution}

    ## Tests:
    To run tests, run the following line at the command prompt:
    npm test

    ## License:
    This project is licensed under the ${response.license} license.

    `;
};