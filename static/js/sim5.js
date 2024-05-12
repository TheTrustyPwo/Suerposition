import { DoubleSlitSimulation } from "./simulations/doubleSlit.js"

const fps = 60;

const cvs = document.querySelector('canvas');
const c = cvs.getContext('2d');
const wavelengthInput = document.getElementById("wavelengthInput");
const slitWidthInput = document.getElementById("slitWidthInput");
const slitSeparationInput = document.getElementById("slitSeparationInput");

const simulation = new DoubleSlitSimulation(cvs, c)
const animate = () => {
    simulation.update();

    setTimeout(() => {
        requestAnimationFrame(animate);
    }, 1000 / fps);
}

wavelengthInput.oninput = () => {
    document.getElementById("wavelengthValue").innerText = wavelengthInput.value;
    simulation.setWavelength(wavelengthInput.value);
}

slitWidthInput.oninput = () => {
    document.getElementById("slitWidthValue").innerText = slitWidthInput.value;
    simulation.setSlitWidth(slitWidthInput.value * 1000);
}

slitSeparationInput.oninput = () => {
    document.getElementById("slitSeparationValue").innerText = slitSeparationInput.value;
    simulation.setSlitSeparation(slitSeparationInput.value * 1000);
}


animate()