import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap';
import './assets/main.css';
import { createI18n } from 'vue-i18n';
import EN from './locale/en.json'
import PT from './locale/pt.json'
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';


const app = createApp(App);

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
