const APIURL = "https://67ebb893aa794fb3222b5bb1.mockapi.io/tasks"



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

