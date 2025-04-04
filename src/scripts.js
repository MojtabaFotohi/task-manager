const APIURL = "https://67ebb893aa794fb3222b5bb1.mockapi.io/tasks"

//count detail of tasks
async function counterDetails() {

    try{
        const resposeGet= await fetch(APIURL)
        let result=await resposeGet.json()

        let countOfResultDetails={
            todo      : {total:0,low:0,medium:0,high:0},
            inprocess : {total:0,low:0,medium:0,high:0},
            closed    : {total:0,low:0,medium:0,high:0},
            stopped   : {total:0,low:0,medium:0,high:0}
        }

        result.forEach(task=>{

            if (task.stage==="To Do"){
                countOfResultDetails["todo"].total++
                if(task.priority==="Low"){
                    countOfResultDetails["todo"].low++
                }
                else if(task.priority==="Medium"){
                    countOfResultDetails["todo"].medium++
                }
                else if(task.priority==="High"){
                    countOfResultDetails["todo"].high++
                }
            }

            else if (task.stage==="in Process"){
                countOfResultDetails["inprocess"].total++
                if(task.priority==="Low"){
                    countOfResultDetails["inprocess"].low++
                }
                else if(task.priority==="Medium"){
                    countOfResultDetails["inprocess"].medium++
                }
                else if(task.priority==="High"){
                    countOfResultDetails["inprocess"].high++
                }
            }

            else if (task.stage==="Closed"){
                countOfResultDetails["closed"].total++
                if(task.priority==="Low"){
                    countOfResultDetails["closed"].low++
                }
                else if(task.priority==="Medium"){
                    countOfResultDetails["closed"].medium++
                }
                else if(task.priority==="High"){
                    countOfResultDetails["closed"].high++
                }
            }

            else if (task.stage==="Stopped"){
                countOfResultDetails["stopped"].total++
                if(task.priority==="Low"){
                    countOfResultDetails["stopped"].low++
                }
                else if(task.priority==="Medium"){
                    countOfResultDetails["stopped"].medium++
                }
                else if(task.priority==="High"){
                    countOfResultDetails["stopped"].high++
                }
            }
            



})
return countOfResultDetails

}catch(err){alert("Error fetch data for count")}
}




