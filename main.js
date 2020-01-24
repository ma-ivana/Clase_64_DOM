//recorrer el array
//por cada usuario, crear una card con sus datos
//manejar sistema de likes para que el clic en cada foto de usuarios, le dé likes solo a ese usuario
const gatos = [
  {
    name: "Rodolfo",
    shortDesc: "Tiene 4 años, le gusta perseguir mariposas, se lleva bien con niños y con otros gatos.",
    longDesc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.",
    img: "img/gatito1.jpg"
  },

  {
    name: "Muzzarella",
    shortDesc: "Muy dulce y mimosa. Tiene seis dedos en una pata que asegura le dan superpoderes.",
    longDesc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.",
    img: "img/gatito2.jpg"
  },

  {
    name: "Artilugia",
    shortDesc: "Muy activa y juguetona. Se lleva bien con perros. Ideal para casa con jardin amplio",
    longDesc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.",
    img: "img/gatito3.jpg"
  },

  {
    name: "Wosito",
    shortDesc: "Vivio toda su vida en la calle y todavia se asombra de cosas como estufas y escaleras.",
    longDesc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.",
    img: "img/gatito4.jpg"
  },

  // {
  //   name: "Calamardo",
  //   shortDesc: "Dicen que de noche, cuando nadie lo puede escuchar, invoca a Cthulu. Muy mimoso.",
  //   longDesc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.",
  //   img: "img/gatito5.jpg"
  // },
  
]
  const cards = document.querySelector(".containerTarjetas");
  console.log(cards);
  let tarjetasDinamicas = "";
  for (let i = 0; i < gatos.length; i++) {
    tarjetasDinamicas = tarjetasDinamicas + `
    <article class="card">
      <div class="imagenCh"> <img src="${gatos[i].img}"> </div>
      <div class="textoCh"> 
      <h4>${gatos[i].name}</h4>
      <p class="parrCh">${gatos[i].shortDesc}</p>
      <button id="info">Ver más</button>
      </div>
    </article>

    <div id="infoModal" class="modal nomostrar">
      <div class="imagenGR"> <img src="${gatos[i].img}"> </div>
        <div class="modalcontent">
          <h4 id="nombreGr">${gatos[i].name}</h4>
          <p class="parrGr">${gatos[i].longDesc}</p>
          <button id="cerrarModal">Cerrar</button>
        </div>
    </div>
    `
  }

cards.innerHTML = tarjetasDinamicas;


const modal = document.querySelectorAll("#infoModal");

const botonAbrirModal = document.querySelectorAll("#info");
const botonCerrarModal = document.querySelectorAll("#cerrarModal")

for (let i = 0; i < modal.length; i++) {
botonAbrirModal[i].onclick = () => {
  modal[i].classList.remove("nomostrar") 
}

botonCerrarModal[i].onclick = () => {
  modal[i].classList.add("nomostrar")
}

}