import { createStore } from 'vuex';
import device from '@/store/device';
import landingStore from './landingStore';

export default createStore({
  modules: {
    landing: landingStore,
    device,
  },
});
