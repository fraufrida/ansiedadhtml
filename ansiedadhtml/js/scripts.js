/*!
* Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

document.addEventListener("DOMContentLoaded", function() {
    const colors = ["#FF5733", "#33FF57", "#3357FF", "#F1C40F", "#9B59B6", "#E74C3C", "#1ABC9C"];
    let selectedColor = "#000000"; // Color por defecto

    const colorPalette = document.getElementById("colorPalette");
    colors.forEach(color => {
        const colorDiv = document.createElement("div");
        colorDiv.className = "colorOption";
        colorDiv.style.backgroundColor = color;
        colorDiv.addEventListener("click", () => {
            selectedColor = color;
            drawMandala();
        });
        colorPalette.appendChild(colorDiv);
    });

    const canvas = document.getElementById("mandalaCanvas");
    const ctx = canvas.getContext("2d");

    let currentMandala = 'mandala1'; // Forma por defecto

    // Función para dibujar un mandala simétrico
    function drawMandala() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        switch (currentMandala) {
            case 'mandala1':
                drawMandala1(ctx);
                break;
            case 'mandala2':
                drawMandala2(ctx);
                break;
            case 'mandala3':
                drawMandala3(ctx);
                break;
            case 'mandala4':
                drawMandala4(ctx);
                break;
            default:
                drawMandala1(ctx); // Forma por defecto
                break;
        }
    }

    // Funciones para dibujar diferentes mandalas
    function drawMandala1(ctx) {
        const centerX = ctx.canvas.width / 2;
        const centerY = ctx.canvas.height / 2;
        const numLines = 12;
        const radius = 200;
        const angleIncrement = (2 * Math.PI) / numLines;

        ctx.strokeStyle = selectedColor; // Aplica el color seleccionado al trazado
        ctx.lineWidth = 2;

        for (let i = 0; i < numLines; i++) {
            const angle = i * angleIncrement;
            const x1 = centerX + radius * Math.cos(angle);
            const y1 = centerY + radius * Math.sin(angle);
            const x2 = centerX + radius * Math.cos(2 * angle);
            const y2 = centerY + radius * Math.sin(2 * angle);

            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.stroke();
        }
    }

    function drawMandala2(ctx) {
        const centerX = ctx.canvas.width / 2;
        const centerY = ctx.canvas.height / 2;
        const numLines = 16;
        const radius = 200;
        const angleIncrement = (2 * Math.PI) / numLines;

        ctx.strokeStyle = selectedColor; // Aplica el color seleccionado al trazado
        ctx.lineWidth = 2;

        for (let i = 0; i < numLines; i++) {
            const angle = i * angleIncrement;
            const x1 = centerX + radius * Math.cos(angle);
            const y1 = centerY + radius * Math.sin(angle);
            const x2 = centerX + radius * Math.cos(4 * angle);
            const y2 = centerY + radius * Math.sin(4 * angle);

            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.stroke();
        }
    }

    function drawMandala3(ctx) {
        const centerX = ctx.canvas.width / 2;
        const centerY = ctx.canvas.height / 2;
        const numLines = 24;
        const radius = 200;
        const angleIncrement = (2 * Math.PI) / numLines;

        ctx.strokeStyle = selectedColor; // Aplica el color seleccionado al trazado
        ctx.lineWidth = 2;

        for (let i = 0; i < numLines; i++) {
            const angle = i * angleIncrement;
            const x1 = centerX + radius * Math.cos(angle);
            const y1 = centerY + radius * Math.sin(angle);
            const x2 = centerX + radius * Math.cos(3 * angle);
            const y2 = centerY + radius * Math.sin(3 * angle);

            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.stroke();
        }
    }

    function drawMandala4(ctx) {
        const centerX = ctx.canvas.width / 2;
        const centerY = ctx.canvas.height / 2;
        const numLines = 36;
        const radius = 200;
        const angleIncrement = (2 * Math.PI) / numLines;

        ctx.strokeStyle = selectedColor; // Aplica el color seleccionado al trazado
        ctx.lineWidth = 2;

        for (let i = 0; i < numLines; i++) {
            const angle = i * angleIncrement;
            const x1 = centerX + radius * Math.cos(angle);
            const y1 = centerY + radius * Math.sin(angle);
            const x2 = centerX + radius * Math.cos(5 * angle);
            const y2 = centerY + radius * Math.sin(5 * angle);

            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.stroke();
        }
    }

    // Event listener para cambiar el tipo de mandala al hacer clic en un botón
    document.getElementById('mandala1Button').addEventListener('click', () => changeMandala('mandala1'));
    document.getElementById('mandala2Button').addEventListener('click', () => changeMandala('mandala2'));
    document.getElementById('mandala3Button').addEventListener('click', () => changeMandala('mandala3'));
    document.getElementById('mandala4Button').addEventListener('click', () => changeMandala('mandala4'));

    // Función para cambiar el tipo de mandala y redibujar
    function changeMandala(shape) {
        currentMandala = shape;
        drawMandala();
    }

    // Llama a la función inicial para dibujar el mandala por defecto
    drawMandala();
});

