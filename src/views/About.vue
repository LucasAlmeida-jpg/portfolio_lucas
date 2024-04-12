<template>
    <h1 class="text-center mt-5">Creators Calcula</h1>
    <div class="mt-5">
        <div class="container">          
            <div class="row d-flex align-items-center">
                <div class="col-md-6 d-flex justify-content-center" data-aos="fade-left" data-aos-offset="200">                 
                    <div class="stand">
                        <div class="monitor" ref="monitor" v-on:scroll="handleScroll">
                            <img src="/src/assets/images/calcula.png">
                        </div>
                    </div>
                </div>
                <div class="col-md-6 mt-5">
                    <div class="card"  data-aos="fade-right" data-aos-offset="200">
                        <h1>Creators Calcula</h1>
                        <p>
                            A calculadora de preço de publicidade com base em métricas de influência oferece uma maneira objetiva de estimar os custos de colaboração com influenciadores digitais. Ao considerar o alcance da postagem, impressões, número de seguidores e taxa de engajamento do influenciador em comparação com a referência da marca, ela fornece uma estimativa do preço de postagens patrocinadas. As estimativas são baseadas em dados reais de campanhas anteriores, mas é importante lembrar que as métricas individuais dos influenciadores podem variar. Assim, a calculadora serve como um guia, permitindo ajustes para atender às necessidades específicas da marca.
                            O projeto se encontra em produção<a href="https://www.creators.llc/calcula/" target="_blank" rel="noopener noreferrer">clicando aqui.</a>
                        </p>
                    </div>
                    <div class="card my-5"  data-aos="fade-left" data-aos-offset="200">
                        <h1>Stack Utilizada</h1>         
                        <p>Para este projeto, foi utilizado o Vue.js 3 para a construção da interface do usuário e para a lógica de interação dinâmica. Além disso, a parte do backend foi desenvolvida com PHP para renderização de templates (Blade.php) e manipulação de dados no servidor. Também foi utilizado um arquivo JSON para armazenar e manipular dados estruturados no lado do cliente. Essas tecnologias combinadas proporcionaram uma experiência interativa e responsiva para os usuários, permitindo seleções personalizadas e cálculos dinâmicos com base nos dados fornecidos.</p>              
                    </div>
                </div>
            </div>
        </div>
    </div>
    <FooterView></FooterView>
</template>

<!-- <script>


export default {
  components: {  
    FooterView
  }
}
</script> -->
<script>
import FooterView from '@/components/FooterView.vue';
export default {
    components: {  
    FooterView
  },
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
    border: solid 1em rgba(15 23 42);
    border-radius: .5em;
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
    height: 100%;
   
}
}
</style>
