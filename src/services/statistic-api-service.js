import { getErrorObject } from '@/utils/errors';
import { apiService } from './api-service';

require('dotenv').config();

class StatisticApiService {
  // eslint-disable-next-line class-methods-use-this
  getMainWidgetData() {
    return new Promise((resolve, reject) => {
      apiService.get(`${process.env.VUE_APP_ROOT_API}/landing/main-widget/data`)
        .then((data) => {
          resolve(data);
        })
        .catch((e) => {
          reject(getErrorObject(e));
        });
    });
  }
}

const statisticApiService = new StatisticApiService();

export default statisticApiService;
