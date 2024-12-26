import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './assets/main.css';
import { createI18n } from 'vue-i18n';
import EN from './locale/en.json'
import PT from './locale/pt.json'
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'animate.css';
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import Button from "primevue/button"
import Timeline from 'primevue/timeline';


const app = createApp(App);
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});
const i18n = createI18n({
    locale: 'PT',
    messages: {
        EN: EN,
        PT: PT
    }    
});

app.use(router);
app.use(i18n);
app.mount('#app');

app.component('Timeline', Timeline);
