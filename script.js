const addInput = document.getElementById("add");
const buttons = document.querySelectorAll(".btn");
const listContainer = document.getElementById("collectLists");


let todos = [];

function renderList() {
    listContainer.innerHTML = "";

    todos.forEach((item, index) => {
        const div = document.createElement("div");
        div.classList.add("todo-item");
        div.textContent = `${index + 1}. ${item}`;

        listContainer.appendChild(div);
    });
}


buttons[0].addEventListener("click", () => {
    const value = addInput.value.trim();

    if (value === "") return;

    todos.push(value);
    renderList();

    addInput.value = "";
});



addInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        buttons[0].click();
    }
});


function renderList() {
    listContainer.innerHTML = "";

    todos.forEach((item, index) => {
        const todoDiv = document.createElement("div");
        todoDiv.className = "todo-item";

        const text = document.createElement("span");
        text.textContent = item;

        const deleteBtn = document.createElement("button");
        deleteBtn.type = "button";
        deleteBtn.textContent = "✕";

        deleteBtn.addEventListener("click", () => {
            deleteIndex = index;
            deletePopup.style.display = "flex";
        });

        todoDiv.append(text, deleteBtn);
        listContainer.appendChild(todoDiv);
    });
}


const deletePopup = document.getElementById("deletePopup");
const confirmDelete = document.getElementById("confirmDelete");
const cancelDelete = document.getElementById("cancelDelete");

cancelDelete.addEventListener("click", () => {
    deleteIndex = null;              // ⭐ สำคัญ
    deletePopup.style.display = "none";
});

confirmDelete.addEventListener("click", () => {
    if (deleteIndex !== null) {
        todos.splice(deleteIndex, 1);
        renderList();
    }
    deleteIndex = null;
    deletePopup.style.display = "none";
});


const exitBtn = document.querySelector(".exitbtn");
const popup = document.getElementById("exitPopup");
const confirmExit = document.getElementById("confirmExit");
const cancelExit = document.getElementById("cancelExit");

exitBtn.addEventListener("click", () => {
    popup.style.display = "flex";
});

cancelExit.addEventListener("click", () => {
    popup.style.display = "none";
});

confirmExit.addEventListener("click", () => {
    window.location.href = "/portweb.html";
});