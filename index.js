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
for (let user in users) {
    console.log(`User ID: ${users[user]['id']}, ` + `User Name: ${users[user].name}, ` + `User City: ${users[user].address.city}`)
}

//Prompt the user fro a user id
//const yourUserId = Number(prompt(`What's your user ID?`))

//Dispaly an alert with th username and all the listed todos

