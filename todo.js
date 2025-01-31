const todoList = []; // Array to store task objects with {todo, date}

// Initial render to display any existing tasks
renderToDoList();

function renderToDoList() {
    let todoListHTML = '';

    // Loop through the todoList array and generate HTML for each task
    todoList.forEach(function (todoObject, index) {
        const { todo, date } = todoObject; // Destructuring to extract task name and date

        // Creating HTML structure for each task with a delete button
        const html = `
            <p>
                ${todo} - ${date} 
                <button onclick="deleteTodo(${index})">Delete</button>
            </p>
        `;

        todoListHTML += html;
    });

    // Update the webpage to display the to-do list
    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function deleteTodo(index) {
    console.log("Deleting task at index:", index); // Debugging statement

    todoList.splice(index, 1); // Remove the task from the array
    console.log("Updated todoList after deletion:", todoList); // Debugging statement

    renderToDoList(); // Re-render the updated list
}

function addTodo() {
    const inputElement = document.querySelector('.js-name-input'); // Select the task input field
    const inputElementDate = document.querySelector('.js-date-input'); // Select the date input field

    const name = inputElement.value.trim(); // Trim to remove unnecessary spaces
    const date = inputElementDate.value;

    console.log("Task Entered:", name); // Debugging statement
    console.log("Date Entered:", date); // Debugging statement

    // Validation: Ensure both task and date are entered
    if (name === '' || date === '') {
        alert("Please enter both task and date!"); // Prevent adding empty tasks
        return;
    }

    // Add a new task object to the todoList array
    todoList.push({ todo: name, date });
    console.log("Updated todoList:", todoList); // Debugging statement

    // Clear input fields after adding a task
    inputElement.value = '';
    inputElementDate.value = '';

    renderToDoList(); // Refresh the list to show the new task
}
