const fs = require('fs');

const generatePage = require('./src/page-template.js');

const profileDataArgs = process.argv.slice(2);

const [name, github] = profileDataArgs;

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




fs.writeFile('./index.html', generatePage(name, github), err => {
    
    if (err) throw new Error(err);

    console.log('Portfolio complete! Check out index.html to see the output!')
});