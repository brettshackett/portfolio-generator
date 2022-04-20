const fs = require('fs');

const profileDataArgs = process.argv.slice(2, process.argv.length);
const name = profileDataArgs[0];
const github = profileDataArgs[1];

// const printProfileData = profileDataArr => {

//     //This...
//     for(let i = 0; i < profileDataArr.length; i++){
//         console.log(profileDataArr[i])
//     }

//     console.log('=========');

//     //...is the same as this
//     profileDataArr.forEach(profileItem => console.log(profileItem))
//     //using an arrow function, we can avoid using the function keyword, parentheses around the function parameter, and the curly braces used to wrap a function; we can keep simpler tasks on one line of code and make it more concise.

    
// }
// printProfileData(profileDataArgs)

//interpolated the variables passed into the function as the text used in the string
//template literals allow us to do multi-line text easier than regular strings
// const generatePage = (userName, githubName) => `Name ${userName}, Github: ${githubName}`;

const generatePage = (name, github) => {
    return `
    <!DOCTYPE html> 
    <html lang="en"> 
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Portfolio Demo</title>
    </head>
  
    <body>
      <h1>${name}</h1>
      <h2><a href="https://github.com/${github}">Github</a></h2>
    </body>
    </html>
    `;
};



fs.writeFile('index.html', generatePage(name, github), err => {
    
    if (err) throw err;

    console.log('Portfolio complete! Check out index.html to see the output!')
});