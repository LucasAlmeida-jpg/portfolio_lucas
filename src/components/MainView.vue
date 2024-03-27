<template>
  <section class="slide-in">
    <div class="text-center">
      <h1 class="animate__animated animate__flipInY">
        <span>{{ $t('developer') }}</span> {{ $t('frontEnd') }} <span>{{ $t('vue') }}</span>
      </h1>
      <div class="row">
        <div class="container d-flex justify-content-center">
          <p class="mt-4 col-md-8 text-center animate__animated animate__flipInY">
            {{ $t('aboutLucas') }} {{ $t('aboutLucasSub') }}
          </p>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="container">
      <ul class="nav nav-pills my-3 text-center d-flex justify-content-center" id="pills-tab" role="tablist">
        <li class="nav-item" role="presentation">
          <div class="nav-link active animate__animated animate__flipInY" id="pills-home-tab" data-bs-toggle="pill"
            data-bs-target="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">{{
          $t('professionals_tag') }}</div>
        </li>
        <li class="nav-item" role="presentation">
          <div class="nav-link animate__animated animate__flipInY" id="pills-profile-tab" data-bs-toggle="pill"
            data-bs-target="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">{{
          $t('educational_tag') }}</div>
        </li>
      </ul>
      <div class="tab-content" id="pills-tabContent">

        <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"
          tabindex="0">
          <div class="row my-3 d-flex align-items-center justify-content-center">
            <div class="col-md-6 text-center animate__animated animate__flipInY">
              <div>
                <h1>{{ $t('experience_tag') }}</h1>
              </div>
              <p>
                <!-- <a href="https://creators.llc/" target="_blank">
                <img class="me-2 animate__animated animate__rotateIn" src="../assets/images/Group.svg" alt="">
              </a> -->
              <b>Creators LLC</b> - <span>{{ $t('developer') }} {{ $t('frontEnd') }}</span> <b>(2022 - {{
          $t('currently') }})</b></p>
              <div class="d-flex align-items-center">
                <p>{{ $t('experience') }}</p>
              </div>
            </div>
            <div class="col-md-6 presentations animate__animated animate__flipInY"><img class="img-presentation"
                src="../assets/images/computer.svg" alt=""></div>
          </div>

        </div>
        <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
          <div class="row my-3 d-flex align-items-center justify-content-center">
            <div class="col-md-6 animate__animated animate__flipInY text-center">
              <h1>{{ $t('graduate') }}</h1>
              <p class="mt-3">{{ $t('course') }} - ({{ $t('aboutGraduation') }})</p>
              <p>{{ $t('institute') }}</p>
              <!-- <img class="if-institute" src="../assets/if.png" alt=""> -->
            </div>
            <div class="col-md-6 presentations animate__animated animate__flipInY"><img class="img-presentation"
                src="../assets/images/html.svg" alt=""></div>
          </div>

          <div class="row my-3 d-flex align-items-center justify-content-center animate__animated  animate__flipInY">
            <div class="col-md-6 presentation"><img class="img-presentation" src="../assets/images/pc.svg" alt=""></div>
            <div class="col-md-6 text-center">
              <h1>Curso</h1>
              <p class="mt-3">Conclusão de curso pela metodologia Callan Method</p>
              <p>Instituto USK Callan Method</p>
              <img class="w-25 rounded" src="../assets/images/callan-method.jpg" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="skills">
    <div class="text-center">
      <h1> SKILLS</h1>

      <div class="row d-flex justify-content-center">
        <p>Front-End</p>
        <div class="col-auto" v-for="s in skills">
          <p class="mt-2 tag text-center animate__animated animate__fadeInRight">
            {{ s }}
          </p>
        </div>
      </div>
      <div class="row mt-5 d-flex justify-content-center animate__animated animate__fadeInLeft">
        <p>Tools</p>
        <div class="col-auto" v-for="s in tools">
          <p class="mt-2 tag col-md-12 text-center ">
            {{ s }}
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="mt-5">
    <div class="text-center">
      <h1>Contato</h1>

      <div class="row d-flex justify-content-center">
        <p>Mande uma mensagem</p>
        <div class="col-md-12">
          <p class="mt-2 text-center">
            Entre em contato através dos dados ou enviando um e-mail para<a
              href="mailto:lucasalmeidagouvea123@gmail.com">este e-mail.</a>
          </p>
        </div>

        <div class="d-flex align-items-center justify-content-center social">
          <div>
            <a class="me-3" href="http://" target="_blank" rel="noopener noreferrer"><img
                src="/src/assets/images/github.png" alt=""></a>
            <a href="https://github.com/LucasAlmeida-jpg" target="_blank" rel="noopener noreferrer"><img
                src="/src/assets/images/linkedin.png" alt=""></a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      skills: ['HTML', 'CSS', 'Javascript', 'Vue.js', 'NUXT (SSR)', 'Vuex', 'Fetching Data', 'Axios', 'Chart.js'],
      tools: ['Node.Js', 'SCSS (SASS)', 'Bootstrap', 'Webpack', 'I18N', 'Artisan'],
    }
  },

  methods: {

    //
  }
}
</script>
<style scoped>
section {
  display: flex;
  align-items: center;
  justify-content: center;
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
  padding: 30px;
  min-height: 315px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 29px;
  border-radius: 40px;
}

.card:hover {
  border: 0.1px solid var(--vt-bg-primary);
  cursor: pointer;
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
    width: 50%;
    display: flex;
    justify-content: center;
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

}
</style>
