
let textinput = document.getElementById('textValue')

textinput.addEventListener('keypress',(teclado)=>{
    // let lugar = document.getElementById('lugar')

    if(textinput.value !== undefined && teclado.keyCode === 13){ 
        lugar.innerHTML += textinput.value
        console.log(textinput.value)
        textinput.value = ''
    }
})

