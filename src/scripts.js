const APIURL = "https://67ebb893aa794fb3222b5bb1.mockapi.io/tasks"


//GET ALL DATA



async function GetAllData() {

    try{
        const resposeGet= await fetch(APIURL)
        let result=await resposeGet.json()

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
                                    <p class=" h-[30px] w-[80px] bg-gray-500 flex items-center justify-center rounded-lg text-red-800">${task.priority}</p>
                                    <p class="py-3">Name : ${task.name}</p>
                                    <p class="py-3">date : ${task.dueDate}</p>
                                    <p class="py-3">description : ${task.description}</p>
                                    <div class="flex items-center justify-center gap-10">
                                        <button type="button" class="bg-orange-700 h-[35px] w-[70px]  rounded-lg ">Edit</button>
                                        <button type="button" class="bg-red-700    h-[35px] w-[70px]  rounded-lg ">Delete</button>
                                    </div>
                                    </div>`
        if(divshowData){
            divshowData.innerHTML +=TemplateShowTask
        }
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

