<template>
  <section>
    <headerView />
  </section>
  <section class="spacement">
    <MainView />
  </section>
  <footer>
    <FooterView></FooterView>
  </footer>
</template>

<script>
import headerView from '../components/HeaderView.vue'
import MainView from '@/components/MainView.vue';
import FooterView from '@/components/FooterView.vue';

export default {
  components: {
    headerView,
    MainView,
    FooterView
  }
}
</script>
