const addBtn = document.querySelector("#addBtn");

const taskInput = document.querySelector("#taskInput");

const taskList = document.querySelector("#taskList");



let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

let currentFilter = "all";



addBtn.addEventListener("click", addTask);




taskInput.addEventListener("keypress", function(e){


    if(e.key === "Enter"){

        addTask();

    }


});






function saveTasks(){

    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );

}






function addTask(){


    const text = taskInput.value.trim();



    if(text === ""){

        return;

    }



    tasks.push({

        text:text,

        done:false

    });



    saveTasks();


    renderTasks();


    taskInput.value="";


}








function renderTasks(){


    taskList.innerHTML="";

if(tasks.length === 0){

    taskList.innerHTML =
    `
    <p class="empty">
        😊 Brak zadań.<br>
        Dodaj swoje pierwsze zadanie!
    </p>
    `;

    updateStats();

    return;

}

    let filteredTasks = tasks;


if(currentFilter === "active"){

    filteredTasks = tasks.filter(task => !task.done);

}


if(currentFilter === "completed"){

    filteredTasks = tasks.filter(task => task.done);

}



filteredTasks.forEach((task,index)=>{



        const li = document.createElement("li");



        li.textContent = task.text;



        if(task.done){

            li.classList.add("done");

        }






        li.addEventListener("click",()=>{


            task.done = !task.done;


            saveTasks();


            renderTasks();


        });








        const deleteBtn =
        document.createElement("button");



        deleteBtn.textContent="Usuń";





        deleteBtn.addEventListener("click",(e)=>{


            e.stopPropagation();



            tasks.splice(index,1);



            saveTasks();



            renderTasks();


        });






        li.appendChild(deleteBtn);



        taskList.appendChild(li);



    });




    updateStats();


}









function updateStats(){



    const total =
    tasks.length;



    const completed =
    tasks.filter(task=>task.done).length;



    const remaining =
    total - completed;





    document.querySelector("#totalTasks")
    .textContent = total;



    document.querySelector("#completedTasks")
    .textContent = completed;



    document.querySelector("#remainingTasks")
    .textContent = remaining;



}







renderTasks();

const filterButtons = document.querySelectorAll(".filter");


filterButtons.forEach(button=>{


    button.addEventListener("click",()=>{


        currentFilter =
        button.dataset.filter;


        filterButtons.forEach(btn=>{

            btn.classList.remove("active");

        });


        button.classList.add("active");


        renderTasks();


    });


});