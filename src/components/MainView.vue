<template>
  <div class="mainViewSection">
    <section class="slide-in">
      <div class="text-center">
        <h1>
          <span v-for="(char, index) in animatedText" :key="index">{{ char }}</span>
          <span v-bind="showCursor" class="cursor">_</span>
        </h1>
        <div class="d-flex justify-content-center">
          <div class="col-md-4 mt-3">
              <img class="img-thumb-user animate__animated animate__flipInY" src="../assets/images/lucas.jpeg" alt="">
            </div>
        </div>
        <div class="row">
          <div class="mt-4 container d-flex justify-content-center align-items-center">
            <p class="col-md-7 animate__animated animate__flipInY">
              {{ $t('aboutLucas') }} {{ $t('aboutLucasSub') }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container mt-5">
        <ul class="nav nav-pills my-3 d-flex justify-content-center" id="pills-tab" role="tablist">
          <li class="nav-item" role="presentation">
            <div class="tag me-2 nav-link active animate__animated animate__flipInY" id="pills-home-tab"
              data-bs-toggle="pill" data-bs-target="#pills-home" role="tab" aria-controls="pills-home"
              aria-selected="true">
              {{ $t('professionals_tag') }}</div>
          </li>
          <li class="nav-item" role="presentation">
            <div class="tag nav-link animate__animated animate__flipInY" id="pills-profile-tab" data-bs-toggle="pill"
              data-bs-target="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">{{
            $t('educational_tag') }}</div>
          </li>
        </ul>
        <div class="tab-content" id="pills-tabContent">

          <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"
            tabindex="0">
            <div class="row my-3 d-flex align-items-center">
              <div class="mt-3 text-center experience">
                <h1>{{ $t('experience_tag') }}</h1>
              </div>
              <div class="col-md-6 card animate__animated animate__flipInY">
                <div class="mb-1 d-flex align-items-center">
                  <span class="fs-5 text">Creators LLC {{ $t('developer') }} {{ $t('frontEnd') }}</span><span class="tag ms-3">Remote</span>
                </div>
                <div class="mt-3">
                  <p>{{ $t('experience') }}</p>
                  <span>(2022 - {{ $t('currently') }})</span>
                </div>
              </div>
              <div class="col-md-6 presentations animate__animated animate__flipInY"><img
                  class="img-presentation presentation img-computer" src="../assets/images/computer.svg" alt=""></div>
            </div>

            <div class="row my-3 d-flex align-items-center">
              <div class="col-md-6 presentations animate__animated animate__flipInY"><img
                  class="img-presentation presentation img-computer" src="../assets/images/19184614_6101000.svg" alt="">
              </div>
              <div class="col-md-6 card animate__animated animate__flipInY">
                <div class="mb-1 d-flex align-items-center">
                  <span class="fs-5 text">{{ $t('ste_pl') }}</span><span class="tag ms-3">Remote</span>
                </div>
                <div class="mt-3">
                  <p>{{ $t('exp_stefanini') }}</p>
                  <span> (Mar de 2021 - Abr de 2022)</span>
                </div>
              </div>
            </div>

            <div class="row my-3 d-flex align-items-center">
              <div class="col-md-6 card animate__animated animate__flipInY">
                <div class="mb-1 d-flex align-items-center">
                  <span class="fs-5 text">{{ $t('ste_pl_jr') }}</span><span class="tag ms-3">Remote</span>
                </div>
                <div class="mt-3">
                  <p>{{ $t('exp_stefanini_pl') }}</p>
                  <span> (Jan de 2020 - Fev de 2021)</span>
                </div>
              </div>
              <div class="col-md-6 presentations animate__animated animate__flipInY"><img
                  class="img-presentation img-computer" src="../assets/images/achieve.svg" alt=""></div>
            </div>

          </div>
          <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"
            tabindex="0">
            <div class="row my-3 d-flex align-items-center">
              <h1 class="mt-3 text-center experience">{{ $t('graduate') }}</h1>
              <div class="col-md-6 card animate__animated animate__flipInY">
                <span class="mt-3 fs-5 text">{{ $t('course') }}</span>
                <span class="fs-5 text">{{ $t('aboutGraduation') }}</span>
                <p class="mt-4">{{ $t('institute') }}</p>
              </div>
              <div class="col-md-6 presentations animate__animated animate__flipInY"><img
                  class="img-presentation img-mobile-none" src="../assets/images/html.svg" alt=""></div>
            </div>

            <div class="row my-3 d-flex align-items-center justify-content-center animate__animated  animate__flipInY">
              <div class="col-md-6 presentation">
                <img class="img-presentation" src="../assets/images/pc.svg" alt="">
              </div>
              <div class="col-md-6 card">
                <span class="fs-5 text">Curso</span>
                <p class="mt-3">{{ $t('conclusion') }}</p>
                <img class="w-25 rounded mt-2" src="../assets/images/callan-method.jpg" alt="">
              </div>
              <div class="col-md-6 presentation-desk">
                <img class="img-presentation" src="../assets/images/pc.svg" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <section class="skills mt-5">
    <div class="text-center">
      <h1>{{ $t('skills') }}</h1>

      <div class="row d-flex justify-content-center animate__animated animate__fadeInRight">
        <p class="mt-2">Front-End</p>
        <div class="col-auto" v-for="s in skills">
          <p class="mt-2 tag text-center ">
            {{ s }}
          </p>
        </div>
      </div>
      <div class="row mt-5 d-flex justify-content-center animate__animated animate__fadeInLeft">
        <p>{{ $t('tools') }}</p>
        <div class="col-auto" v-for="s in tools">
          <p class="mt-2 tag col-md-12 text-center ">
            {{ s }}
          </p>
        </div>
      </div>
      <div class="row mt-5 d-flex justify-content-center animate__animated animate__fadeInLeft">
        <p>{{ $t('learning') }}</p>
        <div class="col-auto" v-for="s in back">
          <p class="mt-2 tag col-md-12 text-center ">
            {{ s }}
          </p>
        </div>
      </div>
    </div>
  </section>

  <div class="mainViewSection">
    <section class="mt-5">
      <div class="text-center">
        <h1>{{ $t('contact') }}</h1>

        <div class="row d-flex justify-content-center">
          <div class="col-md-12">
            <p class="mt-2 text-center">{{ $t('getInTouch') }}<a href="mailto:lucasalmeidagouvea123@gmail.com">{{
            $t('thisEmail') }}</a>
            </p>
          </div>

          <div class="d-flex align-items-center justify-content-center social">
            <div>
              <a class="me-3" href="https://github.com/LucasAlmeida-jpg" target="_blank" rel="noopener noreferrer"><img
                  src="/src/assets/images/github.png" alt=""></a>

              <a href="https://www.linkedin.com/in/lucas-almeida-425b781b1/" target="_blank"
                rel="noopener noreferrer"><img src="/src/assets/images/linkedin.png" alt=""></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      skills: ['HTML', 'CSS', 'Javascript', 'Vue.js', 'Vite', 'NUXT (SSR)', 'Vuex', 'Fetching Data', 'Axios', 'Chart.js', 'Bootstrap', 'Tailwind'],
      tools: ['SCSS (SASS)', 'Webpack', 'I18N', 'Artisan'],
      back: ['Laravel', 'SQL', 'NUXT'],
      fullText: "",
      animatedText: "",
      currentIndex: 0,
      showCursor: true,
      typingSpeed: 100,
    }
  },
  
  mounted() {
    this.fullText = this.$t('developer') + " " + this.$t('frontEnd') + " " + this.$t('vue');
    this.typeText();
  },

  methods: {
    typeText() {
      if (this.currentIndex < this.fullText.length) {
        this.animatedText += this.fullText.charAt(this.currentIndex);
        this.currentIndex++;
        setTimeout(this.typeText, this.typingSpeed);
      } else {
        this.showCursor = false;
      }
    }
  },

}
</script>
<style scoped>
section {
  display: flex;
  align-items: center;
  justify-content: center;
}

