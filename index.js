
let textinput = document.getElementById('textValue')
let inputBtn = document.getElementById('inputBtn')

textinput.addEventListener('keypress',(teclado)=>{

    let lu = document.getElementById('lu')
    let li = document.createElement('li')
    let btn = document.createElement('button')

    if(teclado.keyCode === 13){ 

        li.textContent = textinput.value
        lu.appendChild(li)
        btn.textContent = '-'
        li.appendChild(btn)

        textinput.value = ''
    }

    btn.onclick = () =>{
        console.log(li.textContent)
        li.textContent = ''
    }
})



