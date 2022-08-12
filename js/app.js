let form = document.getElementById('form-product');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    let lista = document.getElementById('list-product');
    let descripcion = document.getElementById('descripcion');
    let cantidad = document.getElementById('cantidad');
    let precio = document.getElementById('precio');
    let div = document.createElement('div');
    div.classList.add('row');
    div.classList.add('mb-1');
    div.innerHTML = ` 
    <div class="card text-center col-11""> 
    <div class="card-body"> 
    <b>Descripcion: </b>${descripcion.value} 
    <b>Cantidad: </b>${cantidad.value} 
    <b>Precio: </b>${precio.value} 
    </div> 
    </div> 
    <button class="btn btn-danger text-center col-1" name="delete"> 
    <i class="fa-solid fa-trash-can"></i> 
    </button> 
    `;
    if (descripcion.value != "" && precio.value != "" && cantidad.value != "") {
        lista.appendChild(div); mensaje('El producto ha sido agregado', 'success')
        form.reset();
    }
})
let borrar = document.querySelector("#list-product")
borrar.addEventListener("click", function (e) {
    if (e.target.name === "delete") {
        e.target.parentElement.remove();
        mensaje('El producto ha sido eliminado', 'danger')
    }
})
const mensaje = function (msj, color) {
    container = document.querySelector(".container");
    app = document.querySelector("#app");
    div = document.createElement("div");
    div.innerHTML = ` 
                    <div class="alert alert-${color} mt-5">${msj}</div> 
                    `;
    container.insertBefore(div, app);
    setTimeout(() => {
        div.remove();
    }, 300);
}