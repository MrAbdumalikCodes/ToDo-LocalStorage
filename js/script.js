let inputBox = document.querySelector('.inputField input')
let addBtn = document.querySelector('.inputField button')
let toDoList = document.querySelector('.todoList')
let deleteAllBtn = document.querySelector('.footer button')
inputBox.onkeyup = () => {
    let userData = inputBox.value
    if(userData.trim() != 0){
        addBtn.classList.add('active')
    }else{
        addBtn.classList.remove('active')
    }
}
showTasks()

addBtn.onclick = ()=>{
    let userData = inputBox.value
    let getLocalStorage = localStorage.getItem("New ToDo")
    if(getLocalStorage == null){
        listArr =[]
    }else{
        listArr = JSON.parse(getLocalStorage)
    }
    listArr.push(userData)
    localStorage.setItem('New ToDo', JSON.stringify(listArr))
    showTasks()
}

function showTasks(){
    let getLocalStorage = localStorage.getItem("New ToDo")
    if(getLocalStorage == null){
        listArr =[]
    }else{
        listArr = JSON.parse(getLocalStorage)
    }
    const pendingNumb = document.querySelector('.pendingNumb');
    pendingNumb.textContent = listArr.length
    let newLiTag = ''
    listArr.forEach((element,index) => {
        newLiTag += `
        <li>${element}<span onclick ="deleteTask(${index})";><i class="fa-sharp fa-solid fa-trash"></i></span></li>
        `
    });
    toDoList.innerHTML = newLiTag
    inputBox.value = ""
}
function deleteTask(index){
    let getLocalStorage = localStorage.getItem("New ToDo")
    listArr = JSON.parse(getLocalStorage)
    listArr.splice(index,1)
    localStorage.setItem('New ToDo', JSON.stringify(listArr))
    showTasks()
}

deleteAllBtn.onclick =() =>{
    listArr = []
    localStorage.setItem('New ToDo', JSON.stringify(listArr))
    showTasks()
}