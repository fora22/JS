// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

// REVIEW 변수 정의
const documentBody = document.querySelector("body");
let documentForm = document.createElement("form");
const documentTitle = document.createElement("h1");
const documentInputTask = document.createElement("input");

let pendingUl = document.createElement("ul");
let finishedUl = document.createElement("ul");

const pendingTitle = document.createElement("h2");
const finsihedTitle = document.createElement("h2");

let pendingList = [];        // REVIEW pending쪽 'li' 정보를 저장하는 array
let finishedList = [];       // REVIEW finished쪽 'li' 정보를 저장하는 array

const PENDING_KEY = "PENDING";
const FINISHED_KEY = "FINISHED";

function createBasicText() {
   
    pendingTitle.innerText = "Pending";
    finsihedTitle.innerText = "Finished";
    // pendingUl.append(pendingTitle);
    // finishedUl.append(finsihedTitle);

    documentTitle.innerText = "Tasks";
    documentInputTask.placeholder = "Add task";

    pendingUl.className = "pendingToDo";
    finishedUl.className = "finishedToDo";

    documentBody.prepend(finishedUl);
    documentBody.prepend(finsihedTitle);
    documentBody.prepend(pendingUl);
    documentBody.prepend(pendingTitle);
    documentForm.prepend(documentInputTask);
    documentForm.prepend(documentTitle);

    documentBody.prepend(documentForm);
    loadData();
}

function loadData() {
    const loadedPending = localStorage.getItem(PENDING_KEY);
    const loadedFinished = localStorage.getItem(FINISHED_KEY);
    // REVIEW 밑의 2개 IF문은 사실 addPendingToDo 함수와 거의 같음
    if (loadedPending !== null) {
        const parsedPending = JSON.parse(loadedPending);
        parsedPending.forEach(function(localObj) {
            const liToDo = document.createElement("li");
            const spanToDo = document.createElement("span");
            const delBtn = document.createElement("button");
            const finishBtn = document.createElement("button");

            const pendingToDoId = pendingList.length + 1;
            const finishedToDoId = finishedList.length + 1;

            spanToDo.innerText = localObj.text;
            delBtn.innerText = "❌";
            finishBtn.innerText = "✅";

            finishBtn.addEventListener("click", clickFinishedButton);
            delBtn.addEventListener("click", clickDeleteToDo);

            liToDo.appendChild(spanToDo);
            liToDo.appendChild(delBtn);
            liToDo.appendChild(finishBtn);
            liToDo.id = localObj.id;

            pendingUl.appendChild(liToDo);
            const toDoObj = {
                text: spanToDo.innerText,
                id: localObj.id
            }
            pendingList.push(toDoObj);
            
            // TODO localstorage에 저장하는 함수 추가해야함.
            saveToDo();
        });
    }

    if(loadedFinished !== null) {
        const parsedPending = JSON.parse(loadedFinished);
        parsedPending.forEach(function(localObj) {
            const liToDo = document.createElement("li");
            const spanToDo = document.createElement("span");
            const delBtn = document.createElement("button");
            const finishBtn = document.createElement("button");

            const pendingToDoId = pendingList.length + 1;
            const finishedToDoId = finishedList.length + 1;

            spanToDo.innerText = localObj.text;
            delBtn.innerText = "❌";
            finishBtn.innerText = "✅";

            finishBtn.addEventListener("click", clickFinishedButton);
            delBtn.addEventListener("click", clickDeleteToDo);

            liToDo.appendChild(spanToDo);
            liToDo.appendChild(delBtn);
            liToDo.appendChild(finishBtn);
            liToDo.id = localObj.id;

            finishedUl.appendChild(liToDo);
            const toDoObj = {
                text: spanToDo.innerText,
                id: localObj.id
            }
            finishedList.push(toDoObj);
            
            // TODO localstorage에 저장하는 함수 추가해야함.
            saveToDo();
        });
    }

}

function saveToDo() {
    localStorage.setItem(PENDING_KEY, JSON.stringify(pendingList));
    localStorage.setItem(FINISHED_KEY, JSON.stringify(finishedList));
}

function clickDeleteToDo(event) {
    const deleteLi = event.target.parentNode;
    deleteLi.remove();

    // TODO localstorage 삭제
}

function clickReAddPendingToDo(event) {
    event.target.innerText = "✅";
    event.target.removeEventListener("click", clickReAddPendingToDo);   // REVIEW clickReAddPendingToDo함수가 동작하지 않게(지금 finish에 있음) 이벤트 리스너를 제거함
    event.target.addEventListener("click", clickFinishedButton);
    const clickWhenReAddPendingList = event.target.parentNode;
    pendingUl.appendChild(clickWhenReAddPendingList);

    const haveFinishedList = finishedList.filter(function(pendingObj) {
        // REVIEW 클릭한 것을 제외한 todo list
        return pendingObj.id !== parseInt(clickWhenReAddPendingList.id);
        
    });

    const movePendingList = finishedList.filter(function(finishedObj) {
        // REVIEW 클릭한 tod list
        return finishedObj.id === parseInt(clickWhenReAddPendingList.id);
    });
    console.log(movePendingList);
    pendingList.push(movePendingList[0]);
    finishedList = haveFinishedList;

    // TODO localstorage 저장
    saveToDo();
}


function clickFinishedButton(event) {
    event.target.innerText = "🔊";
    event.target.removeEventListener("click", clickFinishedButton);
    event.target.addEventListener("click", clickReAddPendingToDo);
    const clickWhenFinishedList = event.target.parentNode;
    finishedUl.appendChild(clickWhenFinishedList);
    // pendingUl.removeChild(clickWhenFinishedList);

    const havePendingList = pendingList.filter(function(pendingObj) {
        // REVIEW 클릭한 것을 제외한 todo list
        return pendingObj.id !== parseInt(clickWhenFinishedList.id);
    });

    const moveFinishedList = pendingList.filter(function(finishedObj) {
        // REVIEW 클릭한 tod list
        return finishedObj.id === parseInt(clickWhenFinishedList.id);
    });
    // console.log(havePendingList, moveFinishedList);     // CHECK
    finishedList.push(moveFinishedList[0]);
    pendingList = havePendingList;
    // TODO localsorge 저장
    saveToDo();
}

function addPendingToDo() {
    const liToDo = document.createElement("li");
    const spanToDo = document.createElement("span");
    const delBtn = document.createElement("button");
    const finishBtn = document.createElement("button");

    const pendingToDoId = pendingList.length + 1;
    const finishedToDoId = finishedList.length + 1;

    spanToDo.innerText = documentInputTask.value;
    delBtn.innerText = "❌";
    finishBtn.innerText = "✅";

    finishBtn.addEventListener("click", clickFinishedButton);
    delBtn.addEventListener("click", clickDeleteToDo);

    liToDo.appendChild(spanToDo);
    liToDo.appendChild(delBtn);
    liToDo.appendChild(finishBtn);
    liToDo.id = pendingToDoId;

    pendingUl.appendChild(liToDo);
    const toDoObj = {
        text: spanToDo.innerText,
        id: pendingToDoId
    }
    pendingList.push(toDoObj);
    
    // TODO localstorage에 저장하는 함수 추가해야함.
    saveToDo();
    documentInputTask.value = "";
}

function handleSubmit(event) {
    event.preventDefault();
    addPendingToDo();
}

function init() {
    createBasicText();
    documentForm.addEventListener("submit", handleSubmit);
}

init();