#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let user_Answers = await inquirer.prompt([
    {
        type: "input",
        name: "Sentence",
        message: (chalk.redBright.bold("Please Enter Your Sentence To Count The Words:"))
    },
]);
const words = user_Answers.Sentence.trim().split(" ");
// Print the array of words
console.log(words);
// Print the word count of the sentence
console.log(chalk.bgCyan.bold(`Your Sentence word count is ${words.length}`));
