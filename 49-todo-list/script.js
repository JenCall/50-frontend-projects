const form = document.getElementById('form')
const input = document.getElementById('input')
const todosUl = document.getElementById('todos')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    addTodo()
})