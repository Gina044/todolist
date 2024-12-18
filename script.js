let currentID = 3;

function addTask() {

    let task = document.getElementById("newtask");
    let taskvalue = task.value.trim();

    if (taskvalue === "") {
        Swal.fire({
            title: "Error!",
            text: "Task cannot be empty!",
            icon: "error"
        });
        return;
    }
    let newDate = new Date().toUTCString();

    let template = `  <div class="taskcard" id="${currentID}">
                        <p class="task">${taskvalue}- ${newDate} </p>
                        <button onclick="deleteTask('${currentID}')" class="btn btn-danger"> delete </button>
                    </div>`

    let parent = document.getElementById("tasklist");
    parent.innerHTML = parent.innerHTML + template;

    Swal.fire({
        title: "Good job!",
        text: "New task created!",
        icon: "success"
    });

    currentID++;
    task.value = "";
}




function deleteTask(id) {

    let element = document.getElementById(id);
    element.remove();

    Swal.fire({
        title: "Task Remove!",
        icon: "warning"
    });
  
}
 let deleteAll = document.getElementById("deleteAll");

 deleteAll.addEventListener("click", function(){
    let parent = document.getElementById("tasklist");
    parent.innerHTML = "";

    
    Swal.fire({
        title: "All Task Removed!",
        icon: "warning"
    });


 })