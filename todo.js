//js file for dummy todo list
// We'll pre-populate this array with a couple objects just so it's not undefined if your 
//internet connection isn't working properly.

let arrayOfTodos = [
    {
        "userId": 14,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    },
    {
        "userId": 20,
        "id": 2,
        "title": "delectus aut autem",
        "completed": false
    }]

const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response) => response.json())
        .then((json) => arrayOfTodos = json)
} //end of fetchTodos function

const logTodos = () => {
    console.log(arrayOfTodos)
} //end of logTodos function

const populateTodos = () => {
    //store the ol item into a variable
    let todoList = document.getElementById("todo-list");

    //createTextNode inside the li using the title property
    let todoTitle = "";

    for (i = 0; i < arrayOfTodos.length; i++) {
        todoTitle = document.createTextNode(arrayOfTodos[i].title);

        //createElement to make a new li
        let todoItem = document.createElement("LI");
        if (arrayOfTodos[i].completed) {
            //add a class to the li to make the text red
            todoItem.classList.add("istrue");
        } else {
            todoItem.classList.add("isfalse");
        }

        //Append the text to the new element
        todoItem.appendChild(todoTitle);

        //Append the element to the ol element
        todoList.appendChild(todoItem);
    }

    //console.log test
    console.log(arrayOfTodos[0].title)

}//end of populateTodos function