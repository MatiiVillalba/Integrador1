function validateForm() {
   
    const name = document.forms["producto"]["name"].value.trim();
    const price = document.forms["producto"]["price"].value.trim();
    const stock = document.forms["producto"]["stock"].value.trim();
    const brad = document.forms["producto"]["brad"].value.trim();
    const category = document.forms["producto"]["category"].value.trim();
    const descriptionShort = document.forms["producto"]["descriptionshort"].value.trim();
    const descriptionLong = document.forms["producto"]["description"].value.trim();
    const ageFrom = parseInt(document.forms["producto"]["age_from"].value.trim());
    const ageTo = parseInt(document.forms["producto"]["age_to"].value.trim());
    const fileInput = document.forms["producto"]["file"];

    if (name.length === 0 || name.length > 50) {
        alert("Por favor, ingrese un nombre válido (máximo 50 caracteres).");
        return false;
    }

    
    if (price <= 0 || isNaN(price)) {
        alert("Por favor, ingrese un precio válido.");
        return false;
    }

    
    if (stock <= 0 || isNaN(stock)) {
        alert("Por favor, el stock tiene que ser positivo.");
        return false;
    }

    
    if (brad.length === 0 || brad.length > 30) {
        alert("Por favor, ingrese una marca válida (máximo 30 caracteres).");
        return false;
    }

    
    if (category.length === 0 || category.length > 30) {
        alert("Por favor, ingrese una categoría válida (máximo 30 caracteres).");
        return false;
    }

    
    if (descriptionShort.length === 0 || descriptionShort.length > 20) {
        alert("Por favor, ingrese una descripción corta válida (máximo 20 caracteres).");
        return false;
    }

   
    if (descriptionLong.length === 0 || descriptionLong.length > 500) {
        alert("Por favor, ingrese una descripción larga válida (máximo 500 caracteres).");
        return false;
    }

    
    if (isNaN(ageFrom) || ageFrom < 12 || isNaN(ageTo) || ageTo > 99 || ageFrom >= ageTo) {
        alert("Por favor, ingrese un rango de edad válido (desde 12 hasta 99 años).");
        return false;
    }

    alert("Pudiste completar todos los pasos.");
    return true;
}   


