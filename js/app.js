let form = document.getElementById('form-product');
form.addEventListener('submit', function(e){
    e.preventDefault();
    let lista = document.getElementById('list-product');
    let descripcion = document.getElementById('descripcion');
    let cantidad = document.getElementById('cantidad');
    let precio = document.getElementById('precio');

    let div = document.createElement('div');
    div.innerHTML = `
    <div class="card text-center ">
    <div class="card-body cols-11">
        <b>Descripcion: </b>${descripcion.value}
        <b>Cantidad: </b>${cantidad.value}
        <b>Precio: </b>${precio.value}
        
    </div>
    <div class="col-1">
        <a href="" 
        class="btn btn-danger"
        name="delete">
        Borrar
        </a>
    </div>
    
</div>
    
    
    `;
    lista.appendChild(div);

})