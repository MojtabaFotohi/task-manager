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




//GET ALL DATA
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
        const TemplateShowTask =    `<div class="bg-sky-700 w-full h-[70%] rounded-lg p-2 mb-5">
                                    <p class=" h-[30px] w-[80px]  flex items-center justify-center rounded-lg text-white
                                     ${task.priority === 'High' ? 'bg-red-600' : 
                                     task.priority === 'Medium' ? 'bg-yellow-600' : 
                                    'bg-green-600'}">
                                    ${task.priority}</p>
                                    <p class="py-3">Name : ${task.name}</p>
                                    <p class="py-3">date : ${task.dueDate}</p>
                                    <p class="py-3">description : ${task.description}</p>
                                    <div class="flex items-center justify-center gap-10">
                                        <button type="button" class="bg-orange-700 h-[35px] w-[70px]  rounded-lg text-white">Edit</button>
                                        <button type="button" class="bg-red-700    h-[35px] w-[70px]  rounded-lg text-white">Delete</button>
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



//GET now time  for Created At field
function addZero_To_single_digits_Number(num){
    return num<10 ? `0${num}` : num
}
const now=new Date()
const year=now.getFullYear()
const month=addZero_To_single_digits_Number(now.getMonth()+1)
const day=addZero_To_single_digits_Number(now.getDate())
const hours=addZero_To_single_digits_Number(now.getHours())
const minutes=addZero_To_single_digits_Number(now.getMinutes())
const fulltime=`${year}-${month}-${day} ${hours}:${minutes}`




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
        GetAllData()
    }
    
    
if (this.value==="lowOP"){
        fetch(APIURL)
        .then(response => {
            if (!response.ok) {
            throw new Error('server error response')
            }
            return response.json()
        })
        .then(data => {
            let resultLowOP=data.filter(task=>task.priority==="Low")
            clearDisplay()
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
            const TemplateShowTask =    `<div class="bg-sky-700 w-full h-[70%] rounded-lg p-2 mb-5">
                                        <p class=" h-[30px] w-[80px]  flex items-center justify-center rounded-lg text-white
                                         ${tasks.priority === 'High' ? 'bg-red-600' : 
                                         tasks.priority === 'Medium' ? 'bg-yellow-600' : 
                                        'bg-green-600'}">
                                        ${tasks.priority}</p>
                                        <p class="py-3">Name : ${tasks.name}</p>
                                        <p class="py-3">date : ${tasks.dueDate}</p>
                                        <p class="py-3">description : ${tasks.description}</p>
                                        <div class="flex items-center justify-center gap-10">
                                            <button type="button" class="bg-orange-700 h-[35px] w-[70px]  rounded-lg text-white">Edit</button>
                                            <button type="button" class="bg-red-700    h-[35px] w-[70px]  rounded-lg text-white">Delete</button>
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
        fetch(APIURL)
        .then(response => {
            if (!response.ok) {
            throw new Error('server error response')
            }
            return response.json()
        })
        .then(data => {
            let resultMediumOP=data.filter(task=>task.priority==="Medium")
            clearDisplay()
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
            const TemplateShowTask =    `<div class="bg-sky-700 w-full h-[70%] rounded-lg p-2 mb-5">
                                        <p class=" h-[30px] w-[80px]  flex items-center justify-center rounded-lg text-white
                                         ${tasks.priority === 'High' ? 'bg-red-600' : 
                                         tasks.priority === 'Medium' ? 'bg-yellow-600' : 
                                        'bg-green-600'}">
                                        ${tasks.priority}</p>
                                        <p class="py-3">Name : ${tasks.name}</p>
                                        <p class="py-3">date : ${tasks.dueDate}</p>
                                        <p class="py-3">description : ${tasks.description}</p>
                                        <div class="flex items-center justify-center gap-10">
                                            <button type="button" class="bg-orange-700 h-[35px] w-[70px]  rounded-lg text-white">Edit</button>
                                            <button type="button" class="bg-red-700    h-[35px] w-[70px]  rounded-lg text-white">Delete</button>
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
        fetch(APIURL)
        .then(response => {
            if (!response.ok) {
            throw new Error('server error response')
            }
            return response.json()
        })
        .then(data => {
            let resultHighOP=data.filter(task=>task.priority==="High")
            clearDisplay()


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
            const TemplateShowTask =    `<div class="bg-sky-700 w-full h-[70%] rounded-lg p-2 mb-5">
                                        <p class=" h-[30px] w-[80px]  flex items-center justify-center rounded-lg text-white
                                         ${tasks.priority === 'High' ? 'bg-red-600' : 
                                         tasks.priority === 'Medium' ? 'bg-yellow-600' : 
                                        'bg-green-600'}">
                                        ${tasks.priority}</p>
                                        <p class="py-3">Name : ${tasks.name}</p>
                                        <p class="py-3">date : ${tasks.dueDate}</p>
                                        <p class="py-3">description : ${tasks.description}</p>
                                        <div class="flex items-center justify-center gap-10">
                                            <button type="button" class="bg-orange-700 h-[35px] w-[70px]  rounded-lg text-white">Edit</button>
                                            <button type="button" class="bg-red-700    h-[35px] w-[70px]  rounded-lg text-white">Delete</button>
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






