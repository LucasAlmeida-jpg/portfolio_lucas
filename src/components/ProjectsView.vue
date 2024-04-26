<template>
    <div>
        <div class="container">
            <h1 class="text-center mb-5">Projetos</h1>
            <div class="row d-flex align-items-center">
                <div class="col-md-6 d-flex justify-content-center" data-aos="fade-left" data-aos-offset="200">
                    <div class="stand">
                        <div class="monitor" ref="monitor" v-on:scroll="handleScroll">
                            <img src="/src/assets/images/presentation.png">
                        </div>
                    </div>
                </div>
                <div class="col-md-6" data-aos="fade-right" data-aos-offset="200">
                    <div class="card mt-4">
                        <p>
                            A Creators é uma empresa que potencializa os resultados de marcas e creators através da
                            aplicação de tecnologia, análise de dados e expertise em marketing de influência.

                            Na minha posição na <span>Creators.LLC</span>, atuo como Full-Stack, com foco predominante
                            no desenvolvimento Front-End. Tenho experiência significativa em aprimorar produtos web,
                            utilizando uma variedade de ferramentas e tecnologias, tais como:
                        <ul class="animate__animated animate__shakeY">
                            <li>Desenvolvimento de interfaces dinâmicas com o framework Vue.js.</li>
                            <li>Implementação de design responsivo utilizando Bootstrap.</li>
                            <li>Integração fluida com APIs para garantir uma experiência de usuário contínua.</li>
                            <li>Estilização avançada utilizando SCSS para alcançar um design atraente e coeso.</li>
                            <li>Utilização do Vuex para um eficiente gerenciamento de estado da aplicação.</li>
                            <li>Criação e manutenção de dashboards dinâmicos utilizando chart.js, enfatizando a
                                visualização de dados de forma clara e informativa.</li>
                            <li>Controle de versionamento de código utilizando Git/GitHub para garantir a colaboração
                                eficaz e o gerenciamento do código-fonte de forma organizada e segura.</li>
                            <li>Manutenção e Criação de API Rest usando Laravel</li>
                        </ul>
                        Essas habilidades e experiências me capacitam a contribuir de forma significativa para o sucesso
                        dos projetos na Creators.LLC, garantindo produtos de alta qualidade e desempenho excepcional.
                        <RouterLink :to="'/about/' + company">Aqui tem alguns dos projetos que trabalhei</RouterLink>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            company: 'creators',
            scrollDirection: 'down',
            scrollInterval: null
        }
    },
    mounted() {
    this.startScroll();
  },
  methods: {
    handleScroll(event) {
      const monitor = event.target;
      if (monitor.scrollTop === 0) {
        this.scrollDirection = 'down';
      } else if (monitor.scrollTop === monitor.scrollHeight - monitor.clientHeight) {
        this.scrollDirection = 'up';
      }
    },
    startScroll() {
      this.scrollInterval = setInterval(() => {
        const monitor = this.$refs.monitor;
        if (this.scrollDirection === 'down') {
          monitor.scrollTop += 1;
          if (monitor.scrollTop === monitor.scrollHeight - monitor.clientHeight) {
            clearInterval(this.scrollInterval);
            setTimeout(() => {
              this.scrollDirection = 'up';
              this.startScroll();
            }, 200);
          }
        } else if (this.scrollDirection === 'up') {
          monitor.scrollTop -= 1;
          if (monitor.scrollTop === 0) {
            clearInterval(this.scrollInterval);
            setTimeout(() => {
              this.scrollDirection = 'down';
              this.startScroll();
            }, 20); 
          }
        }
      }, 20); 
    }
}
}

</script>

<style scoped>
.cel {
    object-fit: cover;
    height: auto;
    filter: opacity(1);
    width: 300px;
}

.card {
    background: rgba(15 23 42);
    padding: 35px;
    height: auto;
    border-radius: 40px;
    z-index: -1;
    border: none;
}

ul li {
    font-size: 12px;
}

article {
    padding: 4em;
}

img {
    width: 100%;
}

.monitor {
    width: 515px;
    height: 300px;
    overflow-y: scroll;
    overflow-x: hidden !important;
    border: solid 20px rgba(15 23 42);
    border-radius: 0px;
}


.monitor::-webkit-scrollbar {
    width: 4px;
}

.monitor::-webkit-scrollbar-thumb {
    background: #666;
}

::-webkit-scrollbar-track {
    background-color: #888;
}

.stand:before {
    content: "";
    display: block;
    position: relative;
    background: rgba(15 23 42);
    width: 150px;
    height: 50px;
    top: 382px;
    left: 185px;
}

.stand:after {
    content: "";
    display: block;
    position: relative;
    background: rgba(15 23 42);
    border-top-left-radius: .5em;
    border-top-right-radius: .5em;
    width: 300px;
    height: 15px;
    top: 50px;
    left: 110px;
}

@media only screen and (max-width: 600px) {
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
