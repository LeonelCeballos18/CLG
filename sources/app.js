const filled = document.querySelector('.filled');

function update(){
    filled.style.width = `${((window.scrollY) / (document.body.scrollHeight - window.innerHeight) * 100)}%`
    requestAnimationFrame(update);
}

update()

//Botonera

function botonera(){
    let pSize = 12;
let hSize = 33;
var textSize = document.getElementById('size');
let tagP = document.getElementsByTagName('p');
let tagH = document.getElementsByTagName('h1');

const btnAumentar = document.querySelector('.add');
btnAumentar.addEventListener('click', ()=>{
    pSize+=2;
    hSize+=2;
    if(pSize<48){
        console.log(pSize);
        document.querySelector('#size').value = pSize;
        for(let i=0; i<tagP.length; i++){
            document.getElementsByTagName('p')[i].style.fontSize = pSize;
        }
        for(let x=0; x<tagH.length; x++){
            document.getElementsByTagName('h1')[x].style.fontSize = hSize;
        }
    }
})

const btnReducir = document.querySelector('.remove');
btnReducir.addEventListener('click', ()=>{
    pSize-=2;
    hSize-=2;
    if(pSize>0){
        console.log(pSize);
        document.querySelector('#size').value = pSize;
        for(let i=0; i<tagP.length; i++){
            document.getElementsByTagName('p')[i].style.fontSize = pSize;
        }
        for(let x=0; x<tagH.length; x++){
            document.getElementsByTagName('h1')[x].style.fontSize = hSize;
        }
    }
})

textSize.addEventListener('keypress', (event)=>{
    if (event.key === "Enter"){
        if(textSize.valueAsNumber > 2 || textSize.valueAsNumber < 48){
            pSize = textSize.valueAsNumber;
            hSize = textSize.valueAsNumber + 21;
            console.log(hSize);
            for(let i=0; i<tagP.length; i++){
                document.getElementsByTagName('p')[i].style.fontSize = pSize;
            }
            for(let x=0; x<tagH.length; x++){
                document.getElementsByTagName('h1')[x].style.fontSize = hSize;
            }
        }
    }
})
}

botonera();