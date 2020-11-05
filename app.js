// Get form to take values from the user and check them against input validation requirements as per task planner documentation.

// Create a TaskManager class with the following properties - taskArray = [],  methods - getAllTasks(), getTasksWithStatus(), addtask(), deleteTask(), updateTask(), assignTask()
// let taskName;
// let taskDescription;
// let taskAssignedTo;
// let taskDueDate;
// let taskStatus;

let taskArray = [];

// The get user input functions is meant to grab the values of the user inputs from the html
// *** At the moment I am not sure if this code works ****

document.querySelector("#taskSubmit").addEventListener('click', function() {
    const position = "beforeend"

    let taskName = document.querySelector("#userTaskName").value;
    let taskDescription = document.querySelector("#userDescription").value;
    let taskAssignedTo = document.querySelector("#userAssignedTo").value;
    let taskDueDate = document.querySelector("#userDueDate").value;
    // let taskStatus = document.querySelector("#userStatus").value;
    let allStatus = document.querySelectorAll('.form-control.status');
    let taskStatus;

    // The loop below is used to loop through the length of the radio buttons
    for (let i = 0; i < allStatus.length; i++) {
        if (allStatus[i].checked == true) {
            taskStatus = allStatus[i].value;
        }
    }

    const newCard = `<div class="card">
    <div class="card-header">
        <h5>TASK</h5>
    </div>
        <ul class="list-group list-group-flush card-space">
            <li class="list-group-item"><span class="card-ref">Name: </span>${taskName}</li>
            <li class="list-group-item"><span class="card-ref">Description: </span>${taskDescription}</li>
            <li class="list-group-item"><span class="card-ref">Assign To: </span>${taskAssignedTo}</li>
            <li class="list-group-item"><span class="card-ref">Due Date: </span>${taskDueDate}</li>
            <li class="list-group-item"><span class="card-ref">Status: </span>${taskStatus}</li>
            </ul>
    </div>`

    let taskBoard = document.querySelector(".Taskboard-List")

    let allChecksPassed = validateInput(taskName, taskAssignedTo, taskDescription, taskStatus, taskDueDate);
    console.log(allChecksPassed)
    if (allChecksPassed == true) {
        createNewTask(taskName, taskDescription, taskAssignedTo, taskDueDate, taskStatus, taskArray);
        taskBoard.insertAdjacentHTML(position, newCard)
    } else {
        console.log("input error")
    };
});

// This is the event listener to clear all cards from the taskboard

document.querySelector("#taskSubmit").addEventListener('click', function() {
    const clear = document.querySelector("#clear-cards")
    clear.addEventListener("click", function() {
        localStorage.clear();
        location.reload();
    });
});

function validateInput(taskName, taskAssignedTo, taskDescription, taskStatus, taskDueDate) {
    let isAllValid = false;

    console.log(taskDescription.length)
    console.log(taskDescription)

    if (taskDescription.length > 10 && taskName.length >= 3 && taskAssignedTo.length >= 3 && taskStatus && taskDueDate) {
        isAllValid = true;
        console.log("true working")
    }
    return isAllValid;
}

function createNewTask(taskName, taskDescription, taskAssignedTo, taskStatus, taskDueDate, taskArray) {
    taskArray.push({
        "name": taskName,
        "assignedTo": taskAssignedTo,
        "Description": taskDescription,
        "DueDate": taskDueDate,
        "Status": taskStatus,
        "ID": `${taskArray.length <1 ? 1 : taskArray+1}`
    })
    return taskArray
}


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
    getAllTask() {}

    addTask(createNewTask) {}

    clearAllTasks() {};

    deleteTask(task) {} //task is a placeholder to take the user selected task

    taskUpdate(taskID, taskStatus) {} // This is a optional functionality and should only be coded and 
        // implemented once everything else works and is functional.
}


// let TaskManager = new TaskManager(taskArray);