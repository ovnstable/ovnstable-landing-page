import { createApp } from 'vue';

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import store from './store';
import App from './App.vue';

library.add(fas);

const Vue = createApp(App)
  .use(store);

Vue.component('FontAwesomeIcon', FontAwesomeIcon);

document.addEventListener('mousedown', (e) => {
  if (e.button === 1) {
    e.preventDefault();
  }
}, false);

Vue.mount('#app');
