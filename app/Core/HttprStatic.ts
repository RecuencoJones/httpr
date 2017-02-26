import {Map} from '../Type/Map';
import {HttpMethod} from '../Type/HttpMethod';
import {PlainObject} from '../Type/PlainObject';
import {HttpRequestSettings} from '../Type/HttpRequestSettings';
import {HttpMethods} from '../Enum/HttpMethods';
import {HttpHeaders} from '../Enum/HttpHeaders';
import {MediaTypes} from '../Enum/MediaTypes';
import {Httpr} from './Httpr';
import {HttprInterceptor} from './HttprInterceptor';
import {urlJoin} from './HttprUtils';
import {HttpResponse} from '../Type/HttpResponse';

export class HttprStatic {
  /**
   * Prepare request settings and apply interceptors before sending the request.
   *
   * @param {Httpr} instance - instance of Http
   * @param {HttpMethod} method - http method to use.
   * @param {string} url - url of resource to request.
   * @param {PlainObject} params - hash of additional query parameters.
   * @param {Map<string>} headers - hash of request headers to set.
   * @param {*} body - request body data.
   * @returns {HttpRequestSettings} prepared request settings.
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
   * Receive success response and apply interceptors.
   *
   * @returns {Promise<HttpResponse>} resolution handler.
   */
  public static onSuccess(instance: Httpr, response: HttpResponse): Promise<HttpResponse> {
    let _response = response;

    instance.interceptors.forEach((interceptor: HttprInterceptor) => {
      _response = interceptor.afterSuccess(_response);
    });

    return Promise.resolve(_response);
  }

  /**
   * Receive error response and apply interceptors.
   *
   * @returns {Promise<HttpResponse>} rejection handler.
   */
  public static onError(instance: Httpr, response: HttpResponse): Promise<HttpResponse> {
    let _response = response;

    instance.interceptors.forEach((interceptor: HttprInterceptor) => {
      _response = interceptor.afterError(_response);
    });

    return Promise.reject(_response);
  }
}
