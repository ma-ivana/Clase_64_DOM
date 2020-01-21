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
      <button>Ver más</button>
      </div>
    </article>
    `
  }

cards.innerHTML = tarjetasDinamicas;

  // <div class="imagen"> <img src="${usuarios[i].foto}"> </div>
  //       <div class="info">
  //         <h4>${usuarios[i].nombre}</h4>
  //         <p id="descripcion">${usuarios[i].descripcion}</p>
  //         <p><i class="fa fa-heart"></i><span class="likes"> 0</span> likes</p>
  //       </div>
  // cards.innerHTML = tarjetasDinamicas;
  // const imagenes = document.getElementsByClassName("imagen");
  // const corazones = document.querySelectorAll(".fa.fa-heart");
  // const likes = document.getElementsByClassName("likes");
  // for (let i = 0; i < imagenes.length; i++) {
  //   imagenes[i].onclick = () => {
  //   corazones[i].classList.add("colorHeart");
  //   let cantidadDeLikes = Number(likes[i].textContent);
  //   cantidadDeLikes++;
  //   likes[i].textContent = cantidadDeLikes;
  // }
  // corazones[i].onclick = () => {
  //   if (likes[i].textContent > "0") {
  //   corazones[i].classList.remove("colorHeart");
  //   let cantidadDeLikes = Number(likes[i].textContent);
  //   cantidadDeLikes--;
  //   likes[i].textContent = cantidadDeLikes;
  //   }
  //   if (likes[i].textContent === "0") {
  //     corazones[i].classList.remove("colorHeart")
  //   } else {
  //     corazones[i].classList.add("colorHeart")
  //   }
  // }
  // }