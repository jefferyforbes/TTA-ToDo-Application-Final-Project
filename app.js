// Get form to take values from the user and check them against input validation requirements as per task planner documentation.

// Create a TaskManager class with the following properties - taskArray = [],  methods - getAllTasks(), getTasksWithStatus(), addtask(), deleteTask(), updateTask(), assignTask()

// function getUserInput(newTask) {
//     let taskName = document.querySelector(".userTaskName").value;
//     let description = document.querySelector("#userDescription").value;
//     let assignedTo = document.querySelector("#userAssignedTo").value;
//     let dueDate = document.querySelector("#userDueDate").value;
//     let status = document.querySelector("#userStatus").value;
//     console.log(newTask)
//     return taskName, description, assignedTo, dueDate, status;
// };

let taskName, description, assignedTo, dueDate, status;

// The get user input functions is meant to grab the values of the user inputs from the html
// *** At the moment I am not sure if this code works ****

document.querySelector("#taskSubmit").addEventListener('click', function() {
    let taskSubmitBtn = document.querySelector("#taskSubmit");
    const position = "beforeend"

    const newCard = `<div class="card">
    <div class="card-header">
        <h5>TASK</h5>
    </div>
    <ul class="list-group list-group-flush card-space">
        <li class="list-group-item"><span class="card-ref">Name: </span>${taskName}</li>
        <li class="list-group-item"><span class="card-ref">Description: </span>${description}</li>
        <li class="list-group-item"><span class="card-ref">Assign To: </span>${assignedTo}</li>
        <li class="list-group-item"><span class="card-ref">Due Date: </span>${dueDate}</li>
        <li class="list-group-item"><span class="card-ref">Status: </span>${status}</li>
    </ul>`
    let taskBoard = document.querySelector(".Taskboard-List")
    if (checkAllValid == true) {
        taskBoard.insertAdjacentHTML(position, newCard)
    }

});

// This is the event listener to clear all cards from the taskboard

document.querySelector("#taskSubmit").addEventListener('click', function() {
    const clear = document.querySelector("#clear-cards")
    clear.addEventListener("click", function() {
        localStorage.clear();
        location.reload();
    });

});


// the check name assign function is to check that both the name and the assign
// values meet the validation criteria of no more than 8 characters and not empty.

function checkAllValid() {

    let taskName = document.querySelector("#userTaskName").value;
    let description = document.querySelector("#userDescription").value;
    let assignedTo = document.querySelector("#userAssignedTo").value;
    let dueDate = document.querySelector("#userDueDate").value;
    let status = document.querySelector("#userStatus").value;

    let checkTaskName = false;
    let checkDescription = false;
    let checkAssignedTo = false;

    if (taskName.length > 0 && taskName.length < 8) {
        checkTaskName = true;
    } else checkTaskName = console.log("task name false");

    if (description.length > 0 && description.length < 20) {
        checkDescription = true;
    } else checkDescription = console.log("description false");

    if ((assignedTo.length > 0 && assignedTo.length < 8)) {
        checkAssignedTo = true;
    } else checkAssignedTo = console.log("assign false");

    // (checkTaskName && checkDescription && checkAssignedTo

    if (checkTaskName && checkDescription && checkAssignedTo == true) {
        checkAllValid = true;
    } else alert('Error! The validation checks failed! Check Inputs!')
};

// The task manager class is used as a source control or middle man iin-between
// the user inputs and the data output onto the card list.

class TaskManager {
    constructor(taskName, description, assignedTo, dueDate, status) {
        this.taskName = taskName;
        this.description = description;
        this.assignedTo = assignedTo;
        this.dueDate = dueDate;
        this.status = status;
        this.taskArray = [];
        // this.taskID = this.taskArray
    }

    addTask() {
        // ---------- THIS METHOD HAS BE TEST AND WORKS ----------
        // document.querySelector(".taskSubmit").addEventListener('click', function() {
        //     let taskSubmitBtn = document.querySelector("#taskSubmit");
        //     const position = "beforeend"

        //     let taskName = document.querySelector("#userTaskName").value;
        //     let description = document.querySelector("#userDescription").value;
        //     let assignedTo = document.querySelector("#userAssignedTo").value;
        //     let dueDate = document.querySelector("#userDueDate").value;
        //     let status = document.querySelector("#userStatus").value;

        //     const newCard = `<div class="card">
        //     <div class="card-header">
        //         <h5>TASK</h5>
        //     </div>
        //     <ul class="list-group list-group-flush card-space">
        //         <li class="list-group-item"><span class="card-ref">Name: </span>${taskName}</li>
        //         <li class="list-group-item"><span class="card-ref">Description: </span>${description}</li>
        //         <li class="list-group-item"><span class="card-ref">Assign To: </span>${assignedTo}</li>
        //         <li class="list-group-item"><span class="card-ref">Due Date: </span>${dueDate}</li>
        //         <li class="list-group-item"><span class="card-ref">Status: </span>${status}</li>
        //     </ul>`

        //     let taskBoard = document.querySelector(".Taskboard-List")

        //     taskBoard.insertAdjacentHTML(position, newCard)
    };
    clearAllTasks() {
        // -------------- THIS METHOD HAS BE TEST AND WORKS ----------------------
        // document.querySelector("#taskSubmit").addEventListener('click', function() {
        //     const clear = document.querySelector("#clear-cards")
        //     clear.addEventListener("click", function() {
        //         localStorage.clear();
        //         location.reload();
        //     });
        // });
    };
}