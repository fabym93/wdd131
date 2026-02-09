// form.js

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // 1. Update current year in the footer
    const yearSpan = document.getElementById("currentyear");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 2. Update last modified date
    const lastModElement = document.getElementById("lastModified");
    if (lastModElement) {
        // Simple format (like you originally had)
        lastModElement.textContent = `Last Modified: ${document.lastModified}`;

        // Nicer formatted version in Spanish (uncomment if you prefer):
        // const date = new Date(document.lastModified);
        // lastModElement.textContent = `Última modificación: ${date.toLocaleDateString('es-AR')} ${date.toLocaleTimeString('es-AR')}`;
    }

    // 3. Populate the product dropdown
    const products = [
        { id: "fc-1888", name: "Flux capacitor",    averagerating: 4.5 },
        { id: "fc-2050", name: "Power laces",       averagerating: 4.7 },
        { id: "fs-1987", name: "Time circuits",     averagerating: 3.5 },
        { id: "ac-2000", name: "Low voltage reactor", averagerating: 3.9 },
        { id: "jj-1969", name: "Warp Equalizer",    averagerating: 5.0 }
    ];

    const productSelect = document.getElementById("product");
    if (productSelect) {
        products.forEach(product => {
            const option = document.createElement("option");
            option.value = product.id;
            option.textContent = product.name;
            productSelect.appendChild(option);
        });
    }

    // 4. Review submission counter 
    const reviewCountElement = document.getElementById("reviewCount");
    if (reviewCountElement) {
        let count = Number(localStorage.getItem("reviewCount")) || 0;
        count++;
        localStorage.setItem("reviewCount", count);
        reviewCountElement.textContent = count;
    }
});