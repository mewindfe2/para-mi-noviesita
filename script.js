const canvas = document.getElementById('canvasArbol');
const ctx = canvas.getContext('2d');
const musica = document.getElementById('musica');
const figura = document.getElementById('figura');

// Ajustar el canvas al tamaño real del celular o PC
function ajustarPantalla() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - 40;
}
window.addEventListener('resize', ajustarPantalla);
ajustarPantalla();

function iniciarCaida() {
    // 1. Reproducir música
    musica.play().catch(e => console.log("Error música:", e));

    // 2. Mover el corazón hacia abajo
    figura.style.top = (window.innerHeight - 80) + 'px';
    document.getElementById('instruccion').style.display = 'none';

    // 3. Iniciar lluvia y árbol tras un pequeño delay
    setTimeout(() => {
        iniciarLluvia();
        dibujarArbol(canvas.width / 2, canvas.height, -90, 10, 10);
    }, 1000);
}

function iniciarLluvia() {
    setInterval(() => {
        const c = document.createElement('div');
        c.innerHTML = '❤️';
        c.className = 'corazon-lluvia';
        c.style.left = Math.random() * 100 + 'vw';
        c.style.fontSize = Math.random() * 20 + 10 + 'px';
        c.style.animation = `caida ${Math.random() * 2 + 3}s linear forwards`;
        document.body.appendChild(c);
        setTimeout(() => c.remove(), 5000);
    }, 300);
}

// Función simple para dibujar el árbol
function dibujarArbol(x, y, angulo, lineas, grosor) {
    if (lineas === 0) return;

    const x2 = x + Math.cos(angulo * Math.PI / 180) * lineas * (window.innerWidth < 600 ? 7 : 12);
    const y2 = y + Math.sin(angulo * Math.PI / 180) * lineas * (window.innerWidth < 600 ? 7 : 12);

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = lineas < 3 ? '#ff80ab' : '#5d4037';
    ctx.lineWidth = grosor;
    ctx.stroke();

    setTimeout(() => {
        dibujarArbol(x2, y2, angulo - 20, lineas - 1, grosor * 0.8);
        dibujarArbol(x2, y2, angulo + 20, lineas - 1, grosor * 0.8);
    }, 100);
}

// Agregar estilo de animación para la lluvia
const style = document.createElement('style');
style.innerHTML = `
@keyframes caida {
    0% { transform: translateY(-10vh); }
    100% { transform: translateY(110vh); }
}`;
document.head.appendChild(style);
