var tasks =[]
function addTask(){
    var taskInput = document.getElementById('todoInput')
    var taskvalue = taskInput.value  
    //checking if input is empty or not
    if(taskvalue.trim() !==""){
        //add Task
        tasks.push({
            text : taskvalue,
            completed : false

        })

        taskInput.value =""
        console.log(tasks)
    }
    updateTodoList();
}
function updateTodoList(){
    const todoList = document.getElementById('todoList')
    //clear existing list/data
    todoList.innerHTML = ""
    tasks.forEach ((task)=>{
        var listItem =document.createElement('li')
        listItem.textContent = task.text
        listItem.className = task.completed ? 'completed': ""
        listItem.onclick = function(){
            toogleCompleted(task)
        }
        todoList.appendChild(listItem)
    })
    //function to calculate todos,completed
updateAggregate()
}
function toogleCompleted(task){
    task.completed = !task.completed
    updateTodoList()
}
function updateAggregate(){
    var totalTasks = document.getElementById('totalTasks')
    var completedTasks = document.getElementById('completedTasks')
    var total = tasks.length
    var completed = tasks.reduce((acc,task)=>{
        return task.completed ? acc + 1 : acc
    },0)

    totalTasks.textContent = total
    completedTasks.textContent = completed

}
function filterTasks(){
    var searchInput = document.getElementById('searchInput')
    var searchValue = searchInput.value.toLowerCase()

    var filteredTasks = tasks.filter((task)=>{
        return task.text.toLowerCase().includes(searchValue)

    })
    //update todolist with filteredTask
    updatetodoListWithFilteredTasks(filteredTasks)
}
function updatetodoListWithFilteredTasks(filteredTasks){
    var todoList = document.getElementById('todoList')
    todoList.innerHTML = ""

    filteredTasks.forEach((task)=>{
        var listItem =document.createElement('li')
        listItem.textContent = task.text
        listItem.className = task.completed ? 'completed': ""
        listItem.onclick = function(){
            toogleCompleted(task)
        }
        todoList.appendChild(listItem)

    })
    updateAggregate()
    
}