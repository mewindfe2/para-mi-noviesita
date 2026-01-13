body {
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #fce4ec; /* Rosa suave */
    font-family: 'Arial', sans-serif;
    touch-action: manipulation; /* Mejora el toque en celular */
}

#figura {
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 80px; 
    cursor: pointer;
    z-index: 100;
    user-select: none;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s ease;
}

#letra-l {
    position: absolute;
    font-size: 35px;
    color: white;
    font-weight: bold;
}

#instruccion {
    position: absolute;
    top: 10%;
    width: 100%;
    text-align: center;
    color: #ad1457;
    font-weight: bold;
    font-size: 1.2rem;
    padding: 0 10px;
}

#suelo {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 40px;
    background-color: #8d6e63;
    z-index: 5;
}

#canvasArbol {
    position: absolute;
    bottom: 40px;
    left: 0;
    display: block;
}

.corazon-lluvia {
    position: absolute;
    color: #e91e63;
    pointer-events: none;
    z-index: 1;
}
