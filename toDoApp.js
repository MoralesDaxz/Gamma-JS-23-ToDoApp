let body = document.querySelector('body')
let div1 = document.createElement('div')
let div2 = document.createElement('div')
let div3 = document.createElement('div')
let div4 = document.createElement('div')
let h1 = document.createElement('h1')
let h3 = document.createElement('h3')
let input = document.createElement('input')
let btnAdd = document.createElement('button')
let btnClear= document.createElement('button')
let prf = document.createElement('p')
let delet = document.createElement('button')//
let divP=document.createElement('div')//
body.appendChild(div1)
body.appendChild(div2)
body.appendChild(div4)
div1.appendChild(h1)
div2.appendChild(h3)
div2.appendChild(input)
div2.appendChild(div3)
div3.appendChild(btnAdd)
div3.appendChild(btnClear)

body.style=`display:flex; flex-direction:column; align-items:center;`
div1.style=`display:flex; flex-direction:column; align-items:center;width:200PX;height:100PX;background-color:#6AA794;margin-top:1%`
div2.style=`display:flex; flex-direction:column; align-items:center;width:300PX;height:100PX;background-color:#6A7B76;margin-top:1%`
div3.style=`display:flex; flex-direction:arow; justify-content:center;gap:20px;width:300PX;background-color:#6A7B76;margin-top:1%`
div4.style=`display:flex; flex-direction:column;background-color:transparent;margin-top:1%;` //#6AA794

h1.innerText=`To Do-App`
h3.innerText=`Type a new To-Do`
btnAdd.innerText=`Add`
btnClear.innerText=`Clear`


const addValue=()=>{
let v1= prf.innerText=input.value
let v2= document.createElement('button')
let newDiv = document.createElement('div')
v2.innerText=`Delete`
div4.append(newDiv)
newDiv.append(v2)
newDiv.append(v1)
newDiv.style=`display:flex;gap:20px;margin-top:1%`
return `${v1} ${v2}`
}
const clearValue=()=>{
  
}

btnAdd.addEventListener("click", addValue)



//---------------------------------------------
/* 
let totalCoste = 0;
const calcularCoste = (nNight, city, rentalDays) => {
  totalCoste = costeHotel(nNight) + costeAvion(city, nNight) + costeCoche(rentalDays);
  return totalCoste;
};

console.log(calcularCoste(5, "Valencia", 5));
objeto.addEvenListener("event", () => {
  h1.innerText = `Coste: ${calcularCoste(a, b, c)} €`;});

 */


//------------------------------------






const copyElement = (event) => {
    // funcion siempre (x) sera el target del evento en este caso btns[]
    let show = document.createElement('li')
    ul1.appendChild(show); //ul acepta show como hijo
    show.innerText = event.target.previousElementSibling.innerText//copiamos el contenido del elemento previo al evento 'button'
}



/* 
let contentUl = document.getElementById('ejercicio-5')
let ul1 = contentUl.querySelector('ul')
let contentPrfs = contentUl.getElementsByTagName('p')
let btns4 = Array.from(contentUl.getElementsByTagName('button'));

const copyElement = (event) => {
    // funcion siempre (x) sera el target del evento en este caso btns[]
    let show = document.createElement('li')
    ul1.appendChild(show); //ul acepta show como hijo
    show.innerText = event.target.previousElementSibling.innerText//copiamos el contenido del elemento previo al evento 'button'
   
}
btns4.forEach(btn=>btn.addEventListener('click', copyElement))
*/