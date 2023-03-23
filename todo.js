// TODO items:
// 1) Name of TODO
// 2) Date of TODO
// 3) Note 

var todoList = [];

// function todo(title, date, note, id) {
//     this.title = title;
//     this.date = date;
//     this.note = note;
//     this.id = id;
// }

function createTodo() {
    if (document.getElementById('titleInput').value == "") {
        return;
    }
    else {
        const textBox = document.getElementById('titleInput');
        const title = textBox.value;

        const datePicker = document.getElementById('dateInput');
        const date = datePicker.value;

        const noteBox = document.getElementById('note');
        const note = noteBox.value;

        const id = new Date().getTime();

        todoList.push({
            title: title,
            date: date
        });

        document.getElementById("todos-section").innerHTML = "";
        todoList.forEach(function (todo) {
            const checkBox = document.createElement('input');
            checkBox.setAttribute('type', 'checkbox');
            checkBox.setAttribute('id', 'checkBox');

            const todoTest = document.createElement('div');
            todoTest.setAttribute('id', 'item');
            todoTest.innerHTML = todo.title + " " + todo.date;
            const test = document.getElementById('todos-section');
            todoTest.appendChild(checkBox);
            test.appendChild(todoTest);
        })


        //// Can be used for an easy way to set unqiue ID to each item
        // for (let i = 0; i < todoList.length; i++) {
        //     const todoTest = document.createElement('div');
        //     todoTest.setAttribute('id', 'item' + i);
        //     todoTest.innerText = todoList[i].title + ' ' + todoList[i].date;
        //     const test = document.getElementById('todos-section');
        //     test.appendChild(todoTest);
        // }
    }
}

$('.document').ready(function () {

})

