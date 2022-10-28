const filled = document.querySelector('.filled');

function update(){
    filled.style.width = `${((window.scrollY) / (document.body.scrollHeight - window.innerHeight) * 100)}%`
    requestAnimationFrame(update);
}

update()

//Botonera

let pSize = 12;
let hSize = 33;
var textSize = document.querySelector('.size');

const btnAumentar = document.querySelector('.add');
btnAumentar.addEventListener('click', ()=>{
    pSize+=2;
    hSize+=2;
    if(pSize<48){
        console.log(pSize);
        document.querySelector('#size').value = pSize;
        document.getElementsByTagName('p').style.fontSize = pSize;
        document.getElementsByTagName('h1').style.fontSize = hSize;
    }
})

const btnReducir = document.querySelector('.remove');
btnReducir.addEventListener('click', ()=>{
    pSize-=2;
    hSize-=2;
    if(pSize>0){
        console.log(pSize);
        document.querySelector('#size').value = pSize;
        document.getElementsByTagName('p').style.fontSize = pSize;
        document.getElementsByTagName('h1').style.fontSize = hSize;
    }
})

textSize.addEventListener('keypress', (event)=>{
    if (event.key === "Enter"){
        if(textSize.value > 2 || textSize.value < 48){
            pSize = textSize.value;
            hSize = textSize.value + 21;
            console.log(hSize);
            document.getElementsByTagName('p').style.fontSize = pSize;
            document.getElementsByTagName('h1').style.fontSize = hSize;
        }
    }
})