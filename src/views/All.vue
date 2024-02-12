<template>
  <section>
    <headerView />
  </section>
  <section class="spacement">
    <MainView />
  </section>
</template>

<script>
import headerView from '../components/HeaderView.vue'
import MainView from '@/components/MainView.vue';

export default {
  components: {
    headerView,
    MainView
  }
}
</script>
