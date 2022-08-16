const toDoForm = document.querySelector(".js-toDoForm"),
   toDoInput = toDoForm.querySelector("input"),
   toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo) {
            paintToDo(toDo.text);
        });
    }
}

let toDos = [];

function deleteToDo(event) {
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo) {
        // REVIEW  parseInt는 string을 int로 변환
        return toDo.id !== parseInt(li.id);     // id가 같지 않은 것만 반환 JS에서는 !== or ===는 boolean형태가 아닌 그 해당 값(객체 등)을 반환하는 듯.
    }); // REVIEW filter는 forEach처럼 각각의 Item을 해당 함수로 실행하는 것을 뜻함.
    toDos = cleanToDos;
    saveToDos();
}

function saveToDos() {
    // REVIEW localstorage에서는 모든 value가 string으로 저장된다.
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos)); // REVIEW JSON.stringify 는 object를 string으로 바꿔준다. 
}


function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    delBtn.innerText = "X";
    span.innerText = text;
    delBtn.addEventListener("click", deleteToDo);
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();