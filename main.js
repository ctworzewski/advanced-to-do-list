const writeTaskInInput = document.querySelector('.writeTaskInInput');
const buttonAddTask = document.querySelector('.button');
const lists = document.querySelector('.allLists');

 buttonAddTask.addEventListener('click', addTask);
 
 function addTask() {
     const buttonDeleteTask = document.createElement('button');
     let li = document.createElement('li');
     let userInput = writeTaskInInput.value;
     li.innerHTML = userInput;
     lists.appendChild(li);
     writeTaskInInput.value = '';
    
    buttonDeleteTask.classList.add('btnDelete');
    lists.appendChild(buttonDeleteTask);
    buttonDeleteTask.textContent = 'usuń zadanie';
    
    buttonDeleteTask.addEventListener('click', function() {
    removeTask(li,buttonDeleteTask)})
}

 function removeTask(a,b) {
     lists.removeChild(a);
     lists.removeChild(b);
 }

 if (writeTaskInInput.value == '') {
     console.log('podaj wartość')
 } else {
    let li = document.createElement('li');
    let userInput = writeTaskInInput.value;
    li.innerHTML = userInput;
    lists.appendChild(li);
    writeTaskInInput.value = '';
 }