.presentation-desk {
  display: none !important;
}

.img-thumb-user{
  border-radius: 50%;
  padding: 15px;
  filter: hue-rotate(423deg);
  object-fit: cover;
  height: 200px;
  width: 200px;
}
.img-thumb-user:hover{
  filter: hue-rotate(10deg);
  cursor: pointer;
}


.cursor {
  animation: blink 1s infinite;
  color: white !important;
}

@keyframes blink {
  0% {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

.tag {
  border: 1px solid;
  color: var(--vt-bg-primary);
  border-radius: 31px;
  transition: background-color 0.3s ease;
  cursor: pointer;
  font-size: 14px;
  padding: 0px 10px;
}

.tag:hover {
  box-shadow: 0 0 20px 1px rgba(0, 220, 130, 0.9);
}

span {
  color: var(--vt-bg-primary);
  font-weight: 500;
}

p {
  font-size: 18px;
}

.card {
  background: rgba(15 23 42);
  padding: 35px;
  height: auto;
  border-radius: 40px;
  z-index: -1;
}

.card li {
  list-style: none;
}

.card:nth-child(1) ul {
  text-align: left !important;
  list-style: lower-latin !important;
}

.if-institute {
  width: 40px;
}

.thumb-img {
  width: 40px;
  background-color: var(--vt-bg-primary);
  position: absolute;
  top: -15px;
  border-radius: 50%;
  padding: 10px;
  height: 40px;
}

.social img {
  width: 30px;
}

@media only screen and (max-width: 600px) {
  .carousel-item {
    width: 107% !important;
  }

  .card {
    min-height: 480px;
  }

  .img-presentation {
    width: 100%;
  }

  .skills {
    padding: 0px 40px;
  }

  .presentations {
    display: flex;
    justify-content: center;
  }

  .presentation {
    display: none;
  }

  .presentation-desk {
    display: block !important;
    margin-top: 30px;
  }

}
</style>