//GET method to get ALL DATA
async function GetAllData() {

    try{
        const resposeGet= await fetch(APIURL)
        let result=await resposeGet.json()

        let countResult= await counterDetails()
        document.querySelector('.todototal').innerHTML=`Total : ${countResult.todo.total}`
        document.querySelector('.todolow').innerHTML=`Low : ${countResult.todo.low}`
        document.querySelector('.todomedium').innerHTML=`Medium : ${countResult.todo.medium}`
        document.querySelector('.todohigh').innerHTML=`High : ${countResult.todo.high}`

        document.querySelector('.inprocesstotal').innerHTML=`Total : ${countResult.inprocess.total}`
        document.querySelector('.inprocesslow').innerHTML=`Low : ${countResult.inprocess.low}`
        document.querySelector('.inprocessmedium').innerHTML=`Medium : ${countResult.inprocess.medium}`
        document.querySelector('.inprocesshigh').innerHTML=`High : ${countResult.inprocess.high}`

        document.querySelector('.closedtotal').innerHTML=`Total : ${countResult.closed.total}`
        document.querySelector('.closedlow').innerHTML=`Low : ${countResult.closed.low}`
        document.querySelector('.closedmedium').innerHTML=`Medium : ${countResult.closed.medium}`
        document.querySelector('.closedhigh').innerHTML=`High : ${countResult.closed.high}`

        document.querySelector('.stoppedtotal').innerHTML=`Total : ${countResult.stopped.total}`
        document.querySelector('.stoppedlow').innerHTML=`Low : ${countResult.stopped.low}`
        document.querySelector('.stoppedmedium').innerHTML=`Medium : ${countResult.stopped.medium}`
        document.querySelector('.stoppedhigh').innerHTML=`High : ${countResult.stopped.high}`



        result.forEach(task => {
            switch(task.stage){
                case "To Do":
                    divshowData=document.querySelector('.ToDoShowTasks')
                    break;
                case "in Process":
                    divshowData=document.querySelector('.InProcessShowTasks')
                    break;
                case "Closed":
                    divshowData=document.querySelector('.ClosedShowTasks')
                    break;
                case "Stopped":
                    divshowData=document.querySelector('.StoppedShowTasks')
                    break;
                default:
                    alert('چنین حالتی در stage وجود ندارد')
            }
        const TemplateShowTask =    `<div class="task-card bg-sky-700 w-full h-[70%] rounded-lg p-2 mb-5 hover:bg-sky-300">
                                    <p class=" h-[30px] w-[80px]  flex items-center justify-center rounded-lg text-white
                                     ${task.priority === 'High' ? 'bg-red-600' : 
                                     task.priority === 'Medium' ? 'bg-yellow-600' : 
                                    'bg-green-600'}">
                                    ${task.priority}</p><input type="hidden" value="${task.id}">
                                    <p class="py-3">Name : ${task.name}</p>
                                    <p class="py-3">date : ${task.dueDate}</p>
                                    <p class="py-3">description : ${task.description}</p>
                                    <div class="flex items-center justify-center gap-10">
                                        <button type="button" class="edit-btn bg-orange-700 h-[35px] w-[70px]  rounded-lg text-white" data-id="${task.id}">Edit</button>
                                        <button type="button" class="delete-btn bg-red-700    h-[35px] w-[70px]  rounded-lg text-white" data-taskid="${task.id}">Delete</button>
                                    </div>
                                    </div>`
        if(divshowData){
            divshowData.innerHTML +=TemplateShowTask}
        });
        }catch(err){
        alert("Error fetch data")
    }
}
GetAllData()








//clear display

function clearDisplay(){
            document.querySelector('.ToDoShowTasks').innerHTML = ''
            document.querySelector('.InProcessShowTasks').innerHTML = ''
            document.querySelector('.ClosedShowTasks').innerHTML = ''
            document.querySelector('.StoppedShowTasks').innerHTML = ''
            document.querySelector('.todototal').innerHTML=''
            document.querySelector('.todolow').innerHTML=''
            document.querySelector('.todomedium').innerHTML=''
            document.querySelector('.todohigh').innerHTML=''
            document.querySelector('.inprocesstotal').innerHTML=''
            document.querySelector('.inprocesslow').innerHTML=''
            document.querySelector('.inprocessmedium').innerHTML=''
            document.querySelector('.inprocesshigh').innerHTML=''
            document.querySelector('.closedtotal').innerHTML=''
            document.querySelector('.closedlow').innerHTML=''
            document.querySelector('.closedmedium').innerHTML=''
            document.querySelector('.closedhigh').innerHTML=''
            document.querySelector('.stoppedtotal').innerHTML=''
            document.querySelector('.stoppedlow').innerHTML=''
            document.querySelector('.stoppedmedium').innerHTML=''
            document.querySelector('.stoppedhigh').innerHTML=''
}







