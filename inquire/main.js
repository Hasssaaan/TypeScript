import inquirer from "inquirer";
let answers = await inquirer.prompt([{
        name: "age",
        type: "number",
        message: "Enter your age",
    }]);
if (answers.age > 18) {
    console.log("Driving allow");
}
else {
    console.log("Driving not allowed");
}
