class Modelo{
  constructor(url){
      this.url = url;
  }

  async obtenerData(){
      const response = await fetch(this.url);
      const data = await response.json();
      return data;
  }
}

class Vista{
  constructor(){
      this.lista = document.getElementById('clothesList');
  }
}

class Controlador {
  constructor(modelo, vista){
      this.modelo = modelo;
      this.vista = vista;

      //this.vista.lista.innerHTML = "";

      this.modelo.obtenerData().then(data => {
          for(const item of data){
              const elemtoLista = document.createElement('li');
              elemtoLista.classList.add('producto');

              const image = document.createElement('img');
              image.src = item.image;
              elemtoLista.appendChild(image);

              const description = document.createElement('p');
              description.textContent = item.description;
              elemtoLista.appendChild(description);

              const category = document.createElement('span');
              category.textContent = "Categoria: "+item.category;
              elemtoLista.appendChild(category);

              this.vista.lista.appendChild(elemtoLista);
          }
      });
  }
}

const modelo = new Modelo('https://fakestoreapi.com/products');
const vista = new Vista();
const controlador = new Controlador(modelo, vista);