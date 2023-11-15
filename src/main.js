import { createApp } from 'vue';

import store from './store';
import App from './App.vue';

const Vue = createApp(App)
  .use(store);

Vue.mount('#app');
