const profileDataArgs = process.argv.slice(2, process.argv.length);
// console.log(profileDataArgs);

const printProfileData = profileDataArr => {

    //This...
    for(let i = 0; i < profileDataArr.length; i++){
        console.log(profileDataArr[i])
    }

    console.log('=========');

    //...is the same as this
    profileDataArr.forEach(profileItem => console.log(profileItem))
    //using an arrow function, we can avoid using the function keyword, parentheses around the function parameter, and the curly braces used to wrap a function; we can keep simpler tasks on one line of code and make it more concise.

    
}
printProfileData(profileDataArgs)