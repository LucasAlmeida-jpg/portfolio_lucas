

<template>
    <nav class="d-flex align-items-center justify-content-between py-3 px-5">
        <div class="d-flex align-items-center">
            <h1 class="wave-text">Lucas Almeida</h1>
        </div>
        <div>
            <ul class="d-flex gap-5 list-style-none">
                <li class="list-group-item">Sobre Mim</li>
                <li class="list-group-item">Habilidades</li>
                <li class="list-group-item">Contato</li>
                <li class="list-group-item"><a href="https://github.com/LucasAlmeida-jpg" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            </ul>
        </div>
    </nav>  
</template>
  
<style>
@keyframes wave {

    0%,
    100% {
        transform: scaleY(1);
    }

    50% {
        transform: scaleY(1.5);
    }
}

.wave-text {
    font-size: 2em;
    /* animation: wave 1.5s infinite; */
    color: rgb(230, 219, 219);font-weight: bold;
}

.list-group-item {
    color: rgb(230, 219, 219);
    font-weight: bold;
}

nav {
    -webkit-backdrop-filter: blur(12.5px);
    backdrop-filter: blur(12.5px);
    background-color: hsla(0,0%,100%,0);
    position: fixed;
    width: 100%;
    top: 0;   
    z-index: 1;
}

</style>
