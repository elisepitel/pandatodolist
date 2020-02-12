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

        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'delete';

        ul.appendChild(li);
        li.appendChild(deleteButton);

        deleteButton.addEventListener ('click', (e) => {
            ul.removeChild(li);
        });
    });


});



