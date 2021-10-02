

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

    ## Contributing:
    ${response.Contribution}

    ## Tests:
    To run tests, run the following line at the command prompt:
    npm test

    `;
};