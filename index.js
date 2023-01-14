
let textinput = document.getElementById('textValue')
let inputBtn = document.getElementById('inputBtn')
let delet = document.getElementById('apgar')

delet.onclick =()=>{

    let x = document.getElementById('lu')
    // let y = document.createElement('input')
    x.textContent = ''
}

textinput.addEventListener('keypress',(teclado)=>{

    let lu = document.getElementById('lu')
    let li = document.createElement('li')
    let btn = document.createElement('button')
    let checkBox = document.createElement('input')

    if(teclado.keyCode === 13 && textinput.value !== ""){

        li.textContent = textinput.value // valor do input
        lu.appendChild(li) //li dentro do lu

        checkBox.setAttribute("type","checkbox") // dando um type e qual type ta recebendo
        li.appendChild(checkBox) // checkBox dentro do lu ou li n sei qual botar

        btn.textContent = '-' //texto dentro do botao
        li.appendChild(btn) //botar button dentro do li que foi criado

        // let selectChecBox = document.querySelector(type="checkbox")
        // console.log( document.querySelector(type="checkbox"))

        document.getElementById('null').innerHTML = ''
        textinput.value = '' //limpar o input
    }

    else if(teclado.keyCode === 13 && textinput.value === ""){
        document.getElementById('null').innerHTML = 'Adicione algo a lista'
    }
    
    btn.onclick = () =>{
        lu.removeChild(li)
    }
}) 

inputBtn.onclick=()=>{

    let lu = document.getElementById('lu')
    let li = document.createElement('li')
    let btn = document.createElement('button')
    let checkBox = document.createElement('input')
    
    if(textinput.value === ""){
        document.getElementById('null').innerHTML = 'Adicione algo a lista'
    }
    else{ 
        textinput.focus()
        li.textContent = textinput.value // valor do input
        lu.appendChild(li) //li dentro do lu
    
        checkBox.setAttribute("type","checkbox") // dando um type e o valor type ta recebendo
        li.appendChild(checkBox) // checkBox dentro do lu ou li n sei qual botar
    
        btn.textContent = '-' //texto dentro do botao
        li.appendChild(btn) //botar button dentro do li que foi criado
    
        document.getElementById('null').innerHTML = ''
        textinput.value = '' //limpar o input
    }
  
    btn.onclick = () =>{
        lu.removeChild(li)
    }
}
