import { createApp } from 'vue';

// Font Awesome
import store from './store';
import App from './App.vue';

const Vue = createApp(App)
  .use(store);

Vue.mount('#app');
