const inquirer = require('inquirer');


const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username'
      },
      {
        type: 'input',
        name: 'about',
        message: 'Provide some information about yourself:'
      }
    ]);
  };

const promptProject = portfolioData => {
    portfolioData.projects = [];
    if(!portfolioData.projects){
        portfolioData.projects = []
    }
    console.log(`
  =================
  Add a New Project
  =================
  `);
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of your project?'
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)'
      },
      {
        type: 'checkbox',
        name: 'languages',
        message: 'What did you build this project with? (Check all that apply)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
      },
      {
        type: 'input',
        name: 'link',
        message: 'Enter the GitHub link to your project. (Required)'
      },
      {
        type: 'confirm',
        name: 'feature',
        message: 'Would you like to feature this project?',
        default: false
      },
      {
        type: 'confirm',
        name: 'confirmAddProject',
        message: 'Would you like to enter another project?',
        default: false
      }
    ]);
  };
promptUser()
  .then(promptProject)
  .then(portfolioData => {
    console.log(portfolioData);
  });

// const fs = require('fs');

// const generatePage = require('./src/page-template.js');

// const pageHTML = generatePage(name, gituhub);

// // const printProfileData = profileDataArr => {

// //     //This...
// //     for(let i = 0; i < profileDataArr.length; i++){
// //         console.log(profileDataArr[i])
// //     }

// //     console.log('=========');

// //     //...is the same as this
// //     profileDataArr.forEach(profileItem => console.log(profileItem))
// //     //using an arrow function, we can avoid using the function keyword, parentheses around the function parameter, and the curly braces used to wrap a function; we can keep simpler tasks on one line of code and make it more concise.

    
// // }
// // printProfileData(profileDataArgs)

// //interpolated the variables passed into the function as the text used in the string
// //template literals allow us to do multi-line text easier than regular strings
// // const generatePage = (userName, githubName) => `Name ${userName}, Github: ${githubName}`;




// fs.writeFile('./index.html', pageHTML, err => {
    
//     if (err) throw err;

//     console.log('Portfolio complete! Check out index.html to see the output!')
// });