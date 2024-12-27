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
import ScrollTop from 'primevue/scrolltop';
import MeterGroup from 'primevue/metergroup';
import Card from 'primevue/card';
import 'primeicons/primeicons.css'
import AnimateOnScroll from 'primevue/animateonscroll';
import Fieldset from 'primevue/fieldset';
import OrganizationChart from 'primevue/organizationchart';
// import Menubar from 'primevue/menubar';


const app = createApp(App);
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});
const i18n = createI18n({
    locale: 'EN',
    messages: {
        EN: EN,
        PT: PT
    }    
});

app.use(router);
app.use(i18n);
app.mount('#app');

app.component('Timeline', Timeline);
app.component('ScrollTop', ScrollTop);
app.component('MeterGroup', MeterGroup);
app.component('Card', Card);
app.component('Button', Button);
app.component('Fieldset', Fieldset);
app.component('OrganizationChart', OrganizationChart);
// app.component('Menubar', Menubar);

app.directive('animateonscroll', AnimateOnScroll);
