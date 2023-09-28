window.onload = function () {
    const formulario = document.getElementById("formulario");
    const nombreInput = document.getElementById("nombre");
    const apellidoInput = document.getElementById("apellido");
    const edadInput = document.getElementById("edad");
    const resultadoDiv = document.getElementById("resultado");
    const nombreResultado = document.getElementById("nombreResultado");
    const apellidoResultado = document.getElementById("apellidoResultado");
    const edadResultado = document.getElementById("edadResultado");

    const tituloFormulario = document.createElement("h1");
    tituloFormulario.textContent = "Formulario";
    tituloFormulario.id = "titulo";

    document.body.insertBefore(tituloFormulario, formulario);

    formulario.addEventListener("submit", function (e) {
        e.preventDefault();

        const nombre = nombreInput.value;
        const apellido = apellidoInput.value;
        const edad = edadInput.value;

 
        alert("Se ha enviado el formulario");

   
        nombreResultado.textContent = nombre;
        apellidoResultado.textContent = apellido;
        edadResultado.textContent = edad;

        resultadoDiv.style.display = "block"; 
    });
};

