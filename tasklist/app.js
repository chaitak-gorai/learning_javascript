const form=document.querySelector('#task-form');
const taskList=document.querySelector('.collection');
const clearBtn=document.querySelector('.clear-tasks');
const filter=document.querySelector('#filter');
const taskInput=document.querySelector('#task');

loadEventListeners();

function loadEventListeners(){
document.addEventListener('DOMContentLoaded',getTasks);
form.addEventListener('submit',addTask);
taskList.addEventListener('click', removeTask);
clearBtn.addEventListener('click',clearTasks);

filter.addEventListener('keyup',filterTasks);

}

function addTask(e){
if(taskInput.value===''){
    alert('Add a task');
}
const li=document.createElement('li');
li.className='collection-item';
li.appendChild(document.createTextNode(taskInput.value));
const link=document.createElement('a');
link.className='delete-item secondary-content';
link.innerHTML='<i class="fa fa-remove"></i>';
li.appendChild(link);

taskList.appendChild(li);

storeTask(taskInput.value);

taskInput.value='';

console.log(li);

    e.preventDefault();
}

function removeTask(e){

    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('Are You Sure?')){
        e.target.parentElement.parentElement.remove();
   
   removeTaskLs(e.target.parentElement.parentElement);
   
    }

}

    
}

function removeTaskLs(taskItem){
    let tasks;

    if(localStorage.getItem('tasks')===null){
        tasks=[];
    }else{
        tasks=JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function(task,index){
        if(taskItem.textContent===task){
            tasks.splice(index,1);
        }
    });
    localStorage.setItem('tasks',JSON.stringify(tasks));
}

function clearTasks(){
    // taskList.innerHTML='';

    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }
    clearLs();
}

function clearLs(){
    localStorage.clear();
}

function filterTasks(e){
    const text=e.target.value.toLowerCase();
    document.querySelectorAll('.collection-item').forEach(function(task){

        const item=task.firstChild.textContent;

        if(item.toLocaleLowerCase().indexOf(text)!=-1){
            task.style.display='block';
        }else{
            task.style.display='none';
        }


    });

}

function storeTask(task){

    let tasks;

    if(localStorage.getItem('tasks')===null){
        tasks=[];
    }else{
        tasks=JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks',JSON.stringify(tasks));

}

function getTasks(){
    let tasks;

    if(localStorage.getItem('tasks')===null){
        tasks=[];
    }else{
        tasks=JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task){
        const li=document.createElement('li');
li.className='collection-item';
li.appendChild(document.createTextNode(task));
const link=document.createElement('a');
link.className='delete-item secondary-content';
link.innerHTML='<i class="fa fa-remove"></i>';
li.appendChild(link);

taskList.appendChild(li);

    });

}