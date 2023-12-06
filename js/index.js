document.addEventListener('DOMContentLoaded', function() {
    document.querySelector(".nome_usuario").innerHTML = localStorage.getItem("usuario");
})
