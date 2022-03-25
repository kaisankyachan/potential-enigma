// TODO: Include packages needed for this application
var inquirer = require('inquirer');
var fs = require("fs");
var readMe = "README.md"
var generate = require("./utils/generateMarkdown.js")

// TODO: Create an array of questions for user input
const questions = [
    "Title of project: ",
    "Description of project: ",
    "Installation instructions: ",
    "Usage information: ",
    "Contribution guidelines: ",
    "Test instructions: ",
    "If you have questions: ",
    "Your GitHub username: ",
    "Your email address: "
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
            },
            {
                type: "input",
                name: "install",
                message: questions[2]
            },
            {
                type: "input",
                name: "use",
                message: questions[3]
            },
            {
                type: "input",
                name: "cont",
                message: questions[4]
            },
            {
                type: "input",
                name: "test",
                message: questions[5]
            },
            {
                type: "input",
                name: "ques",
                message: questions[6]
            },
            {
                type: "input",
                name: "user",
                message: questions[7]
            },
            {
                type: "input",
                name: "email",
                message: questions[8]
            }
        ])
        .then((answers) => {
            var format = generate(answers);
            writeToFile(readMe, format)
        })
        .catch((error) => {
            console.log(error)
        });
    
}

// Function call to initialize app
init();
