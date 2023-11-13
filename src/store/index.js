import { createStore } from 'vuex';

import device from '@/store/device';

export default createStore({
  modules: {
    // user
    device,
  },
  // strict: debug
});
