<template>
  <div class="mainViewSection mb-5">
    <section class="slide-in">
     <AnimationView />
      <div class="text-center">
        <h1>
          <span v-for="(char, index) in animatedText" :key="index">{{ char }}</span>
          <span v-bind="showCursor" class="cursor">_</span>
        </h1>
        <div class="d-flex justify-content-center">
          <div class="col-md-4 mt-3">
              <img class="img-thumb-user" src="../assets/images/lucas.jpeg" alt="">
            </div>
        </div>
        <div  class="row">
          <div class="mt-4 container d-flex justify-content-center align-items-center">
            <p class="col-md-7 card">
              {{ $t('aboutLucas') }} {{ $t('aboutLucasSub') }}
            </p>
          </div>
        </div>
        <transition name="move">
      <img v-if="showArrow" class="mt-5 arrow" src="../assets/images/arrow-donw.png" alt="">
    </transition>
      </div>
    </section>

    <section>
      <div class="container mt-5" data-aos="fade-up">
        <ul class="nav nav-pills my-3 d-flex justify-content-center" id="pills-tab" role="tablist">
          <li class="nav-item aos-init" role="presentation">
            <div class="tag me-2 nav-link active" id="pills-home-tab"
              data-bs-toggle="pill" data-bs-target="#pills-home" role="tab" aria-controls="pills-home"
              aria-selected="true">
              {{ $t('professionals_tag') }}</div>
          </li>
          <li class="nav-item" role="presentation">
            <div class="tag nav-link" id="pills-profile-tab" data-bs-toggle="pill"
              data-bs-target="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">{{
            $t('educational_tag') }}</div>
          </li>
        </ul>
        
        <div class="tab-content" id="pills-tabContent">
          <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"
            tabindex="0">
            <div class="row my-3 d-flex align-items-center">
              <div class="mt-3 text-center experience" data-aos="fade-left" data-aos-offset="200">
                <h1>{{ $t('experience_tag') }}</h1>
              </div>
             
              <div class="col-md-6 card" data-aos="fade-left" data-aos-offset="200">                
                <div class="mb-1 d-flex align-items-center">
                  <span class="fs-5 text">Creators LLC {{ $t('developer') }} {{ $t('frontEnd') }}</span><span class="tag ms-3">Remote</span> 
                </div>
                <div class="mt-3">
                  <p>{{ $t('experience') }} <transition name="move"><span class="role" @click="changeState">{{ seeMore }}</span></transition></p>
                  <transition name="fade">
                    <div class="mt-3 r" v-show="showDetails" @click.stop>
                      <p cl>{{ $t('experience') }}</p> 
                      <p class="role">
                        A Creators é uma empresa que potencializa os resultados de marcas e creators através da aplicação de tecnologia, análise de dados e expertise em marketing de influência.

                        Na minha posição na <span>Creators.LLC</span>, atuo como Full-Stack, com foco predominante no desenvolvimento Front-End. Tenho experiência significativa em aprimorar produtos web, utilizando uma variedade de ferramentas e tecnologias, tais como:
                        <ul class="mt-3">
                          <li>Desenvolvimento de interfaces dinâmicas com o framework Vue.js.</li>
                          <li>Implementação de design responsivo utilizando Bootstrap.</li>
                          <li>Integração fluida com APIs para garantir uma experiência de usuário contínua.</li>
                          <li>Estilização avançada utilizando SCSS para alcançar um design atraente e coeso.</li>
                          <li>Utilização do Vuex para um eficiente gerenciamento de estado da aplicação.</li>
                          <li>Criação e manutenção de dashboards dinâmicos utilizando chart.js, enfatizando a visualização de dados de forma clara e informativa.</li>
                          <li>Controle de versionamento de código utilizando Git/GitHub para garantir a colaboração eficaz e o gerenciamento do código-fonte de forma organizada e segura.</li>
                          <li>Manutenção e Criação de API Rest usando Laravel</li>
                        </ul>
                        Essas habilidades e experiências me capacitam a contribuir de forma significativa para o sucesso dos projetos na Creators.LLC, garantindo produtos de alta qualidade e desempenho excepcional.
                      </p>
                    </div>
                  </transition>
                  <span>(2022 - {{ $t('currently') }})</span>
                </div>
              </div>
              
              <div class="col-md-6 presentations" data-aos="fade-right" data-aos-offset="200"><img
                  class="img-presentation presentation img-computer" src="../assets/images/computer.svg" alt=""> </div>
            </div>

            <div class="row my-3 d-flex align-items-center">
              <div class="col-md-6 presentations" data-aos="fade-right" data-aos-offset="200"><img
                  class="img-presentation presentation img-computer" src="../assets/images/html.svg" alt="">
              </div>
              <div class="col-md-6 card" data-aos="fade-left" data-aos-offset="200">
                <div class="mb-1 d-flex align-items-center">
                  <span class="fs-5 text">{{ $t('ste_pl') }}</span><span class="tag ms-3">Remote</span>
                </div>
                <div class="mt-3">
                  <p>{{ $t('exp_stefanini') }}</p>
                  <span> (Mar de 2021 - Abr de 2022)</span>
                </div>
              </div>
            </div>

            <div class="row my-3 d-flex align-items-center aos-init">
              <div class="col-md-6 card" data-aos="fade-left" data-aos-offset="200">
                <div class="mb-1 d-flex align-items-center">
                  <span class="fs-5 text">{{ $t('ste_pl_jr') }}</span><span class="tag ms-3">Remote</span>
                </div>
                <div class="mt-3">
                  <p>{{ $t('exp_stefanini_pl') }}</p>
                  <span> (Jan de 2020 - Fev de 2021)</span>
                </div>
              </div>
              <div class="col-md-6 presentations" data-aos="fade-right" data-aos-offset="200"><img
                  class="img-presentation img-computer" src="../assets/images/achieve.svg" alt=""></div>
            </div>

          </div>
          <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"
            tabindex="0">
            <div class="row my-3 d-flex align-items-center aos-init">
              <h1 class="mt-3 text-center experience">{{ $t('graduate') }}</h1>
              <div class="col-md-6 card" data-aos="fade-right" data-aos-offset="200">
                <span class="mt-3 fs-5 text">{{ $t('course') }}</span>
                <span class="fs-5 text">{{ $t('aboutGraduation') }}</span>
                <p class="mt-4">{{ $t('institute') }}</p>
              </div>
              <div class="col-md-6 presentations" data-aos="fade-left" data-aos-offset="200"><img
                  class="img-presentation img-mobile-none" src="../assets/images/19184614_6101000.svg" alt=""></div>
            </div>

            <div class="row my-3 d-flex align-items-center justify-content-center">
              <div class="col-md-6 presentation"  data-aos="fade-right" data-aos-offset="200">
                <img class="img-presentation" src="../assets/images/pc.svg" alt="">
              </div>
              <div class="col-md-6 card" data-aos="fade-left" data-aos-offset="200">
                <span class="fs-5 text">Curso</span>
                <p class="mt-3">{{ $t('conclusion') }}</p>
                <img class="w-25 rounded mt-2" src="../assets/images/callan-method.jpg" alt="">
              </div>
              <div class="col-md-6 presentation-desk" data-aos="fade-left" data-aos-offset="200" >
                <img class="img-presentation" src="../assets/images/pc.svg" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  
  <section class="skills mt-5">
    <div class="text-center" >
      <h1 data-aos="fade-left" data-aos-offset="200">{{ $t('skills') }}</h1>

      <div class="row d-flex justify-content-center">
        <p class="mt-2" data-aos="fade-right" data-aos-offset="200">Front-End</p>
        <div class="col-auto" v-for="s in skills" data-aos="fade-left" data-aos-offset="200">
          <p class="mt-2 tag text-center " >
            {{ s }}
          </p>
        </div>
      </div>
      <div class="row mt-5 d-flex justify-content-center">
        <p data-aos="fade-right" data-aos-offset="200">{{ $t('tools') }}</p>
        <div class="col-auto" v-for="s in tools" data-aos="fade-left" data-aos-offset="200">
          <p class="mt-2 tag col-md-12 text-center ">
            {{ s }}
          </p>
        </div>
      </div>
      <div class="row mt-5 d-flex justify-content-center">
        <p  data-aos="fade-right" data-aos-offset="200">{{ $t('learning') }}</p>
        <div class="col-auto" v-for="s in back"  data-aos="fade-left" data-aos-offset="200">
          <p class="mt-2 tag col-md-12 text-center ">
            {{ s }}
          </p>
        </div>
      </div>
    </div>
  </section>

  <div class="mainViewSection" data-aos="fade-left" data-aos-offset="200">
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
                class="img"  src="/src/assets/images/github.png" alt=""></a>

              <a href="https://www.linkedin.com/in/lucas-almeida-425b781b1/" target="_blank"
                rel="noopener noreferrer"><img class="img" src="/src/assets/images/linkedin.png" alt=""></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>


