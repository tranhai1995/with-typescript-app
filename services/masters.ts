import {AxiosInstance, AxiosPromise, AxiosRequestConfig} from 'axios';

import {MastersResponse} from '@types';

class MastersService {
  private readonly axios: AxiosInstance;

  constructor(axios: AxiosInstance) {
    this.axios = axios;
  }

  getHomePages = (): AxiosPromise<MastersResponse> => {
    const request: AxiosRequestConfig = {
      method: 'GET',
      url: 'https://6066bf18b8fbbd0017568926.mockapi.io/data-home',
    };
    return this.axios(request);
  };
}

export default MastersService;
