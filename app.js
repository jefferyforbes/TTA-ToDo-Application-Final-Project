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

document.addEventListener("click", function(btnClick) {
    const clickPurpose = btnClick.target;
    // console.log(clickPurpose); for testing

    let cardElementID = clickPurpose.parentNode.parentNode.attributes.taskID.value; // this will hold the value of the button the two parent levels above (the card itself) in cardElement
    // console.log(cardElementID)
});

document.querySelector("#taskSubmit").addEventListener('click', function() {

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

    let allChecksPassed = validateInput(taskName, taskAssignedTo, taskDescription, taskStatus, taskDueDate);

    if (allChecksPassed == true) {
        createNewTaskObj(taskName, taskDescription, taskAssignedTo, taskDueDate, taskStatus, theTaskManager.taskManArray);
        let myTaskIndex = theTaskManager.taskManArray.length - 1;

        // console.log(theTaskManager.taskManArray[myTaskIndex]);
        // console.log(theTaskManager.taskManArray);  ---->>>>> These were used to test the incrementing of the id attached to the task cards

        theTaskManager.addTask(theTaskManager.taskManArray[myTaskIndex]);
    } else {
        console.log("input error");
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
    theTaskManager.taskManArray.push({
        "name": taskName,
        "Description": taskDescription,
        "assignedTo": taskAssignedTo,
        "DueDate": taskDueDate,
        "Status": taskStatus,
        "ID": `${taskArray.length < 1 ? 1 : taskArray.length+1}`
    });

    localStorage.setItem("localStorageTaskArray", JSON.stringify(theTaskManager.taskManArray));
    return theTaskManager.taskManArray;
}

// The task manager class is used as a source control or middle man in-between
// the user inputs and the data output onto the card list.

class TaskManager {
    constructor() {
        this.taskName = taskName;
        this.taskManArray = [];
    }
    getAllTask() {
        console.log(this.taskManArray)
    }

    addTask(taskArray) {
        // task passed from the array

        const position = "beforeend"

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
                <button type="button" class="btn btn-danger" taskID=${taskArray.ID}>Delete Card</button>
                </ul>
        </div>`

        let taskBoard = document.querySelector(".Taskboard-List");
        taskBoard.insertAdjacentHTML(position, newCard);
    };



    deleteTask() {} //task is a placeholder to take the user selected task

    // taskUpdate(taskID, taskStatus) {}; // This is a optional functionality and should only be coded and 
    // implemented once everything else works and is functional.
};

let theTaskManager = new TaskManager();


// The code below populates the page with tasks if the conditional statement finds any in the local storage
let dataReturned = localStorage.getItem("localStorageTaskArray");

if (dataReturned) {
    theTaskManager.taskManArray = JSON.parse(dataReturned);
    storedTasks(theTaskManager.taskManArray)
} else {
    theTaskManager.taskManArray = [];
};

// the storedTask function loops through the taskmanarray in the local storage and automatically add them back to the taskboard list
function storedTasks(taskManArray) {
    for (let i = 0; i < taskManArray.length; i++) {
        theTaskManager.addTask(taskManArray[i]);
    };
};