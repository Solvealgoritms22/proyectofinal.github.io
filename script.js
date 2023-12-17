document.addEventListener("DOMContentLoaded", function() {
    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            const menu = document.getElementById("menuDinamico");
            data.forEach(item => {
                const link = document.createElement("a");
                link.href = item.link_target;
                link.innerHTML = `<i class="${item.icon}" style="padding-right: 10px;"></i> ${item.title}`;
                menu.appendChild(link);
            });
        })
        .catch(error => console.error("Error al cargar el menú:", error));
});
