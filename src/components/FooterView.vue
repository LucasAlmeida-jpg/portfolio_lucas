<template>
    <footer class="footer-bg" id="footer">
       <div>
        <span>{{ $t('coded') }}</span>
       </div>
       <div>
        <span>© {{ currentYear }} Lucas Gouvea de Almeida </span>   
       </div>
    </footer>
</template>
<script>

import { ref } from "vue";

export default {
  setup() {
    // Obtenha o ano atual
    const currentYear = ref(new Date().getFullYear());

    return {
      currentYear,
    };
  },
};
</script>
<style scoped>
footer{
    display: block;
    align-items: center;
    justify-content: center;
    width: 100% !important;
    bottom: 0 !important;
}

.vue{
    width: 20px;
}

</style>