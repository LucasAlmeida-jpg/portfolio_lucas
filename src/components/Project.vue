<template>
    <div class="container text-center mt-5">
        <h1>Creators Calcula</h1>
        <h4>
            Projeto desenvolvido em Vue.js e Laravel;
        </h4>
        <p>O projeto tem o intuito de calcular o preço de publicidade baseado
            nas principais métricas de influência.
        </p>
    </div>
    <div class="container d-flex align-items-center justify-content-between gap-4 text-center mt-5">
        <div class="col-md-6 card">
            <h1>Desafios</h1>
            <p>
                Meu maior desafio foi no desenvolvimento da tela de filtragem das métricas, pois, possúem muitas regras de negócio.
            </p>
        </div>
        <div class="col-md-6 card">
            <h1>Aprendizados</h1>
            <p>
                Com o desenvolvimento desse projeto, eu aprendi a trabalhar com API's e gerenciamento de JSON.
            </p>
        </div>
    </div>
    <FooterView class="position-absolute bottom-0"></FooterView>

</template>

<script>
import FooterView from '@/components/FooterView.vue';

export default {
    components: {
        FooterView
    },
    data() {
        return {

        }
    }

}
</script>

<style lang="scss" scoped>
.card {
    background: rgba(15 23 42);
    padding: 35px;
    height: auto;
    border-radius: 40px;
    z-index: -1;
    border: none;
}
</style>