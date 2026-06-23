let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#value");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");
let tooltipElement = document.querySelector("#tooltip");
let tooltipTimeout = null;

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
let newPassword = "";

sizePassword.innerHTML = sliderElement.value;

sliderElement.oninput = function() {
    sizePassword.innerHTML = this.value;
}

function generatePassword() {
    let pass = "";
    for (let i = 0, n = charset.length; i < sliderElement.value; ++i) {
        pass += charset.charAt(Math.floor(Math.random() * n));
    }

    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    newPassword = pass;
    
}

function copyPassword() {
    if (!newPassword) return;

    // store original tooltip text once
    const originalText = tooltipElement && tooltipElement.dataset.original !== undefined
        ? tooltipElement.dataset.original
        : (tooltipElement ? (tooltipElement.dataset.original = tooltipElement.textContent) && tooltipElement.textContent : 'Clique na senha para copiar 👆🏻');

    navigator.clipboard.writeText(newPassword).then(() => {
        if (!tooltipElement) return;
        if (tooltipTimeout) clearTimeout(tooltipTimeout);
        tooltipElement.textContent = "Senha copiado com sucesso 🗸";
        tooltipTimeout = setTimeout(() => {
            tooltipElement.textContent = tooltipElement.dataset.original || originalText;
            tooltipTimeout = null;
        }, 3000);
    }).catch(() => {
        if (!tooltipElement) return;
        if (tooltipTimeout) clearTimeout(tooltipTimeout);
        tooltipElement.textContent = "Falha ao copiar ⚠️";
        tooltipTimeout = setTimeout(() => {
            tooltipElement.textContent = tooltipElement.dataset.original || originalText;
            tooltipTimeout = null;
        }, 3000);
    });

}