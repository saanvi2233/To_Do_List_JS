const todoList = [];
const tododate=[];
renderToDoList();
// renderToDoList();
function renderToDoList(){


    // function renderToDoList() {
        let todoListHTML = '';
    
        for (let i = 0; i < todoList.length; i++) {
            const todo = todoList[i];
            const date = tododate[i]; // Corrected variable name
    
            // Added `onclick="deleteTodo(${i})"` to remove the item
            const html = `
                <p>
                    ${todo} - ${date} 
                    <button onclick="deleteTodo(${i})">Delete</button>
                </p>
            `;
    
            todoListHTML += html;
        }
    
        document.querySelector('.js-todo-list').innerHTML = todoListHTML;
    // }
    
}
function deleteTodo(index) {
    todoList.splice(index, 1); // Remove the task
    tododate.splice(index, 1); // Remove the date
    renderToDoList(); // Re-render the updated list
}
function addTodo() {
    const inputElement = document.querySelector('.js-name-input'); // Corrected selector
    const name = inputElement.value;
    console.log(name);
    todoList.push(name);
    console.log(todoList);

    const inputElementDate = document.querySelector('.js-date-input'); // Corrected selector
    const data=inputElementDate.value;
    console.log(data);
    tododate.push(data);
    console.log(tododate);

    // todoList.push(
    //     name:name,
    //     date:data
    // )
    if (name === '' || date === '') {
        alert("Please enter both task and date!"); // Prevent adding empty tasks
        return;
    }

    // changing the textbox as empty when something being added
    inputElement.value = '';
    inputElementDate.value='';
    renderToDoList();
    // renderToDoList();
}

