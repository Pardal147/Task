
let textinput = document.getElementById('textValue')

textinput.addEventListener('keydown',(teclado)=>{

    let textValue = document.getElementById('textValue').value
    let array = [textValue]
    let lugar = document.getElementById('lugar')

    if(teclado.keyCode === 13){
        for(key in array){
            lugar.innerText += array[key]    
        }
    }
})