//select option menu
document.querySelector('.selectmenu').addEventListener('change', function() {
if (this.value==="allpriorityOP"){
    clearDisplay()
        GetAllData()
    }
    
    
if (this.value==="lowOP"){
    clearDisplay()
        fetch(APIURL)
        .then(response => {
            if (!response.ok) {
            throw new Error('server error response')
            }
            return response.json()
        })
        .then(data => {
            let resultLowOP=data.filter(task=>task.priority==="Low")
            
            resultLowOP.forEach(tasks => {
                switch(tasks.stage){
                    case "To Do":
                        divshowData=document.querySelector('.ToDoShowTasks')
                        break;
                    case "in Process":
                        divshowData=document.querySelector('.InProcessShowTasks')
                        break;
                    case "Closed":
                        divshowData=document.querySelector('.ClosedShowTasks')
                        break;
                    case "Stopped":
                        divshowData=document.querySelector('.StoppedShowTasks')
                        break;
                    default:
                        alert('چنین حالتی در stage وجود ندارد')
                }
            const TemplateShowTask =    `<div class="task-card bg-sky-700 w-full h-[70%] rounded-lg p-2 mb-5 hover:bg-sky-300">
                                        <p class=" h-[30px] w-[80px]  flex items-center justify-center rounded-lg text-white
                                         ${tasks.priority === 'High' ? 'bg-red-600' : 
                                         tasks.priority === 'Medium' ? 'bg-yellow-600' : 
                                        'bg-green-600'}">
                                        ${tasks.priority}</p><input type="hidden" value="${tasks.id}">
                                        <p class="py-3">Name : ${tasks.name}</p>
                                        <p class="py-3">date : ${tasks.dueDate}</p>
                                        <p class="py-3">description : ${tasks.description}</p>
                                        <div class="flex items-center justify-center gap-10">
                                            <button type="button" class="edit-btn bg-orange-700 h-[35px] w-[70px]  rounded-lg text-white" data-id="${tasks.id}">Edit</button>
                                            <button type="button" class="delete-btn bg-red-700    h-[35px] w-[70px]  rounded-lg text-white" data-taskid="${tasks.id}">Delete</button>
                                        </div>
                                        </div>`
            if(divshowData){
                divshowData.innerHTML +=TemplateShowTask}
            });
            counterDetails().then(result=>{
                document.querySelector('.todototal').innerHTML=`Total : ${result.todo.total}`
                document.querySelector('.todolow').innerHTML=`Low : ${result.todo.low}`
                document.querySelector('.inprocesstotal').innerHTML=`Total : ${result.inprocess.total}`
                document.querySelector('.inprocesslow').innerHTML=`Low : ${result.inprocess.low}`
                document.querySelector('.closedtotal').innerHTML=`Total : ${result.closed.total}`
                document.querySelector('.closedlow').innerHTML=`Low : ${result.closed.low}`
                document.querySelector('.stoppedtotal').innerHTML=`Total : ${result.stopped.total}`
                document.querySelector('.stoppedlow').innerHTML=`Low : ${result.stopped.low}`
                })

        })     
        .catch(error => {
            console.error('error to fetch data', error);
        });
}




if (this.value==="mediumOP"){
    clearDisplay()
        fetch(APIURL)
        .then(response => {
            if (!response.ok) {
            throw new Error('server error response')
            }
            return response.json()
        })
        .then(data => {
            let resultMediumOP=data.filter(task=>task.priority==="Medium")
            resultMediumOP.forEach(tasks => {
                switch(tasks.stage){
                    case "To Do":
                        divshowData=document.querySelector('.ToDoShowTasks')
                        break;
                    case "in Process":
                        divshowData=document.querySelector('.InProcessShowTasks')
                        break;
                    case "Closed":
                        divshowData=document.querySelector('.ClosedShowTasks')
                        break;
                    case "Stopped":
                        divshowData=document.querySelector('.StoppedShowTasks')
                        break;
                    default:
                        alert('چنین حالتی در stage وجود ندارد')
                }
            const TemplateShowTask =    `<div class="task-card bg-sky-700 w-full h-[70%] rounded-lg p-2 mb-5 hover:bg-sky-300">
                                        <p class=" h-[30px] w-[80px]  flex items-center justify-center rounded-lg text-white
                                         ${tasks.priority === 'High' ? 'bg-red-600' : 
                                         tasks.priority === 'Medium' ? 'bg-yellow-600' : 
                                        'bg-green-600'}">
                                        ${tasks.priority}</p><input type="hidden" value="${tasks.id}">
                                        <p class="py-3">Name : ${tasks.name}</p>
                                        <p class="py-3">date : ${tasks.dueDate}</p>
                                        <p class="py-3">description : ${tasks.description}</p>
                                        <div class="flex items-center justify-center gap-10">
                                            <button type="button" class="edit-btn bg-orange-700 h-[35px] w-[70px]  rounded-lg text-white" data-id="${tasks.id}">Edit</button>
                                            <button type="button" class="delete-btn bg-red-700    h-[35px] w-[70px]  rounded-lg text-white" data-taskid="${tasks.id}">Delete</button>
                                        </div>
                                        </div>`
            if(divshowData){
                divshowData.innerHTML +=TemplateShowTask}
            });
            counterDetails().then(result=>{
                document.querySelector('.todototal').innerHTML=`Total : ${result.todo.total}`
                document.querySelector('.todomedium').innerHTML=`Medium : ${result.todo.medium}`
                document.querySelector('.inprocessmedium').innerHTML=`Medium : ${result.inprocess.medium}`
                document.querySelector('.closedmedium').innerHTML=`Medium : ${result.closed.medium}`
                document.querySelector('.stoppedmedium').innerHTML=`Medium : ${result.stopped.medium}`
                document.querySelector('.inprocesstotal').innerHTML=`Total : ${result.inprocess.total}`
                document.querySelector('.closedtotal').innerHTML=`Total : ${result.closed.total}`
                document.querySelector('.stoppedtotal').innerHTML=`Total : ${result.stopped.total}`
                })
        })     
        .catch(error => {
            console.error('error to fetch data', error);
        });
    }



if (this.value==="highOP"){
    clearDisplay()
        fetch(APIURL)
        .then(response => {
            if (!response.ok) {
            throw new Error('server error response')
            }
            return response.json()
        })
        .then(data => {
            let resultHighOP=data.filter(task=>task.priority==="High")
            resultHighOP.forEach(tasks => {
                switch(tasks.stage){
                    case "To Do":
                        divshowData=document.querySelector('.ToDoShowTasks')
                        break;
                    case "in Process":
                        divshowData=document.querySelector('.InProcessShowTasks')
                        break;
                    case "Closed":
                        divshowData=document.querySelector('.ClosedShowTasks')
                        break;
                    case "Stopped":
                        divshowData=document.querySelector('.StoppedShowTasks')
                        break;
                    default:
                        alert('چنین حالتی در stage وجود ندارد')
                }
            const TemplateShowTask =    `<div class="task-card bg-sky-700 w-full h-[70%] rounded-lg p-2 mb-5 hover:bg-sky-300">
                                        <p class=" h-[30px] w-[80px]  flex items-center justify-center rounded-lg text-white
                                         ${tasks.priority === 'High' ? 'bg-red-600' : 
                                         tasks.priority === 'Medium' ? 'bg-yellow-600' : 
                                        'bg-green-600'}">
                                        ${tasks.priority}</p><input type="hidden" value="${tasks.id}">
                                        <p class="py-3">Name : ${tasks.name}</p>
                                        <p class="py-3">date : ${tasks.dueDate}</p>
                                        <p class="py-3">description : ${tasks.description}</p>
                                        <div class="flex items-center justify-center gap-10">
                                            <button type="button" class="edit-btn bg-orange-700 h-[35px] w-[70px]  rounded-lg text-white" data-id="${tasks.id}">Edit</button>
                                            <button type="button" class="delete-btn bg-red-700    h-[35px] w-[70px]  rounded-lg text-white"data-taskid="${tasks.id}">Delete</button>
                                        </div>
                                        </div>`

            if(divshowData){
                divshowData.innerHTML +=TemplateShowTask}
            });
            counterDetails().then(result=>{
                document.querySelector('.todototal').innerHTML=`Total : ${result.todo.total}`
                document.querySelector('.inprocesstotal').innerHTML=`Total : ${result.inprocess.total}`
                document.querySelector('.closedtotal').innerHTML=`Total : ${result.closed.total}`
                document.querySelector('.stoppedtotal').innerHTML=`Total : ${result.stopped.total}`
                document.querySelector('.todohigh').innerHTML=`High : ${result.todo.high}`
                document.querySelector('.inprocesshigh').innerHTML=`High : ${result.inprocess.high}`
                document.querySelector('.closedhigh').innerHTML=`High : ${result.closed.high}`
                document.querySelector('.stoppedhigh').innerHTML=`High : ${result.stopped.high}`
                })
        })     
        .catch(error => {
            console.error('error to fetch data', error);
        });
    }
});










