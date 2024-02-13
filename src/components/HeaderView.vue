<template>
    <nav class="d-flex align-items-center justify-content-between py-3 px-5">
      <div class="d-flex align-items-center">
        <h1 class="wave-text"><span>Lucas Almeida</span></h1>
      </div>
      <div>
        <ul class="d-flex gap-5 list-style-none">
          <li class="list-group-item">{{ $t('aboutMe') }}</li>
          <li class="list-group-item">{{ $t('habilities') }}</li>
          <li class="list-group-item">{{ $t('contact') }}</li>
          <li class="list-group-item">
            <a href="https://github.com/LucasAlmeida-jpg" target="_blank" rel="noopener noreferrer">{{ $t('github') }}</a>
          </li>
          <li class="list-group-item language-switch d-flex align-items-center">
            <button @click="$i18n.locale = 'EN'" :class="{ active: $i18n.locale === 'EN' }">EN(US)</button>
            <button @click="$i18n.locale = 'PT'" :class="{ active: $i18n.locale === 'PT' }">PT(BR)</button>
          </li>
        </ul>
      </div>
    </nav>
  </template>
  
  <style scoped>
 
  .language-switch button {
    border: none;
    background: none;
    cursor: pointer;
    font-size: 16px;
    padding: 5px;
  }
  
  .language-switch button {
  border: none;
  background: none;
  cursor: pointer;
  font-size: 13px;
  margin-top: -5px;
  color: white;
  transition: color 0.3s ease-in-out;
}

.language-switch button:hover {
  color: var( --vt-bg-primary); 
}

.language-switch button.active {
  font-weight: bold;
  color: var( --vt-bg-primary); 
}
  </style>
  
  
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
    color: rgb(230, 219, 219);
    font-weight: bold;
}

.list-group-item {
    color: rgb(230, 219, 219);
    font-weight: bold;
}

nav {
    -webkit-backdrop-filter: blur(12.5px);
    backdrop-filter: blur(12.5px);
    background-color: hsla(0, 0%, 100%, 0);
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1;
}
</style>
