import urlJoin = require('url-join');
import {Map} from '../Type/Map';
import {HttpMethod} from '../Type/HttpMethod';
import {PlainObject} from '../Type/PlainObject';
import {HttpRequestSettings} from '../Type/HttpRequestSettings';
import {HttpMethods} from '../Enum/HttpMethods';
import {HttpHeaders} from '../Enum/HttpHeaders';
import {MediaTypes} from '../Enum/MediaTypes';
import {Httpr} from './Httpr';
import {HttprInterceptor} from './HttprInterceptor';

export class HttprStatic {
  /**
   *
   * @param instance
   * @param method
   * @param url
   * @param params
   * @param headers
   * @param body
   * @returns {HttpRequestSettings}
   */
  public static build(instance: Httpr, method: HttpMethod, url: string, params?: PlainObject,
                      headers?: Map<string>, body?: any): HttpRequestSettings {
    let settings: HttpRequestSettings = {
      method: method || HttpMethods.GET,
      url: urlJoin(instance.config.baseUrl, url) || '',
      headers: headers || {},
      params: params || {}
    };

    if (typeof body === 'object') {
      settings.headers[HttpHeaders.CONTENT_TYPE] = MediaTypes.APPLICATION_JSON;
      settings.body = JSON.stringify(body);
    }

    instance.interceptors.forEach((interceptor: HttprInterceptor) => {
      settings = interceptor.beforeRequest(settings);
    });

    return settings;
  }

  /**
   *
   * @returns {Promise<void>}
   */
  public static onSuccess(instance: Httpr, response: any): Promise<any> {
    let _response = response;

    instance.interceptors.forEach((interceptor: HttprInterceptor) => {
      _response = interceptor.afterSuccess(_response);
    });

    return Promise.resolve(_response);
  }

  /**
   *
   * @returns {Promise<void>}
   */
  public static onError(instance: Httpr, response: any): Promise<any> {
    let _response = response;

    instance.interceptors.forEach((interceptor: HttprInterceptor) => {
      _response = interceptor.afterError(_response);
    });

    return Promise.reject(_response);
  }
}
