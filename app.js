// Get form to take values from the user and check them against input validation requirements as per task planner documentation.

// Create a TaskManager class with the following properties - taskArray = [],  methods - getAllTasks(), getTasksWithStatus(), addtask(), deleteTask(), updateTask(), assignTask()
let taskName;
let taskDescription;
let taskAssignedTo;
let taskDueDate;
let taskStatus;

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
    let taskBoard = document.querySelector(".Taskboard-List")

    const newCard = `<div class="card" taskID="${taskArray.ID}">
        <div class="card-header">
            <h5>TASK</h5>
        </div>
            <ul class="list-group list-group-flush card-space">
                <li class="list-group-item"><span class="card-ref">Name: </span>${taskArray.name}</li>
                <li class="list-group-item"><span class="card-ref">Description: </span>${taskArray.Description}</li>
                <li class="list-group-item"><span class="card-ref">Assign To: </span>${taskArray.assignedTo}</li>
                <li class="list-group-item"><span class="card-ref">Due Date: </span>${taskArray.DueDate}</li>
                <li class="list-group-item"><span class="card-ref">Status: </span>${taskArray.Status}</li>
                </ul>
        </div>`


    taskBoard.insertAdjacentHTML(position, newCard);


    let allChecksPassed = validateInput(taskName, taskAssignedTo, taskDescription, taskStatus, taskDueDate);

    if (allChecksPassed == true) {
        createNewTaskObj(taskName, taskDescription, taskAssignedTo, taskDueDate, taskStatus, taskArray);
        taskBoard.insertAdjacentHTML(position, newCard);
        console.log(taskArray);
    } else {
        console.log("input error")
    };
});

// This is the event listener to clear all cards from the taskboard

document.querySelector("#clear-cards").addEventListener('click', function() {
    localStorage.clear();
    location.reload();
});

function validateInput(taskName, taskAssignedTo, taskDescription, taskStatus, taskDueDate) {
    let isAllValid = false;

    if (taskDescription.length > 10 && taskName.length >= 3 && taskAssignedTo.length >= 3 && taskStatus && taskDueDate) {
        isAllValid = true;
    }
    return isAllValid;
}

function createNewTaskObj(taskName, taskDescription, taskAssignedTo, taskStatus, taskDueDate, taskArray) {
    taskArray.push({
            "name": taskName,
            "Description": taskDescription,
            "assignedTo": taskAssignedTo,
            "DueDate": taskDueDate,
            "Status": taskStatus,
            "ID": `${taskArray.length < 1 ? 1 : taskArray.length+1}`
        })
        // console.log(taskArray) this is used to check the user inputs being pushed into the array
    return taskArray
}



// The task manager class is used as a source control or middle man in-between
// the user inputs and the data output onto the card list.


class TaskManager {
    constructor(taskName) {
        this.taskName = taskName;
        this.allMyTask = [];
    }
    getAllTask() {
        console.log(this.allMyTask)
    }

    addTask(taskArray) {
        // task passed from the array

        const newCard = `<div class="card" taskID="${taskArray.ID}">
        <div class="card-header">
            <h5>TASK</h5>
        </div>
            <ul class="list-group list-group-flush card-space">
                <li class="list-group-item"><span class="card-ref">Name: </span>${taskArray.name}</li>
                <li class="list-group-item"><span class="card-ref">Description: </span>${taskArray.Description}</li>
                <li class="list-group-item"><span class="card-ref">Assign To: </span>${taskArray.assignedTo}</li>
                <li class="list-group-item"><span class="card-ref">Due Date: </span>${taskArray.DueDate}</li>
                <li class="list-group-item"><span class="card-ref">Status: </span>${taskArray.Status}</li>
                </ul>
        </div>`

        let taskBoard = document.querySelector(".Taskboard-List")
        taskBoard.insertAdjacentHTML(position, newCard);

    }

    clearAllTasks() {};

    deleteTask(task) {} //task is a placeholder to take the user selected task

    taskUpdate(taskID, taskStatus) {} // This is a optional functionality and should only be coded and 
        // implemented once everything else works and is functional.
}


let theTaskManager = new TaskManager();