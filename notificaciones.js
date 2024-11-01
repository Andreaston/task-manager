function mostrarAlerta(mensaje) {
    alert(mensaje);
}

// Lógica para verificar si una tarea está a punto de vencer
function verificarTareas() {
    // Ejemplo: una lista de tareas con fechas de vencimiento
    const tareas = [
        { nombre: "Tarea 1", vencimiento: new Date("2024-11-01T10:00:00") },
        { nombre: "Tarea 2", vencimiento: new Date("2024-11-02T15:00:00") }
    ];

    const ahora = new Date();
    
    tareas.forEach(tarea => {
        const tiempoRestante = tarea.vencimiento - ahora;
        if (tiempoRestante > 0 && tiempoRestante < 24 * 60 * 60 * 1000) {
            // Si la tarea vence en menos de 24 horas, muestra una notificación
            mostrarNotificacion(`La tarea "${tarea.nombre}" está a punto de vencer.`);
        }
    });
}

// Llama a la función para verificar tareas cuando la página se carga
window.onload = verificarTareas;