</template>

<script>
import AOS from 'aos';
import AnimationView from './AnimationView.vue';
import ProjectsView from './ProjectsView.vue';

import 'aos/dist/aos.css';
export default {
  components: {
    AnimationView,
    ProjectsView
  },
  data() {
    return {
      skills: ['HTML', 'CSS', 'Javascript', 'Vue.js', 'Vite', 'Pinia', 'Nuxt', 'Vuex', 'Fetching Data', 'Axios', 'Chart.js', 'Bootstrap', 'Tailwind'],
      tools: ['SCSS (SASS)', 'Webpack', 'I18N', 'Artisan'],
      back: ['Laravel', 'NUXT'],
      fullText: "",
      animatedText: "",
      currentIndex: 0,
      showCursor: true,
      typingSpeed: 100,
      showArrow: true,
      showDetails: false,
      seeMore: 'Saiba Mais'

    }
  },
  
  mounted() {
    this.fullText = this.$t('developer') + " " + this.$t('frontEnd');
    this.typeText();
    AOS.init({
      once: false, 
    });

    setInterval(() => {
      this.showArrow = !this.showArrow;
    }, 300); 

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
    },

    changeState(){
      this.showDetails = !this.showDetails
      this.seeMore = this.showDetails ? 'Saiba Menos' : 'Saiba Mais';
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
.role{
  cursor: pointer;
  font-size: 12px;
}
.move-enter-active, .move-leave-active {
  transition: transform 2s ease;
}

.move-enter {
  transform: translateY(100%);
}

.move-leave-to {
  transform: translateY(100%);
}
/* .move-leave {
  transition: transform 0.1s ease;
} */
.move-leave {
  transition: transform 0.1s ease;
}

.fade-enter-active{
  transition: opacity 0.3s;
} 
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter {
  opacity: 0.3;
}
.fade-leave-to {
  opacity: 0;
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

.arrow {
  width: 40px;
    border: 1px solid #00DC82;
    border-radius: 50%;
    padding: 3px;
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
  border:none;
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

  .stand:after{
        display: none !important;
    }
   .stand:before {
        display: none;
    }

    .monitor {
    width: 100% !important;
    height: 100% !important;
    }

}
</style>
