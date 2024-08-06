//Probar este codigo
const btnPreguntas = Array.from({ length: 7 }, (_, i) => document.getElementById(`btnPreg${i + 1}`));
const btnGuardar = document.getElementById("btnguardar");

const nombre = document.getElementById("nombre");
const cedula = document.getElementById("cedula");
const seccion = document.getElementById("seccion");

let db = null;

function ActivaBotones() {
    btnGuardar.disabled = !(nombre.value && cedula.value && seccion.value);
}

function ActivarPreguntas() {
    guardaData();
    if (!btnGuardar.disabled) {
        btnPreguntas.forEach(btn => btn.disabled = false);
        btnGuardar.disabled = true;
    }
}

function guardaData() {
    const usuario = {
        nombre: nombre.value,
        cedula: cedula.value,
        seccion: seccion.value
    };

    const request = indexedDB.open('miBaseDeDatos', 1);

    request.onerror = event => {
        alert("Database error: " + event.target.error.name);
    };

    request.onupgradeneeded = event => {
        const db = event.target.result;
        db.createObjectStore("usuarios", { keyPath: "cedula" });
    };

    request.onsuccess = event => {
        db = event.target.result;
        const transaction = db.transaction(['usuarios'], 'readwrite');
        const objectStore = transaction.objectStore('usuarios');
        const requestGuardar = objectStore.add(usuario);

        requestGuardar.onsuccess = () => {
            console.log('Datos guardados en IndexedDB');
        };

        requestGuardar.onerror = event => {
            console.error('Error guardando datos:', event.target.errorCode);
        };
    };

    localStorage.setItem("Personal", JSON.stringify(usuario));
    [nombre, cedula, seccion].forEach(input => input.disabled = true);
}

function cargaData() {
    const dtosPersonals = JSON.parse(localStorage.getItem("Personal"));
    if (dtosPersonals) {
        nombre.value = dtosPersonals.nombre;
        cedula.value = dtosPersonals.cedula;
        seccion.value = dtosPersonals.seccion;
        btnPreguntas.forEach(btn => btn.disabled = false);
        [nombre, cedula, seccion].forEach(input => input.disabled = true);
    }
}

function abrirPagina(idBoton) {
    const pageMap = {
        btnPreg1: "pag_Ex_P1.html",
        btnPreg2: "pag_Ex_P2.html",
        btnPreg3: "pag_Ex_P3.html",
        btnPreg4: "pag_Ex_P4.html",
        btnPreg5: "pag_Ex_P5.html",
        btnPreg6: "pag_Ex_P6.html",
        btnPreg7: "pag_Ex_P7.html"
    };
    window.location.href = pageMap[idBoton];
}

function resetForm() {
    [nombre, cedula, seccion].forEach(input => {
        input.value = "";
        input.disabled = false;
    });
    btnGuardar.disabled = true;
    btnPreguntas.forEach(btn => btn.disabled = true);
    localStorage.removeItem("Personal");
    const keysToRemove = [
        "SeleccionadosP1", "SeleccionadosP2", 'mathValuesA', 'mathValuesB',
        'mathValues2A', 'mathValues2B', 'selectedValues', 'P1_Intentos1',
        'P1_Intentos2', 'P2_Intentos1', 'P2_Intentos2', 'P3_Intentos1',
        'P3_Intentos2', 'P3_Intentos3'
    ];
    keysToRemove.forEach(key => localStorage.removeItem(key));
}

nombre.addEventListener('input', ActivaBotones);
cedula.addEventListener('input', ActivaBotones);
seccion.addEventListener('change', ActivaBotones);
btnGuardar.addEventListener("click", ActivarPreguntas);

btnPreguntas.forEach(btn => {
    btn.addEventListener("click", function () {
        abrirPagina(this.id);
    });
});

btnPreg7.addEventListener("click", resetForm);

window.onload = cargaData;