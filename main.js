const writeTaskInInput = document.querySelector('.writeTaskInInput');
const buttonAddTask = document.querySelector('.button');
let lists = document.querySelector('.allLists');

 buttonAddTask.addEventListener('click', addTask);
 
 function addTask() {
     const buttonDeleteTask = document.createElement('button');
     let li = document.createElement('li');
     let userInput = writeTaskInInput.value;

     if (writeTaskInInput.value === '') {
         document.querySelector('.writeTaskInInput').style.border = "3px red solid";
         document.querySelector('.writeTaskInInput').placeholder = "Nie wprowadzona zadania! ";
        // const emptyInputAlert = function() {
        //     const textEmptyInputAlert = document.createElement('span');
        //     textEmptyInputAlert.textContent = 'wprowadź zadanie!';
        //     console.log(textEmptyInputAlert);
    }   else {
        
        li.innerHTML = userInput;
        lists.appendChild(li);
        writeTaskInInput.value = '';
        buttonDeleteTask.classList.add('btnDelete');
        lists.appendChild(buttonDeleteTask);
        buttonDeleteTask.textContent = 'usuń zadanie';

        
        buttonDeleteTask.addEventListener('click', function() {
            removeTask(li,buttonDeleteTask)});
        }
        localStorage.setItem('cos', userInput);
        localStorage.getItem('cos');

    }
    
    function removeTask(a,b) {
        lists.removeChild(a);
        lists.removeChild(b);
    }
    
