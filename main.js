#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "todo",
            message: "What do you want to add in yours todos? ",
            type: "input"
        },
        {
            name: "addMore",
            message: "Do you want to add more? ",
            type: "comfirm",
        }
    ]);
    todos.push(addTask.todo);
    condition = addTask.addMore;
    console.log(todos);
}
