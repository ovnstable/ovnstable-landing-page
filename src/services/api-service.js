/* eslint-disable class-methods-use-this */
import axios from 'axios';
import utils from '@/utils';

function cloneObject(src) {
  return { ...src };
}

const baseHeaders = {};

const notification = (type, message, ttl) => {
  console.error('Unhandled ', type, ': ', message, 'ttl', ttl);
};

const onSuccess = (callback) => (data) => {
  if (callback) {
    callback(data.data);
  }
};

const onError = (errorCallback) => {
  const defaultErrorHandler = (data) => {
    if (data.code) {
      notification('warning', data.message, 5000);
    } else if (data.errors) {
      // default spring error handling
      notification('warning', data.errors[0].default_message, 5000);
    } else {
      notification('error', 'Unknown error', 5000);
    }
  };

  return (data) => {
    // eslint-disable-next-line no-param-reassign
    data = data.response ? data.response.data : data;

    if (!errorCallback) {
      defaultErrorHandler(data);
      return;
    }

    errorCallback(data, () => { defaultErrorHandler(data); });
  };
};

const wrapPromise = (promise) => new Promise((resolve, reject) => {
  promise
    .then(onSuccess(resolve))
    .catch(onError(reject));
});

const getHeaders = (contentType) => {
  const headers = cloneObject(baseHeaders);
  if (contentType) headers['Content-Type'] = contentType;
  return headers;
};

const transformRequest = (obj) => {
  const str = [];
  // eslint-disable-next-line no-restricted-syntax, guard-for-in
  for (const p in obj) {
    str.push(`${encodeURIComponent(p)}=${encodeURIComponent(obj[p])}`);
  }
  return str.join('&');
};

class ApiService {
  get(url) {
    return wrapPromise(axios.get(url));
  }

  postJson(url, data) {
    const options = { headers: getHeaders('application/json') };
    return wrapPromise(axios.post(url, data, options));
  }

  putJson(url, data) {
    return wrapPromise(axios.put(url, data, { headers: getHeaders('application/json') }));
  }

  delete(url, data) {
    const options = { headers: getHeaders('application/x-www-form-urlencoded') };
    const responseFuture = axios.delete(data ? this.uri(url, data) : url, options);

    return wrapPromise(responseFuture);
  }

  uri(path, paramsObject) {
    const params = transformRequest(paramsObject);
    return `${path}?${params}`;
  }

  postMultipart(url, formData) {
    const options = { headers: getHeaders('multipart/form-data') };
    return wrapPromise(axios.post(url, formData, options));
  }

  async getTvl() {
    let tvl = 0.0;
    const tvlData = await this.getTvLData();
    if (tvlData) {
      tvl = tvlData;
    }
    return {
      formattedTvl: tvl ? `$${utils.formatMoneyComma(tvl, 2)}` : '-',
      tvl,
    };
  }

  async getTvLData() {
    const fetchOptions = {
      headers: {
        'Access-Control-Allow-Origin': process.env.VUE_APP_ROOT_API,
      },
    };

    const response = await this.get(`${process.env.VUE_APP_ROOT_API}/tvl/total`, fetchOptions);

    if (response) {
      return response;
    }
    return null;
  }

  async getEthPrice() {
    let ethPrice = null;
    const apiUrl = 'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=USD';
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      if (response.ok) {
        ethPrice = data.ethereum.usd;
      }
    } catch (error) {
      console.error('Error fetching ETH price:', error.message);
      ethPrice = 0;
    }
    return ethPrice;
  }
}

export const apiService = new ApiService();

export default apiService;
