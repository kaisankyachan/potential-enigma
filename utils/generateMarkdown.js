// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}
  # Description
  ${answers.desc}
  
  # Table of Contents
  - [Description](#desc)
  - [Installation](#install)
  - [Usage](#use)
  - [Contributing](#cont)
  - [Tests](#test)
  - [Questions](#ques)

  # Installation
  ${answers.install}

  # Usage
  ${answers.use}

  # Contributing
  ${answers.cont}

  # Tests
  ${answers.test}

  # Questions
  ${answers.ques}
  
  My GitHub: (https://github.com/${answers.user})
  My Email: ${answers.email}
`;
}

module.exports = generateMarkdown;
