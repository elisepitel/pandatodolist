document.addEventListener('DOMContentLoaded', () => { 

const form = document.getElementById('submitTask');
const input = form.querySelector('input');


    form.addEventListener ('submit', (e) => {
        e.preventDefault();
        const text = input.value;
        input.value = '';

        const ul = document.getElementById('toDoList');
        const li = document.createElement('li');
        li.textContent = text;


        ul.appendChild(li);

        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'delete';
        li.appendChild(deleteButton);

        deleteButton.addEventListener ('click', (e) => {
            ul.removeChild(li);

        });
        
        let editButton = document.createElement('button');
        editButton.textContent = 'edit';
        li.appendChild(editButton);

        editButton.addEventListener ('click', (e) => {
            let editedTask = document.createElement('input');
            li.prepend(editedTask);
            li.childNodes[1].nodeValue = '';
            editButton.textContent = 'save';
         });

    });


});



