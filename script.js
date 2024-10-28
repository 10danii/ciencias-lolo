document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");

    sections.forEach(section => {
        // Agregar un evento al hacer clic en cada sección
        section.addEventListener("click", () => {
            const sectionName = section.querySelector("h2").innerText; // Obtener el nombre de la sección
            alert(`Recuerda seguir las medidas de seguridad específicas para ${sectionName}.`);

            // Cambiar temporalmente el color de fondo de la sección al hacer clic
            section.style.backgroundColor = "#e0f7fa";
            setTimeout(() => {
                section.style.backgroundColor = "#fff"; // Volver al color original después de 1 segundo
            }, 1000);
        });

        // Agregar un efecto de resaltado al pasar el cursor por encima
        section.addEventListener("mouseover", () => {
            section.style.boxShadow = "0px 6px 12px rgba(0, 150, 136, 0.4)";
        });

        section.addEventListener("mouseleave", () => {
            section.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.2)";
        });
    });
});
