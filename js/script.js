let todoList = [];

function validateInput() {
    const taskInput = document.getElementById("taskInput").value;
    const taskDate = document.getElementById("taskDate").value;
    if (taskInput === "" || taskDate === "") {
        alert("Isi Semua Kolom!");
    } else {
        addTask(taskInput, taskDate);
        document.getElementById("taskInput").value = "";
        document.getElementById("taskDate").value = "";
    }
}
function addTask(taskInput, taskDate) {
    const taskItem = {
        taskInput: taskInput,
        taskDate: taskDate,
        completed: "uncompleted"
    };

    todoList.push(taskItem);
    console.log(todoList);
    renderList();
}



function renderList(list = todoList, index) {
    const Todolist = document.getElementById("todo-list");
    Todolist.innerHTML = "";

    list.forEach((item, index) => {
        Todolist.innerHTML += `
        <tr id="${item.taskInput}">
        <td class="border border-sky-900 border-r-1 border-slate-900/50 p-1"> ${item.taskInput} </td>
        <td class="border border-sky-900 border-r-1 border-slate-900/50 p-1"> ${item.taskDate} </td>
        <td class="border border-sky-900 border-r-1 border-slate-900/50 p-1" id="status"> ${item.completed} </td>
        <td class="border border-sky-900 border-r-1 border-slate-900/50 p-1"> ${item.completed === "uncompleted" ? 
                `<button style="cursor: pointer" class="bg-orange-100 rounded p-1 text-sky-800" onclick="completedTask(${index});"> Done </button>` 
                : ""} <button style="cursor: pointer" class="bg-rose-900 text-orange-100 rounded p-1 " onclick="deleteList(${index});"> Delete </button></td>
       
        </tr>`;
});
}

function deleteList(index) {
    if (confirm("Apakah anda yakin menghapus task ini?")){
        alert("Task berhasil dihapus");
        todoList.splice(index, 1);
        renderList();
    } else {
        alert("Task batal dihapus");
    }

}

function filterList() {
    const Status = document.getElementById("status").value;

    if (Status === "all") {
        renderList(todoList);
    } else if (Status === "completed") {
        const filtered = todoList.filter((item) => item.completed === "completed");
        renderList(filtered);
    } else {
        const filtered = todoList.filter((item) => item.completed === "uncompleted");
        renderList(filtered);
    }
}

function completedTask(index) {
    if (todoList[index]) {
        todoList[index].completed = "completed";
        console.log(todoList);
        renderList();
    }
}

function deleteAll(){

    if (confirm("Apakah anda yakin menghapus task ini?")){
        todoList = [];
        renderList();
        alert("Task berhasil dihapus");
    } else {
        alert("Task batal dihapus");
    }
    

}