
function validateForm() {
    
    const email = document.getElementById("mail").value.trim();
    const name = document.getElementById("name").value.trim();
    const comments = document.getElementById("comments").value.trim();

    //Validaciones
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("el correo debe tener un @.");
        return false;
    }
    
       if (name.length === 0 || name.length > 50) {
        alert("Por favor, (máximo 15 caracteres).");
        return false;
    }
    if (comments.length === 0 || comments.length > 30) {
        alert("Por favor, (máximo 50 caracteres).");
        return false;
    }

   
    alert("Pudiste completar todos los pasos.");
    return true;
}

    