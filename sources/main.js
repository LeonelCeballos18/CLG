const descForm = document.querySelector('.desc-form')
const myBtns = document.querySelector('.my-btns');
const errorMessage = document.querySelector('.error')
const remTime = document.querySelector('.remTime');
const notice = document.querySelector('.noticeBoard')
const div = document.querySelector('.main-container');

const completed = document.querySelector('.completed-list')

let workDuration = descForm.workTime.value;
let breakDuration = descForm.breakTime.value;
let shortDesc = descForm.shortDesc.value;
let timeRatio_of_progress = ((workDuration * 60)/100) * 1000;

descForm.workTime.addEventListener('keyup',e=>{
    errorMessage.classList.add('d-none')
    workDuration = e.target.value;
    workMinutes = workDuration - 1;
    timeRatio_of_progress = ((workDuration * 60)/100) * 1000;
   
})
descForm.breakTime.addEventListener('keyup',e=>{  
    errorMessage.classList.add('d-none')
    breakDuration = e.target.value;
    breakMinutes = breakDuration - 1;

})
descForm.shortDesc.addEventListener('keyup',e=>{
    errorMessage.classList.add('d-none')
    shortDesc = e.target.value;    
})

//Variables
let workMinutes  = workDuration -1;
let breakMinutes = breakDuration -1;
let timer1 = undefined
let timer2 = undefined
let breakcount = 0;
let seconds = 60;
let currentTime = undefined;
let EndTime = undefined;
let width = 0;

myBtns.addEventListener('click',(e)=>{
    if(e.target.classList.contains('start')){
        for(let i=shortDesc; i>0; i--){
            myIntervals();
            disabling();
            console.log(1)
            const checkCurrtime = new Date();
            currentTime = checkCurrtime.toLocaleTimeString();
        }
    }
    clearAll();
})

//fucntion, which is for showing the remaining time to user
let timeReamaining = () =>{
    seconds = seconds - 1;
    if(seconds === 0){
        workMinutes = workMinutes - 1;
        if(workMinutes === -1){
            div.classList.toggle('descanso');
            if(breakcount % 2 === 0){
                workMinutes = breakMinutes;
                breakcount = breakcount + 1;    
            }else{
                width = 1;
                workMinutes = workDuration - 1;
                breakcount = breakcount + 1;
                notice.innerText = ' ';

        } 
    }
        seconds = 59;
    }
//Here we are rendring the change in time on the timer screen       
let html = `${workMinutes<10? `0${workMinutes}`:workMinutes}:${seconds<10? `0${seconds}`:seconds}`
remTime.innerText = html;  
}

//fucntion to start time intervals
let myIntervals = () =>{
    timer1 = setInterval(timeReamaining,1000);
}

let disabling = () =>{
   descForm.workTime.disabled = true
   descForm.breakTime.disabled = true
   descForm.shortDesc.disabled = true

}
let enabling = () =>{
    descForm.workTime.disabled = false;
    descForm.breakTime.disabled = false;
    descForm.shortDesc.disabled = false;
    descForm.reset();
}

//function to reset all values
let clearAll = () =>{
    enabling();
    clearInterval(timer1)
    workMinutes = workDuration - 1;
    seconds = 60;
    breakMinutes = breakDuration - 1;
    remTime.textContent = `00:00`
    notice.textContent = '';
    width = 1

}

//fuction to show the starting and ending time 
let sessionTime = () =>{
    return `Session was started at ${currentTime} and ended at ${EndTime}`
}

let pSize = 12;
let hSize = 33;

const btnAumentar = document.querySelector('.add');
btnAumentar.addEventListener('click', ()=>{
    pSize+=2;
    hSize+=2;
    console.log(pSize);
    document.getElementsByTagName('p').style.fontSize = pSize;
    document.getElementsByTagName('h1').style.fontSize = hSize;
})

const btnReducir = document.querySelector('.remove');
btnReducir.addEventListener('click', ()=>{
    pSize-=2;
    hSize-=2;
    console.log(pSize);
    document.getElementsByTagName('p').style.fontSize = pSize;
    document.getElementsByTagName('h1').style.fontSize = hSize;
})