//show each task details

document.addEventListener('click', function(event) {
    const taskCard = event.target.closest('.task-card');
    if (!taskCard) return; 
    if (event.target.tagName === 'BUTTON') return;
    const hiddenInput = taskCard.querySelector('input[type="hidden"]');
    if (hiddenInput) {
    fetch(APIURL)
    .then(response => {
        if (!response.ok) {
        throw new Error('server error response')
        }
        return response.json()
        })
        .then(data => {
        let cardOutafterClick=data.filter(task=>task.id===hiddenInput.value)

        document.getElementById('taskName').innerText=cardOutafterClick[0].name
        document.getElementById('taskDescription').innerText=cardOutafterClick[0].description
        document.getElementById('taskPriority').innerText=cardOutafterClick[0].priority
        document.getElementById('taskStage').innerText=cardOutafterClick[0].stage
        document.getElementById('taskDueDate').innerText=cardOutafterClick[0].dueDate
        document.getElementById('taskCreatedAt').innerText=cardOutafterClick[0].createdAt   
    
    })

    } else {
      alert('no any card found');
    }
  });









//search input

  document.querySelector('input[type="search"]').addEventListener('input', function(event) {
    let searchinputUser=event.target.value.trim()
    fetch(APIURL)
    .then(response => {
        if (!response.ok) {
        throw new Error('server error response')
        }
        return response.json()
        })
        .then(data => {
        let cardOutafterClick = data.filter(task => {const searchTerm = searchinputUser.trim()
            if (searchTerm === "") return false
            return task.name.toLowerCase().includes(searchTerm.toLowerCase());})

         clearDisplay()
         
        if (searchinputUser==="")
            GetAllData()

        cardOutafterClick.forEach(searchItem=>{

            switch(searchItem.stage){
                case "To Do":
                    divshowData=document.querySelector('.ToDoShowTasks')
                    break;
                case "in Process":
                    divshowData=document.querySelector('.InProcessShowTasks')
                    break;
                case "Closed":
                    divshowData=document.querySelector('.ClosedShowTasks')
                    break;
                case "Stopped":
                    divshowData=document.querySelector('.StoppedShowTasks')
                    break;
                default:
                    alert('چنین حالتی در stage وجود ندارد')
            }
        const TemplateShowTask =    `<div class="task-card bg-sky-700 w-full h-[70%] rounded-lg p-2 mb-5 hover:bg-sky-300">
                                    <p class=" h-[30px] w-[80px]  flex items-center justify-center rounded-lg text-white
                                     ${searchItem.priority === 'High' ? 'bg-red-600' : 
                                     searchItem.priority === 'Medium' ? 'bg-yellow-600' : 
                                    'bg-green-600'}">
                                    ${searchItem.priority}</p><input type="hidden" value="${searchItem.id}">
                                    <p class="py-3">Name : ${searchItem.name}</p>
                                    <p class="py-3">date : ${searchItem.dueDate}</p>
                                    <p class="py-3">description : ${searchItem.description}</p>
                                    <div class="flex items-center justify-center gap-10">
                                        <button type="button" class="edit-btn bg-orange-700 h-[35px] w-[70px]  rounded-lg text-white" data-id="${searchItem.id}">Edit</button>
                                        <button type="button" class="delete-btn bg-red-700    h-[35px] w-[70px]  rounded-lg text-white" data-taskid="${searchItem.id}">Delete</button>
                                    </div>
                                    </div>`
        if(divshowData){
            divshowData.innerHTML +=TemplateShowTask}})
    })
});



