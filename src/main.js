import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(fas)


const Vue = createApp(App)
    .use(store);

Vue.component('FontAwesomeIcon', FontAwesomeIcon)

document.addEventListener('mousedown', (e) => {
    if (e.button === 1) {
        e.preventDefault();
    }
}, false);

Vue.mount('#app')
