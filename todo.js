// TODO items:
// 1) Name of TODO
// 2) Date of TODO
// 3) Note 

var todoList = [];

function todo(title, date, note, id) {
    this.title = title;
    this.date = date;
    this.note = note;
    this.id = id;
}

function createTodo() {
    if (document.getElementById('titleInput').value == "") {
        return;
    }
    else {
        let title = document.getElementById('titleInput').value;
        let date = document.getElementById('dateInput').value;
        let note = document.getElementById('note').value;
        const id = new Date().getTime();
        let todoListItem = new todo(title, date, note, id);
        todoList.push({
            todoListItem,
        });

        document.getElementById("todos-section").innerHTML = "";
        todoList.forEach(function (todo) {
            const todoTest = document.createElement('div');
            todoTest.innerHTML = todo.title + " " + todo.date;
            const test = document.getElementById('todos-section');
            test.appendChild(todoTest);
        })
    }
}

$('.document').ready(function () {

})

