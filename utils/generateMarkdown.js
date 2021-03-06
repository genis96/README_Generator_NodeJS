// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// // TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}

// `;
// }

function generateMarkdown(data, info) {
  return `
# **${data.title}**
${data.badge}


## Description 
${data.description}


## Table of contents
- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Licence](#Licence)
- [Contributors](#Contributors)
- [Test](#Test)
- [Repository Link](#Repository)
- [GitHub Info](#GitHub) 


## Installation
${data.installation}


## Usage
${data.usage}


## Licence
${data.licence}


## Contributors
${data.contributing}


## Test
${data.test}


## Repository
- [Project Repo](${data.repo})


## GitHub
- ${data.username}
- <${data.email}>
`;  
}

module.exports = generateMarkdown;
