document.addEventListener('DOMContentLoaded', () => { 

const form = document.getElementById('submitTask');
const input = form.querySelector('input');


    form.addEventListener ('submit', (e) => {
        e.preventDefault();
        const ul = document.getElementById('toDoList');
        const span = document.createElement('span');
        const li = document.createElement('li');
        span.innerHTML = input.value;
        input.value = '';

        li.className = "single-before";

        li.appendChild(span);
        ul.appendChild(li);

        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'delete';
        li.appendChild(deleteButton);

        deleteButton.addEventListener ('click', (e) => {
            ul.removeChild(li);
        });

        const editButton = document.createElement('button');
        editButton.textContent = 'edit';

        const saveButton = document.createElement('button');
        saveButton.textContent = 'save';
        
        var editedTask = document.createElement('input');
        var editedTask = document.createElement('input');

        li.appendChild(editButton);

        editButton.addEventListener ('click', (e) => { 
            editedTask.value = span.textContent;
            li.removeChild(span);
            li.removeChild(editButton);
            li.prepend(editedTask);
            li.childNodes[1].nodeValue = editedTask.value;
            li.appendChild(saveButton);
         });

         saveButton.addEventListener ('click', (e) => {
            span.textContent = editedTask.value;
            li.removeChild(editedTask);
            li.removeChild(saveButton);
            li.prepend(span);
            li.appendChild(editButton);
            span.prepend(doneCheck);
         });
    });


});