//add-task btn
document.querySelector('#addTask').addEventListener('click', function() {
    let result=document.querySelector('#foraddtaskshow')
    result.classList.add('adtaskSection')


})

//cancel-addtask btn
document.querySelector('#btncancelAdd').addEventListener('click', function() {
    let result=document.querySelector('#foraddtaskshow')
    result.classList.remove('adtaskSection')
    document.getElementById('taskForm').reset();
    

})







//add task POST method



document.getElementById('taskForm').addEventListener('submit', function(e) {
    e.preventDefault(); 



    //GET now time  for Created At field  START
    function addZero_To_single_digits_Number(num){return num<10 ? `0${num}` : num}
    const now=new Date()
    const year=now.getFullYear()
    const month=addZero_To_single_digits_Number(now.getMonth()+1)
    const day=addZero_To_single_digits_Number(now.getDate())
    const hours=addZero_To_single_digits_Number(now.getHours())
    const minutes=addZero_To_single_digits_Number(now.getMinutes())
    const fulltime=`${year}-${month}-${day} ${hours}:${minutes}`
    //GET now time  for Created At field  END




    const taskData = {
        name: document.getElementById('addtaskform-name').value,
        description: document.getElementById('addtaskform-description').value,
        priority: document.querySelector('.addpriorityform').value,
        stage: document.querySelector('.addstageform').value,
        dueDate: document.getElementById('adddate').value +" "+ document.getElementById('addtime').value,
        createdAt: fulltime 
      };

      fetch(APIURL, {
        method: 'POST',
        headers: {'Content-Type': 'application/json',},
        body: JSON.stringify(taskData)
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('server error response');
        }
        return response.json();
      })
      .then(data => {
        alert('add task Successfully');
        console.log('Success:', data);
        document.getElementById('taskForm').reset();
        let result=document.querySelector('#foraddtaskshow')
        result.classList.remove('adtaskSection')
        GetAllData()
      })
      .catch(error => {
        alert('error to save data ');
        console.error('Error:', error);
      });
});





