
let textinput = document.getElementById('textValue')
let inputBtn = document.getElementById('inputBtn')
let delet = document.getElementById('apgar')

delet.onclick = function(){

    let x = document.getElementById('lu')
    x.textContent = ''
}

textinput.addEventListener('keypress',(teclado)=>{

    let lu = document.getElementById('lu')
    let li = document.createElement('li')
    let btn = document.createElement('button')
    let check = document.createElement('input')
   
    if(teclado.keyCode === 13 ){

        check.setAttribute("type","checkbox") // dando um type e qual type ta recebendo
        li.appendChild(check) // checkBox dentro do lu ou li n sei qual botar

        li.textContent = textinput.value // valor do input
        lu.appendChild(li) //li dentro do lu

        btn.textContent = '-' //texto dentro do botao
        li.appendChild(btn) //botar button dentro do li que foi criado

        textinput.value = '' //limpar o input
    }

    // document.getElementById('null').innerHTML = 'Escreva algo'

    btn.onclick = () =>{
        lu.removeChild(li)
    }
})

// inputBtn.onclick =() =>{
    
//     let lu = document.getElementById('lu')
//     let li = document.createElement('li')
//     let btn = document.createElement('button')

//     textinput.focus()
//     li.textContent = textinput.value
//     lu.appendChild(li)
//     btn.textContent = '-'
//     li.appendChild(btn)
//     textinput.value = ''
//     document.getElementById('null').innerHTML = ''

//     btn.onclick = () =>{
//         lu.removeChild(li)
//     }
// }

