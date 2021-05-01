// vars
const form = document.querySelector('.form-task'),
        myInput = document.querySelector('#myInput'),
        btnTask = document.querySelector('#addTask'),
        tasks = document.querySelector('.collection');

loadEventListeners()


function loadEventListeners() {
    
    form.addEventListener('submit', addTask)
}

function addTask(e) {

    if(myInput.value === '') {
        alert('Please..')
    }

    const li = document.createElement('li')

    li.className = 'new-item'
    li.id ='new-collection'

    li.appendChild(document.createTextNode(myInput.value))

    tasks.appendChild(li)
    console.log(li)

   myInput.value = '';


    e.preventDefault()
}

tasks.addEventListener('click', e => {
    if(e.target.tagName == 'LI') {
        e.target.classList.toggle('checked')
    }
})

// Sotrage

function storageTasks(task) {
    let tasks;
    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    tasks.push(task)

    localStorage.setItem('tasks', JSON.stringify(tasks))
}