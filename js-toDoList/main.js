document.getElementById('add').addEventListener('click', function () {
    let value = document.getElementById('item').value

    if (value) {
        addItemTodo(value)
        document.getElementById('item').value = ''
    }
})

document.getElementById('item').addEventListener('keyup', () => {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById('add').click();
    }
})

function addItemTodo(text) {

    let list = document.getElementById('todo')
    let item = document.createElement('li');
    item.innerText = text;
    let buttons = document.createElement('div');
    let remove = document.createElement('button')
    remove.innerHTML = "❌"
    let complete = document.createElement('button')
    complete.innerHTML = "✅"

    buttons.appendChild(remove)
    remove.addEventListener('click', () => {
        item.parentNode.removeChild(item)
    });

    buttons.appendChild(complete)
    complete.addEventListener('click', () => {
        item.classList.add("complete")
    });

    item.appendChild(buttons)
    list.insertBefore(item, list.childNodes[0])
}