//DELETE method


document.addEventListener('click', function(e) {
    if (e.target.classList.contains('delete-btn')) {
      const taskId = e.target.getAttribute('data-taskid');

      confirmBeforeDelete(taskId);
    }
  });
  
  function confirmBeforeDelete(taskId) {
    const isConfirmed = confirm('Are you sure you want to delete this task ?');
    
    if (isConfirmed) {
      deleteTask(taskId);
    }
  }
  
  function deleteTask(taskId) {
    fetch(`${APIURL}/${taskId}`, {
      method: 'DELETE',
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('error delete task');
      }
      return response.json();
    })
    .then(data => {
      alert('task delete successfully');
      const taskCard = document.querySelector(`.delete-btn[data-taskid="${taskId}"]`).closest('.task-card');
      taskCard.remove();
      GetAllData()
    })
    .catch(error => {
      alert('error delete task');
      console.error('Error:', error);
    });
  }







//PUT method


document.addEventListener('click', function(e) {
  if (e.target.classList.contains('edit-btn')) {
    const taskId = e.target.getAttribute('data-id');
    openEditForm(taskId)



    const templateEditForm=`
                                <form action="" id="taskEditForm">
                                    <div class="flex flex-col bg-yellow-500 h-[530px] w-[300px] gap-6 p-4 rounded-xl">
                                        <p class="flex justify-center items-center text-[25px] ">Edit your task</p>
                                        <input type="text" class="rounded-lg h-[40px] px-3"placeholder="task name"required id="edittaskform-name">
                                        <input type="text" class="rounded-lg h-[40px] px-3"placeholder="task description"required id="edittaskform-description">
                                        <select name="" id="" class="editpriorityform p-2 rounded-lg text-black cursor-pointer"required>
                                            <option value="Low">Low</option>
                                            <option value="Medium">Medium</option>
                                            <option value="High">High</option>
                                        </select>
                                        <select name="" id="" class="editstageform p-2 rounded-lg text-black cursor-pointer"required>
                                            <option value="To Do">to do</option>
                                            <option value="in Process">in process</option>
                                            <option value="Closed">closed</option>
                                            <option value="Stopped">stopped</option>
                                        </select>
                                        <input type="date" id="editdate" required class="h-[40px] rounded-lg cursor-pointer" id="edittaskform-date">
                                        <input type="time" id="edittime" required class="h-[40px] rounded-lg cursor-pointer" id="edittaskform-time">
                                        <div class="flex gap-2">
                                            <input type="submit" value="Edit" id="editBtnFinal" class="bg-green-600 h-[40px] rounded-lg cursor-pointer flex-1">
                                            <input type="button" id="btncanceledit" value="cancel" class="bg-red-600 h-[40px] rounded-lg cursor-pointer flex-1">
                                        </div>
                                    </div>
                                </form>`


        let result=document.querySelector('#foredittaskform')
        result.innerHTML=templateEditForm
        result.classList.add('adtaskSection')

        //cancel-editTask btn
        document.querySelector('#btncanceledit').addEventListener('click', function() {
        let result=document.querySelector('#foredittaskform')
        result.classList.remove('adtaskSection')})



        async function openEditForm(taskId) {
            
              const response = await fetch(`${APIURL}/${taskId}`);        
              const taskforfill = await response.json();

              let name = document.getElementById('edittaskform-name').value=taskforfill.name
              let description = document.getElementById('edittaskform-description').value=taskforfill.description
              let priority = document.querySelector('.editpriorityform').value=taskforfill.priority
              let stage = document.querySelector('.editstageform').value=taskforfill.stage
              let date = document.getElementById('editdate').value=taskforfill.dueDate.split(" ")[0]
              let time = document.getElementById('edittime').value=taskforfill.dueDate.split(" ")[1]



document.getElementById('taskEditForm').addEventListener('submit', function(e) {
    e.preventDefault();

        //GET now time  for Created At field  START
        function addZero_To_single_digits_Number(num){return num<10 ? `0${num}` : num}
        const now=new Date()
        const year=now.getFullYear()
        const month=addZero_To_single_digits_Number(now.getMonth()+1)
        const day=addZero_To_single_digits_Number(now.getDate())
        const hours=addZero_To_single_digits_Number(now.getHours())
        const minutes=addZero_To_single_digits_Number(now.getMinutes())
        const fulltime=`${year}-${month}-${day} ${hours}:${minutes}`
        //GET now time  for Created At field  END


        const EditedtaskData = {
            name: document.getElementById('edittaskform-name').value,
            description: document.getElementById('edittaskform-description').value,
            priority: document.querySelector('.editpriorityform').value,
            stage: document.querySelector('.editstageform').value,
            dueDate: document.getElementById('editdate').value +" "+ document.getElementById('edittime').value,
            createdAt: fulltime };

            fetch(`${APIURL}/${taskId}`, {
                method: 'PUT',
                headers: {'Content-Type': 'application/json',},
                body: JSON.stringify(EditedtaskData)
              }).then(response => {
                  if (!response.ok) {
                    throw new Error('error edit task');
                  }
                  return response.json();
                }) .then(data => {
                    alert('task edited successfully')
                    document.querySelector('#foredittaskform').innerHTML = ''
                    document.querySelector('#foredittaskform').classList.remove('adtaskSection')
                    location.reload()
                })  
        })


}}});











  
