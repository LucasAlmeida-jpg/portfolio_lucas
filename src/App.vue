<script>
import { RouterLink, RouterView } from 'vue-router'
import All from './views/All.vue';

</script>

<template>
  <All/>
  <RouterView />
</template>

<script setup>
import { onMounted } from 'vue';


onMounted(() => {
  document.cookie = 'locale=PT'
})
  </script>