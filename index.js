/*
Repo boolean-uk-js-todo-lists

Description
This is the first try at a common program built by new developers, the todo list. You'll have to use everything we've covered so far in JS to tackle this challenge

Instructions
- Use this starting template, you'll find two objects with data for you to use = httpscodesandbox.iostodo-lists-tr122from-embed=&file=index.js
- Do not code your solution in CodeSandbox
- Create an alert that lists all users, with their ids, names and what city they're from
- Prompt the user for a user id
- Display an alert with the username and all the todos titles that belong to that user 

Tips
- The user id creates an identifiable relationship with the todos
- Sometimes it's good to map some values into a new data structure

Challenge
After you select a user, add the option to either show the todos or add a new todo to the list

***We want to take the user input 1 or 2. So,

if 1: show them the list of the to do
if 2: take another input and push it to the to do array, sho thm an alert to confirm the to do has been pushed 


Challenge 2
Now that you can add a todo, add the option to either delete or update a todo. Add also the option to repeatedly choose a different user, or to finish the program

*/
/* 
The users and todos variables have all the data for you to work with
Check your console to see the result of the following console.logs, 
and inspect the data
*/

console.log("users: ", users);

console.log("todos: ", todos);

//- Create an alert that lists all users, with their ids, names and what city they're from 
let message = ""
for (user in users) {
    message += `Id: ${users[user].id}`
    message += `\n`
    message += `Name: ${users[user].name}`
    message += `\n`
    message += `City: ${users[user].address.city}`
    message += `\n\n`
}

alert(message)

//Prompt the user for a user id
//const yourUserId = Number(prompt(`What's your user ID?`))
const inputId = Number(prompt(`What is the ID you wish to know more about `))
//Dispaly an alert with th username and all the listed todos
let currentUser
let userTodos
const userTodo = {
    username: currentUser,
    userTodos: []
}

for (let user in users) {
    if (inputId === users[user].id) {
        currentUser = users[user].username
    }
}

for (let index in todos) {
    if (inputId === todos[index].userId) {
        userTodo.userTodos.push(todos[index].title)
    }
}




// ***We want to take the user input 1 or 2. So,

// if 1: show them the list of the to do
// if 2: take another input and push it to the to do array, sho thm an alert to confirm the to do has been pushed 
let newTodo
const userChoice = prompt(`Would you like to:
1. View your ToDo's?
2. Add to your ToDos?
3. Update a ToDo?
4. Delete a ToDo?
*Type 1,2,3, or 4`)

if (userChoice == 1) {

    alert(`Your Username is: ${currentUser}, and your ToDo's are: 
- ${userTodo.userTodos.join("\n- ")}`)

}
else if (userChoice == 2) {

    newTodo = prompt(`What would you like to add`)
    todos.push({'userId': inputId, id: todos.length, title: newTodo})
    alert(`You added ${todos[todos.length - 1].title} to your todos!`)

}
// else if (userChoice == 3) {
//     prompt(`Which ToDo would you like to update: 
//     - ${userTodo.userTodos.}`)
// }

// Now that you can add a todo, add the option to either delete or update a todo. Add also the option to repeatedly choose a different user, or to finish the program