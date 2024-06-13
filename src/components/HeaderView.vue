<template>
  <header class="header">
    <nav class="navbar">
      <div class="container">
        <h1 class="front-animation">
          <span v-for="(char, index) in animatedText" :key="index">{{ char }}</span>
          <span v-bind="showCursor" class="cursor">_</span>
        </h1>
        <div class="toggle" @click="toggleMenu">
          <span :class="{ 'toggle-btn': true, open: showMenu }"></span>
        </div>
        <div :class="{ 'menu': true, open: showMenu }">
          <ul :class="{ 'menu-list': true, open: showMenu }">
            <li class="nav-item" @click="toggleMenu">
              <a class="menu-link" aria-current="page" href="#" :class="{ 'menu-item': true, open: showMenu }">{{
          $t('aboutMe') }}</a>
            </li>
            <li class="nav-item">
              <a class="menu-link" href="https://github.com/LucasAlmeida-jpg" target="_blank"
                :class="{ 'menu-item': true, open: showMenu }">{{
          $t('github') }}</a>
            </li>
            <li class="nav-item">
              <a class="menu-link" href="https://www.linkedin.com/in/lucas-almeida-425b781b1/" target="_blank"
                :class="{ 'menu-item': true, open: showMenu }">Linkedin</a>
            </li>
            <li class="nav-item">
              <a class="menu-link" href="https://www.instagram.com/luccasalmm/" target="_blank"
                :class="{ 'menu-item': true, open: showMenu }">Instagram</a>
            </li>
            <li class="nav-item">
              <a class="menu-link" href="https://www.instagram.com/luccasalmm/" target="_blank"
                :class="{ 'menu-item': true, open: showMenu }">Contato (35) 9 9132-9111</a>
            </li>
            <!-- <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                <img class="translate" src="../assets/images/translate.png" alt="">
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item dropdown-item-mobile" @click="$i18n.locale = 'EN';"
                    :class="{ active: $i18n.locale === 'EN' }">EN(US)</a></li>
                <li><a class="dropdown-item dropdown-item-mobile" @click="$i18n.locale = 'PT';"
                    :class="{ active: $i18n.locale === 'PT' }">PT(BR)</a></li>
              </ul>
            </li> -->
            <li>
              <!-- <label class="switch mt-2">
                <input type="checkbox" @click="changeBackgroundColor" v-model="checked">
                <span class="slider round"></span>
              </label> -->
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false,
      menuItems: [
        { text: 'Home' },
        { text: 'About' },
        { text: 'Works' },
        { text: 'Contact' },
      ],
      checked: true,
      animatedText: '',
      fullText: '',
      currentIndex: '',
      typingSpeed: 100,
      showCursor: true


    };
  },
   mounted(){
    this.fullText = 'Front-End ' + 'Developer';
    this.typeText();
   },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
    typeText() {
      if (this.currentIndex < this.fullText.length) {
        this.animatedText += this.fullText.charAt(this.currentIndex);
        this.currentIndex++;
        setTimeout(this.typeText, this.typingSpeed);
      } else {
        this.showCursor = false;
      }
    },

    changeBackgroundColor() {
      const body = document.body;
      const textColor = this.checked.value ? 'rgb(33, 53, 71)' : '';
      const backgroundColor = this.checked.value ? 'white' : '';
      const elementsToChangeColor = document.querySelectorAll('h1, .card, .tag, a[href], .img, .translate, .dropdown-item');
      const footerBackgroundColor = this.checked.value ? 'white' : '';

      body.style.backgroundColor = backgroundColor;
      body.style.color = textColor;

      elementsToChangeColor.forEach(element => {
        element.style.color = textColor;
        if (element.classList.contains('card')) {
          element.style.backgroundColor = this.checked.value ? '#f9f9f9' : '';
        } else if (element.classList.contains('tag')) {
          element.style.border = this.checked.value ? '1px solid rgb(0, 220, 130)' : '';
          element.style.color = this.checked.value ? 'rgb(0, 220, 130)' : '';
        } else if (element.tagName.toLowerCase() === 'a') {
          element.style.color = this.checked.value ? 'rgb(33, 53, 71)' : '';
        } else if (element.className === 'img') {
          element.style.filter = this.checked.value ? 'contrast(0.5)' : '';
        } else if (element.className === 'translate') {
          element.style.filter = this.checked.value ? 'contrast(0.5)' : '';
        } else if (element.className === 'dropdown-item') {
          element.style.color = this.checked.value ? 'rgb(33, 53, 71)' : '';
        }
      });

      const footer = document.getElementById('footer');
      if (footer) {
        footer.style.backgroundColor = footerBackgroundColor;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
$color-white: #ffffff;
$color-black: #121212;
$color-dark: #212121;
$color-orange: #ff652f;

// Transition Mixin
@mixin transition-ease {
  transition: all 0.3s ease-in-out;
}

// Base Style
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;
}

body {
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  font-weight: normal;
  line-height: 1.5;
  background-color: #020420;
  color: (--vt-bg-primary);
}
.dropdown-menu{
  background-color: #020420;
}

.container {
  max-width: 75rem;
  width: 100%;
  padding: 0 1rem;
  margin: 0 auto;
}

@keyframes rotate-border {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.front-animation{
  font-size: 25px;
  margin-top: 12px;
}
.lucas_logo {
  border: 4px solid transparent;
  padding: 15px;
  border-radius: 50%;
  width: 58px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 58px;
  position: relative;
}

.lucas_logo::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  border: 6px solid rgb(0, 220, 130);
  border-radius: 50%;
  clip-path: polygon(-55% 0%, 50% 50%, 100% 100%, 100% 100%, 100% 50%, 92% 0%);
  animation: rotate-border 2s linear infinite;
  font-size: 20px;
}

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
  text-align: center;
  cursor: pointer;
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

.header {
  position: fixed;
  z-index: 2;
  width: 100%;
  padding: 1rem;
  top: 7px;

  .navbar {
    .toggle {
      position: absolute;
      width: 2rem;
      height: 1.4rem;
      top: 11ƒpx;
      right: 4rem;
      z-index: 2;
      cursor: pointer;
      color: var(--vt-bg-primary);
      @include transition-ease;

      &-btn {
        position: absolute;
        top: 0.5rem;
        right: 0;
        width: 1.6rem;
        height: 2px;
        background-color: var(--vt-bg-primary);
        @include transition-ease;

        &::before {
          content: "";
          position: absolute;
          top: -0.5rem;
          width: 2rem;
          height: 2px;
          background-color: var(--vt-bg-primary);
          @include transition-ease;
        }

        &::after {
          content: "";
          position: absolute;
          top: 0.5rem;
          width: 1.2rem;
          height: 2px;
          background-color: var(--vt-bg-primary);
          @include transition-ease;
        }

        &.open {
          transform: rotate(720deg);
          background: transparent;

          &::before {
            transform: rotate(45deg) translate(5px, 8px);
          }

          &::after {
            width: 2rem;
            transform: rotate(-45deg) translate(3px, -6px);
          }
        }
      }
    }

    .menu {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      opacity: 1;
      visibility: hidden;

      &.open {
        visibility: visible;
      }

      &-list {
        display: flex;
        flex-flow: column wrap;
        justify-content: center;
        overflow: hidden;
        list-style: none;
        list-style-type: none;
        padding-right: 1rem;
        background-color: #020420;
        color: var(--vt-bg-primary);
        transform: translateY(-100%);
        transition: all 0.3s ease-in-out;
        padding: 37px;
        border-radius: 0px 0px 46px 46px;

        transform: translateY(-100%);
        @include transition-ease;

        &.open {
          transform: translateY(0);
        }
      }

      &-item {
        transform: translateX(100vw);
        @include transition-ease;

        &.open {
          transform: translateX(0);
        }
      }

      &-link {
        display: inline-block;
        padding-bottom: 12px;
        font-size: 13px;
        font-weight: 400;
        line-height: inherit;
        color:  #00DC82;
        @include transition-ease;

        &:hover {
          color:  #00DC82;
        }
      }

      @for $i from 1 through 4 {
        .menu-list {
          color: (--vt-bg-primary);

          .menu-item:nth-child(#{$i}) {
            transition-delay: ($i * 0.1s) + 0.15s;
          }
        }
      }
    }

    .brand {
      font-family: inherit;
      font-size: 1.5rem;
      font-weight: 500;
      line-height: inherit;
      color: rgb(0, 220, 130) !important;
      text-transform: uppercase;
    }
  }

}

@media (max-width: 600px) {
  .navbar {
    .toggle {
      top: 18px !important;
      right: 2rem !important;
    }
  }
}
</style>
