import * as urlJoin from 'url-join';
import {Promise} from 'es6-promise';
import {Map} from '../Type/Map';
import {HttpMethod} from '../Type/HttpMethod';
import {PlainObject} from '../Type/PlainObject';
import {HttpRequestSettings} from '../Type/HttpRequestSettings';
import {Httpr} from './Httpr';
import {HttpMethods} from '../Enum/HttpMethods';
import {HttpHeaders} from '../Enum/HttpHeaders';
import {MediaTypes} from '../Enum/MediaTypes';

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
      settings.body = JSON.stringify(settings.body);
    }

    return settings;
  }

  /**
   *
   * @returns {Promise<void>}
   */
  public static onSuccess(): Promise<void> {
    return Promise.resolve();
  }

  /**
   *
   * @returns {Promise<void>}
   */
  public static onError(): Promise<void> {
    return Promise.reject(null);
  }
}
