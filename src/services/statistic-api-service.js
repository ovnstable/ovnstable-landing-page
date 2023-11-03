import {apiService} from './api-service'
import {getErrorObject} from '@/utils/errors'
require('dotenv').config();

class StatisticApiService {
  getMainWidgetData() {
    return new Promise((resolve, reject) => {
      apiService.get(process.env.VUE_APP_ROOT_API + '/landing/main-widget/data')
        .then(data => {
          resolve(data)
        })
        .catch(e => {
          reject(getErrorObject(e))
        })
    })
  }
}

export const statisticApiService = new StatisticApiService()
