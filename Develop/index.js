// TODO: Include packages needed for this application
var inquirer = require('inquirer');
var fs = require("fs");
var readMe = "README.md"

// TODO: Create an array of questions for user input
const questions = [
    "Title of project: ",
    "Description of project: "
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("Readme generated!");
    }); 
}

// TODO: Create a function to initialize app
function init() {  
    inquirer
        .prompt([
            {
                type: "input",
                name: "title",
                message: questions[0]
            },
            {
                type: "input",
                name: "desc",
                message: questions[1]
            }
        ])
        .then((answers) => {
            var format = `# ${answers.title}\n` + `${answers.desc}\n`
            writeToFile(readMe, format)
        })
        .catch((error) => {
            console.log(error)
        });
    
}

// Function call to initialize app
init();
