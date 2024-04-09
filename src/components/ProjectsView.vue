<template>
    <div>
        <div class="container">
            <h1 class="text-center mb-5">Projeto que estou trabalhando <a href="https://creators.llc/"
                    target="_blank">(Creators LLC)</a></h1>
            <div class="row d-flex align-items-center" >
                <div class="col-md-6 d-flex justify-content-center" data-aos="fade-left" data-aos-offset="200"><img class="cel" src="../assets/images/projec.png"
                        alt=""></div>
                <div class="col-md-6"  data-aos="fade-right" data-aos-offset="200">
                    <div class="card">
                        <p>
                            A Creators é uma empresa que potencializa os resultados de marcas e creators através da
                            aplicação de tecnologia, análise de dados e expertise em marketing de influência.

                            Na minha posição na <span>Creators.LLC</span>, atuo como Full-Stack, com foco predominante
                            no desenvolvimento Front-End. Tenho experiência significativa em aprimorar produtos web,
                            utilizando uma variedade de ferramentas e tecnologias, tais como:
                        <ul>
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
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

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
</style>

<script>
export default {
 
  data() {
        return {
            AOS: [],
        }
    },
}

</script>