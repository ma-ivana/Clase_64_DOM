const gatos = [
  {
    name: "Rodolfo",
    shortDesc: "Tiene 4 años, le gusta perseguir mariposas, se lleva bien con niños y con otros gatos.",
    longDesc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.",
    img: "img/gatito1.jpg",
    pelaje: ["naranja", "blanco", "gris", "rayado"],
    sexo: "macho"
  },

  {
    name: "Muzzarella",
    shortDesc: "Muy dulce y mimosa. Tiene seis dedos en una pata que asegura le dan superpoderes.",
    longDesc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.",
    img: "img/gatito2.jpg",
    pelaje: ["blanco"],
    sexo: "hembra"
  },

  {
    name: "Artilugia",
    shortDesc: "Muy activa y juguetona. Se lleva bien con perros. Ideal para casa con jardin amplio",
    longDesc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.",
    img: "img/gatito3.jpg",
    pelaje: ["blanco", "gris", "rayado"],
    sexo: "hembra"
  },

  {
    name: "Wosito",
    shortDesc: "Vivio toda su vida en la calle y todavia se asombra de cosas como estufas y escaleras.",
    longDesc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.",
    img: "img/gatito4.jpg",
    pelaje: ["naranja", "blanco", "negro", "rayado"],
    sexo: "macho"
  },

  {
    name: "Calamardo",
    shortDesc: "Dicen que de noche, cuando nadie lo puede escuchar, invoca a Cthulu. Muy mimoso.",
    longDesc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.",
    img: "img/gatito5.jpeg",
    pelaje: ["negro"],
    sexo: "macho"
  }
]




forms = document.querySelector('form');



forms.onsubmit = e => {
  e.preventDefault();
  console.log("aqui");

  // ----------- muestra el pelaje del gato elegido

  const checkboxes = document.querySelectorAll("input[type='checkbox']");
  let pelajeElegido = [];
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      pelajeElegido.push(checkboxes[i].value)
    }
  };

     

  const arrayPorPelaje = gatos.filter(gato => gato.pelaje.includes(...pelajeElegido)); // el método .includes da true o false según esté incluido el parámetro indicado entre paréntesis en el array evaluado, en este caso "gatos". pelajeElegido es el array que viene de lo que el usuario selecciona en el formulario. Como es un array, para usarlo como argumentos entre los paréntesis de .includes, se usa SPREAD, que se escribe con tres puntos delante del nombre del array, en este caso pelajeElegido.
  console.log("dentro del filter de pelaje");
  console.log(arrayPorPelaje);

  

  if (!pelajeElegido.length) {
    alert(`Por favor seleccioná una opción`)
  } else if (pelajeElegido.length === 1) {
    console.log(`Elegiste la opción ${pelajeElegido[0]}`)
  } else {
    console.log(`Elegiste las opciones ${pelajeElegido.join(", ")}`)
  }

  // ----------- muestra el sexo del gato elegido

  const radios = document.querySelectorAll("input[type='radio']");
  let sexoElegido = "";

  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      sexoElegido = radios[i].value;
    }
  }

  console.log(`El sexo elegido es ${sexoElegido}`);

  const arrayPorPelajeySexo = arrayPorPelaje.filter(gato => gato.sexo.includes(sexoElegido));
  console.log("dentro de filtro pelaje y sexo");
  console.log(arrayPorPelajeySexo);

  
  // ----------- muestra el nombre de usuario ingresado
  const nombreEscrito = document.getElementById("username");
  console.log(`El nombre del usuario es ${nombreEscrito.value}`);

  // ----------- muestra el teléfono ingresado
  const telefonoeEscrito = document.getElementById("telefono");
  console.log(`El teléfono del usuario es ${telefonoeEscrito.value}`);




// ----------- filtra por pelaje
const cards = document.querySelector(".containerTarjetas");

cards.innerHTML = '';

tarjetasDinamicas = '';






const gatosImpresos = arrayPorPelajeySexo.forEach (gato => {

    tarjetasDinamicas += `
     <article class="card">
       <div class="imagenCh"> <img src="${gato.img}"> </div>
       <div class="textoCh"> 
       <h4>${gato.name}</h4>
       <p class="parrCh">${gato.shortDesc}</p>
       <button id="info">Ver más</button>
       </div>
     </article>

     <div id="infoModal" class="modal nomostrar">
      <div class="imagenGR"> <img src="${gato.img}"> </div>
         <div class="modalcontent">
           <h4 id="nombreGr">${gato.name}</h4>
           <p class="parrGr">${gato.longDesc}</p>
           <button id="cerrarModal">Cerrar</button>
         </div>
     </div>
     `
   });

   cards.innerHTML = tarjetasDinamicas;



const modal = document.querySelectorAll("#infoModal");

const botonAbrirModal = document.querySelectorAll("#info");
const botonCerrarModal = document.querySelectorAll("#cerrarModal");

for (let i = 0; i < modal.length; i++) {
  botonAbrirModal[i].onclick = () => {
    modal[i].classList.remove("nomostrar")
  }

  botonCerrarModal[i].onclick = () => {
    modal[i].classList.add("nomostrar")
  }

};

}