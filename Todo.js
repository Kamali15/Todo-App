
      
document.getElementById('todo-form').addEventListener('submit', function (e) {
    e.preventDefault(); 
    var taskInput = document.getElementById('todo-input');
    var taskValue = taskInput.value.trim();

    var descriptionInput = document.getElementById('description-input');         
    var descriptionValue = descriptionInput.value.trim();

    if (taskValue !== '') {
        var item = createTodoItem(taskValue, descriptionValue);
        document.getElementById('todo-list').appendChild(item);
        taskInput.value = '';
        descriptionInput.value = '';
    }
});

function createTodoItem(task, description) {
    var item = document.createElement('div');
    item.className = 'item';

    var label = document.createElement('div');
    label.className='task';
    label.innerText = task;

    var descriptionSpan = document.createElement('div');
    descriptionSpan.className = 'description';
    descriptionSpan.innerText = description;

    var button = document.createElement('button');
    button.className='remove';
    button.innerText = 'Remove';

    button.addEventListener('click', function () {
        item.remove();
    });

    item.appendChild(label);
    item.appendChild(descriptionSpan);
    item.appendChild(button);

    return item;
}
