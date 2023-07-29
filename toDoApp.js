//#region Estructura
let body = document.querySelector('body')
let divText1 = document.createElement('div')
let divText2 = document.createElement('div')
let divBtns = document.createElement('div')
let divContentTareas = document.createElement('div')
let h1 = document.createElement('h1')
let h3 = document.createElement('h3')
let input = document.createElement('input')
let btnAdd = document.createElement('button')
let btnClear= document.createElement('button')
let prf = document.createElement('p')
let delet = document.createElement('button')//Elementos del Div tareas
let divTarea=document.createElement('div')//Elementos del Div tareas


body.appendChild(divText1)
body.appendChild(divText2)
body.appendChild(divContentTareas)
divText1.appendChild(h1)
divText2.appendChild(h3)
divText2.appendChild(input)
divText2.appendChild(divBtns)
divBtns.appendChild(btnAdd)
divBtns.appendChild(btnClear)

body.style=`font-family:courier;display:flex; flex-direction:column; align-items:center;background-image:url(./img1.jpg);background-repeat:no-repeat;background-size: cover;`
divText1.style=`display:flex; flex-direction:column; align-items:center;width:300px;height:100PX;background-color:transparent;margin-top:1%;border-radius:5px;border: 3px solid black`
divText2.style=`display:flex; flex-direction:column; align-items:center;width:303px;height:130PX;background-color:#0D2330;margin-top:1%;padding-bottom:2%;border-radius:5px;border: 3px solid #5cc3ff`
divBtns.style=`display:flex; flex-direction:arow; justify-content:space-around;width:300PX;background-color:transparent;margin-top:10%;border-radius:5px`
divContentTareas.style=`display:flex; flex-direction:column; background-color:transparent;width:300px;margin-top:1%;border-radius:5px` 

h1.innerText=`To Do - App`
h3.innerText=`Type a new To-Do`
h1.style=`font-size: 45px`
h3.style=`color:#5cc3ff`
btnAdd.innerText=`To Do!`
btnClear.innerText=`Clear`
btnAdd.style=`font-weight:600;width: 60px; background-attachment: #3de7a6;`//background-color:#3de7a6
btnClear.style=`font-weight:600;width:50px`
input.style=`text-align:center;border-radius:2px;color:white;background-color:#0F3248;outline-style: solid 1px #5cc3ff`
//#endregion
//#region Funcionalidad

//Agregar
let counter = 1
const addValue=()=>{
  
let text1 = prf.innerText = input.value
let v2= document.createElement('button')
let newDiv = document.createElement('div')
divContentTareas.append(newDiv)
newDiv.append(text1)
newDiv.append(v2)
v2.innerText=`Done!`
v2.style=`font-weight:400;background-color:#e73d3d;color:white;border:none;border-radius:5px`
newDiv.style=`padding-left:10px;padding-right:5px;font-family:verdana;height:25px; display:flex;justify-content: space-between;align-items:center; color:white;text-transform:capitalize;margin-top:1%;border: 2px solid #5cc3ff;border-radius: 2px`


//condicional para espacios
if (input.value == '' || input.value == ' ' ) {
  alert(`Por favor ingrese una tarea`)  
  return addValue
}

//Eliminar -> trabajamos dentro de F'Agregar'asi que integramos F'eliminarObj' utilizando v2 como evento target creado en F'Agregar'
const eliminarObj = ()=>{
  return event.target.parentElement.style=`display:none`
} 
v2.addEventListener('click',eliminarObj)
return counter++
}

const clearValue=()=>{
  divContentTareas.innerText=''
  input.value=''
}

//Botones agregar y limpiar
btnAdd.addEventListener("click", addValue)
btnClear.addEventListener("click", clearValue)
//#endregion