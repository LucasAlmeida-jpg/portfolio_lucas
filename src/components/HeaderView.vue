<template>
  <nav class="navbar nav navbar-expand-lg py-3">
    <div class="container-fluid">
      <a class="navbar-brand animate__animated animate__shakeY fw-bold" href="#" @click="closeMobileMenu()">Lucas
        Almeida</a>
      <button class="navbar-toggler animate__animated animate__flipInY" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse  animate__animated animate__shakeY" id="navbarNav">
        <ul class="navbar-nav ">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#" @click="closeMobileMenu">{{ $t('aboutMe') }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://github.com/LucasAlmeida-jpg" target="_blank" @click="closeMobileMenu">{{
        $t('github') }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://www.linkedin.com/in/lucas-almeida-425b781b1/" target="_blank"
              @click="closeMobileMenu">Linkedin</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <img class="translate" src="../assets/images/translate.png" alt="">
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item dropdown-item-mobile" @click="$i18n.locale = 'EN';"
                  :class="{ active: $i18n.locale === 'EN' }">EN(US)</a></li>
              <li><a class="dropdown-item dropdown-item-mobile" @click="$i18n.locale = 'PT';"
                  :class="{ active: $i18n.locale === 'PT' }">PT(BR)</a></li>
            </ul>
          </li>
          <li>
            <label class="switch mt-2">
              <input type="checkbox" @click="changeBackgroundColor" v-model="checked">
              <span class="slider round"></span>
            </label>
          </li>
          <!-- <li class="nav-item">
            <a class="nav-link" href="#" @click="closeMobileMenu">{{ $t('contact') }}</a>
          </li> -->
          <!-- <li class="list-group-item language-switch d-flex align-items-center">
            <button @click="$i18n.locale = 'EN'; closeMobileMenu()" :class="{ active: $i18n.locale === 'EN' }">EN(US)</button>
            <button @click="$i18n.locale = 'PT'; closeMobileMenu()" :class="{ active: $i18n.locale === 'PT' }">PT(BR)</button>
          </li> -->
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

.translate {
  filter: invert(1);
  width: 20px;

}

.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 24px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 7px;
  bottom: -1px;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 16px;
  width: 16px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked+.slider {
  background-color: black;
  border: 1px solid white;
}

input:focus+.slider {
  box-shadow: 0 0 1px black;
}

input:checked+.slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

.dropdown-item.active,
.dropdown-item:active {
  background-color: var(--vt-bg-primary);
  border-radius: 40px;
  margin: 12px 0px;
}

.language-switch button:hover {
  color: var(--vt-bg-primary);
}

.language-switch button.active {
  font-weight: bold;
  color: var(--vt-bg-primary);
}

.navbar-brand {
  padding: 10px;
  border-radius: 12px;
  min-width: 123px;
}
.navbar-brand:hover{
  color: white;
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

.nav-link,
a {
  color: white;
}

.navbar-toggler {
  background: var(--vt-bg-primary);
  border-radius: 50%;
  padding: 8px;
  margin: 0px 10px;
}

.navbar-toggler {
  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;
  outline: none;
}

.icon-bar {
  display: block;
  width: 24px;
  height: 2px;
  margin: 5px auto;
  transition: all 0.2s;
  background-color: #333;
}

.icon-close {
  position: relative;
  display: block;
  width: 24px;
  height: 24px;
}

.icon-close::before,
.icon-close::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: #333;
  top: 50%;
  left: 0;
  margin-top: -1px;
  transition: all 0.2s;
}

.icon-close::before {
  transform: rotate(45deg);
}

.icon-close::after {
  transform: rotate(-45deg);
}

.is-active .icon-bar {
  background-color: transparent;
}

.is-active .icon-close::before,
.is-active .icon-close::after {
  background-color: #fff;
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
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const localFilePath = '/src/file/Profile.pdf';
    const checked = ref(true);

    const handleNavbarToggleClick = () => {
      toggleMobileMenu();
    };

    const toggleMobileMenu = () => {
      const navbar = document.querySelector('.navbar-collapse');
      navbar.classList.toggle('show');
    };

    const closeMobileMenu = () => {
      const navbar = document.querySelector('.navbar-collapse');
      navbar.classList.remove('show');
    };

    const changeBackgroundColor = () => {
      const body = document.body;
      const textColor = checked.value ? 'rgb(33, 53, 71)' : '';
      const backgroundColor = checked.value ? 'white' : '';
      const elementsToChangeColor = document.querySelectorAll('h1, .card, .tag, a[href], .img, .translate, .dropdown-item');
      const footerBackgroundColor = checked.value ? 'white' : '';

      body.style.backgroundColor = backgroundColor;
      body.style.color = textColor;

      elementsToChangeColor.forEach(element => {
        element.style.color = textColor;
        if (element.classList.contains('card')) {
          element.style.backgroundColor = checked.value ? '#f9f9f9' : '';
        } else if (element.classList.contains('tag')) {
          element.style.border = checked.value ? '1px solid rgb(0, 220, 130)' : '';
          element.style.color = checked.value ? 'rgb(0, 220, 130)' : '';
        } else if (element.tagName.toLowerCase() === 'a') {
          element.style.color = checked.value ? 'rgb(33, 53, 71)' : '';
        } else if (element.className === 'img') {
          element.style.filter = checked.value ? 'contrast(0.5)' : '';
        } else if (element.className === 'translate') {
          element.style.filter = checked.value ? 'contrast(0.5)' : '';
        } else if (element.className === 'dropdown-item') {
          element.style.color = checked.value ? 'rgb(33, 53, 71)' : '';
        }
      });

      const footer = document.getElementById('footer');
      if (footer) {
        footer.style.backgroundColor = footerBackgroundColor;
      }
    };

    onMounted(() => {
      const navbarTogglerIcon = document.querySelector('.navbar-toggler-icon');
      navbarTogglerIcon.addEventListener('click', handleNavbarToggleClick);
    });

    return {
      localFilePath,
      checked,
      toggleMobileMenu,
      closeMobileMenu,
      changeBackgroundColor
    };
  }
};
</script>