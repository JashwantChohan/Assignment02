const taskinput = document.getElementById('taskinput')
const tasklist = document.getElementById('tasklist')
// task adddition
function addtask() {
    const tasktext = taskinput.value.trim()
    if (tasktext !== '') {
        const li = document.createElement('li')
        li.textContent = tasktext
        tasklist.appendChild(li)
        li.addEventListener('click', completetask)
        taskinput.value = ""
        

        const deletebtn = document.createElement('button')
        deletebtn.textContent = 'delete'
        deletebtn.addEventListener('click', deletetask)
        li.appendChild(deletebtn)

        saveTaskTolocalStorage();
       
    }

}

// task completion
function completetask(event) {
    const task = event.target
    task.classList.toggle('completed')
}


// task deletion
function deletetask(event) {
    const task = event.target.parentElement
    tasklist.removeChild(task)

}

// store task in local storage 
function saveTaskTolocalStorage() {
    const task = []
    const taskitem = tasklist.getElementsByTagName('li')

    for (let i = 0; i < taskitem.length; i++) {
        task.push(taskitem[i].textContent)
    }

    localStorage.setItem('task', JSON.stringify(task))

}

// load task in local storage 
function loadTaskFromLocalStorage() {
    const task = JSON.parse(localStorage.getItem('task'))
    if (task) {
        task.forEach(tasktext => {
            const li = document.createElement('li')
            li.textContent = tasktext
            tasklist.appendChild(li)
            li.addEventListener('click', completetask)

            const deletebtn = document.createElement('button')
            deletebtn.textContent = 'delete'
            deletebtn.addEventListener('click', deletetask)
            li.appendChild(deletebtn)


        })
    }
}
loadTaskFromLocalStorage() 
console.log("jshdjhgf")