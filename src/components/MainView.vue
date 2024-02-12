<template>
    <section>
      <div class="text-center">
        <h1>
          <span>{{ $t('developer') }}</span> {{ $t('frontEnd') }} <span>{{ $t('vue') }}</span>
        </h1>
  
        <p class="mt-4">
          {{ $t('aboutLucas') }}
        </p>
      </div>     
    </section>
    <article class="text-center container my-5">
        <div id="carouselExample" class="carousel slide  d-flex justify-content-center container" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div v-for="(card, index) in cards" :key="index" :class="{ 'carousel-item': true, 'active': index === 0 }">
              <div class="row d-flex justify-content-center container">
                <div class="col-md-7 card">
                  <h1>{{ card.title }}</h1>
                  <p v-if="card.content">{{ card.content }}</p>
                  <ul v-if="card.list">
                    <li v-for="(item, i) in card.list" :key="i">{{ item }}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </article>
  </template>
  
  <script>
  export default {
    data() {
      return {
        cards: [
          {
            title: "Sobre Mim",
            content: "Olá, eu sou Lucas, um entusiasta de desenvolvimento web Front-End apaixonado por criar experiências digitais envolventes e funcionais. Especializado no ecossistema Vue.js, buscando constantemente aprimorar minhas habilidades e explorar novas possibilidades na criação de interfaces interativas e responsivas."
          },
          {
            title: "Habilidades Técnicas",
            list: [
              "Desenvolvimento de componentes Vue.js",
              "Roteamento eficiente com Vue Router",
              "Gerenciamento de estado utilizando Vuex",
              "Manipulação de eventos e interatividade dinâmica",
              "Integração de APIs para fornecer dados dinâmicos (Axios)",
              "Desenvolvimento responsivo e acessível"
            ]
          },         
        ]
      };
    }
  };
  </script>
<style scoped>
section {
    display: flex;
    align-items: center;
    justify-content: center;
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
    border: 0.1px solid var(--vt-bg-primary);   
    padding: 30px;
    min-height: 315px;
    display: flex;
    align-items: center;
    justify-content: center; 
}

.card li {
    list-style: none;
}

.carousel-inner{
    width: 100% !important;
}


</style>