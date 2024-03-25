<template>
  <nav class="navbar nav navbar-expand-lg py-3">
    <div class="container-fluid">
      <a class="navbar-brand" href="#" @click="closeMobileMenu()">Lucas Almeida</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav" @click="closeMobileMenu()">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#" @click="closeMobileMenu">{{ $t('aboutMe') }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://github.com/LucasAlmeida-jpg" target="_blank" @click="closeMobileMenu">{{ $t('github') }}</a>
          </li>
          <!-- <li class="nav-item">
            <a class="nav-link" href="#" @click="closeMobileMenu">{{ $t('contact') }}</a>
          </li> -->
          <li class="list-group-item language-switch d-flex align-items-center">
            <button @click="$i18n.locale = 'EN'; closeMobileMenu()" :class="{ active: $i18n.locale === 'EN' }">EN(US)</button>
            <button @click="$i18n.locale = 'PT'; closeMobileMenu()" :class="{ active: $i18n.locale === 'PT' }">PT(BR)</button>
          </li>
        </ul>
      </div>
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
  color: white;
  transition: color 0.3s ease-in-out;
}

.language-switch button:hover {
  color: var(--vt-bg-primary);
}

.language-switch button.active {
  font-weight: bold;
  color: var(--vt-bg-primary);
}

.wave-text {
  font-size: 2em;
  animation: wave 1.5s infinite;
  color: rgb(230, 219, 219);
  font-weight: bold;
}

.list-group-item {
  color: rgb(230, 219, 219);
  font-weight: bold;
}

.nav {
  -webkit-backdrop-filter: blur(12.5px) !important;
  backdrop-filter: blur(12.5px) !important;
  background-color: hsla(0, 0%, 100%, 0) !important;
  position: fixed !important;
  width: 100% !important;
  top: 0 !important;
  z-index: 1 !important;
}

.nav-link, a{
  color: white !important;
}

.navbar-toggler{
  background: var(--vt-bg-primary);
    border-radius: 50%;
    padding: 8px;
    margin: 0px 10px;
}

@keyframes wave {

0%,
100% {
  transform: scaleY(1);
}

50% {
  transform: scaleY(1.5);
}
}
</style>

<script>
export default {
 data(){
  return {

  }
 },
 methods: {
    toggleMobileMenu() {
      const navbar = document.querySelector('.navbar-collapse');
      navbar.classList.toggle('show');
    },
    closeMobileMenu() {
      const navbar = document.querySelector('.navbar-collapse');
      navbar.classList.remove('show');
    }
  }
}
</script>