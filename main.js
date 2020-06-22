let text = document.getElementById("text");
let edad = document.getElementById("edad");
let form = document.getElementById("inputs");

function Persona(nombre, edad, id) {
  this.nombre = nombre;
  this.edad = edad;
  this.id = id;
}
let arreglo = [];
let i = 0;

//comprobar si tengo ya datos en local storage
if (localStorage.getItem("titulo")) {
  var obtener = JSON.parse(localStorage.getItem("titulo"));
  for (const iterator of obtener) {
    arreglo.push(iterator);
    let div_padre = document.getElementById("add-contenedor");
    let divTask = document.createElement("div");
    let persona = document.createElement("h2");
    let age = document.createElement("p");
    let btn = document.createElement("button");

    divTask.setAttribute("class", "add");
    persona.setAttribute("class", "h2-tarea");
    age.setAttribute("class", "p-tarea");
    btn.setAttribute("class", "btn");

    btn.textContent = "Eliminar";
    persona.textContent = iterator.nombre;
    age.textContent = iterator.age;
    iterator.id = i;
    if (persona.textContent != "") {
      div_padre.appendChild(divTask);
      divTask.appendChild(persona);
      divTask.appendChild(age);
      divTask.appendChild(btn);
    }

    Eliminar(divTask, btn, i);
    i = i + 1;
  }
}
// console.log(i);
form.addEventListener("submit", function (e) {
  e.preventDefault();
  var nombreUI = text.value;
  var edadUI = edad.value;
  // console.log("mi i es", i);
  if (nombreUI == "") {
    text.className = "text-error";
    text.placeholder = "espacio vacio";
  } else {
    arreglo.push(new Persona(nombreUI, edadUI, i));
    agregar(nombreUI, edadUI, i);
    i = i + 1;
  }
});

function agregar(nombreUI, edadUI, i) {
  let divs = document.getElementById("add-contenedor");
  let divTarea = document.createElement("div");
  let person = document.createElement("h2");
  let edad = document.createElement("p");
  let btn = document.createElement("button");

  btn.textContent = "Eliminar";
  // añadiendo estilos a mi div
  divTarea.setAttribute("class", "add");
  person.setAttribute("class", "h2-tarea");
  edad.setAttribute("class", "p-tarea");
  btn.setAttribute("class", "btn");

  person.textContent = nombreUI;
  edad.textContent = edadUI;
  divs.appendChild(divTarea);
  divTarea.appendChild(person);
  divTarea.appendChild(edad);
  divTarea.appendChild(btn);
  // console.log(btn);
  // console.log(arreglo);
  addTarea();
  Eliminar(divTarea, btn, i);
}
function addTarea() {
  localStorage.setItem("titulo", JSON.stringify(arreglo));
  // mostrarTarea();
}
// function mostrarTarea() {
//   var x = localStorage.getItem("titulo");
//   console.log(JSON.parse(x));

//   if(localStorage.getItem("titulo"))
// }
function Eliminar(divTarea, btn, i) {
  // console.log(arreglo);

  btn.addEventListener("click", function () {
    let padre = btn.parentNode.parentNode;
    padre.removeChild(btn.parentNode);
    for (const iterator of arreglo) {
      if (i == iterator.id) {
        // arreglo.splice(iterator.id, 1);
        iterator.nombre = "";
      }
    }
    // console.log(arreglo);
    addTarea();
  });
}
