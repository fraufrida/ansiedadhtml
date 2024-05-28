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
    let selectedColor = "#000000"; // Default color

    const colorPalette = document.getElementById("colorPalette");
    colors.forEach(color => {
        const colorDiv = document.createElement("div");
        colorDiv.className = "colorOption";
        colorDiv.style.backgroundColor = color;
        colorDiv.addEventListener("click", () => {
            selectedColor = color;
        });
        colorPalette.appendChild(colorDiv);
    });

    const canvas = document.getElementById("mandalaCanvas");
    const ctx = canvas.getContext("2d");

    // Simple mandala drawing example (a circle with multiple arcs)
    function drawMandala() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.lineWidth = 2;

        for (let i = 0; i < 12; i++) {
            ctx.beginPath();
            ctx.arc(250, 250, 200, (i * Math.PI) / 6, ((i + 1) * Math.PI) / 6);
            ctx.lineTo(250, 250);
            ctx.closePath();
            ctx.stroke();
        }

        for (let i = 0; i < 6; i++) {
            ctx.beginPath();
            ctx.arc(250, 250, 100, (i * Math.PI) / 3, ((i + 1) * Math.PI) / 3);
            ctx.lineTo(250, 250);
            ctx.closePath();
            ctx.stroke();
        }
    }

    drawMandala();

    canvas.addEventListener("click", function(event) {
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        ctx.fillStyle = selectedColor;
        ctx.beginPath();
        ctx.arc(x, y, 10, 0, 2 * Math.PI);
        ctx.fill();
    });
});
