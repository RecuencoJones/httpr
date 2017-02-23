import * as _ from 'lodash';
import {Map} from '../Type/Map';
import {HttpMethod} from '../Type/HttpMethod';
import {PlainObject} from '../Type/PlainObject';
import {HttpMethods} from '../Enum/HttpMethods';
import {HttprInterceptor} from '../Core/HttprInterceptor';

export abstract class IHttpr {
  protected interceptors: Array<HttprInterceptor>;

  /**
   *
   * @param url
   * @param params
   * @param headers
   */
  public get(url: string, params?: PlainObject, headers?: Map<string>) {
    this.request(HttpMethods.GET, url, headers, params);
  }

  /**
   *
   * @param url
   * @param params
   * @param body
   * @param headers
   */
  public post(url: string, params?: PlainObject, body?: any, headers?: Map<string>) {
    this.request(HttpMethods.POST, url, headers, params, body);
  }

  /**
   *
   * @param url
   * @param params
   * @param body
   * @param headers
   */
  public put(url: string, params?: PlainObject, body?: any, headers?: Map<string>) {
    this.request(HttpMethods.PUT, url, headers, params, body);
  }

  /**
   *
   * @param url
   * @param params
   * @param headers
   */
  public del(url: string, params?: PlainObject, headers?: Map<string>) {
    this.request(HttpMethods.DELETE, url, headers, params);
  }

  /**
   *
   * @param url
   * @param params
   * @param headers
   */
  public options(url: string, params?: PlainObject, headers?: Map<string>) {
    this.request(HttpMethods.OPTIONS, url, headers, params);
  }

  /**
   *
   * @param url
   * @param params
   * @param headers
   */
  public patch(url: string, params?: PlainObject, headers?: Map<string>) {
    this.request(HttpMethods.PATCH, url, headers, params);
  }

  /**
   * Send a bare Http request.
   * @param {HttpMethod} method
   * @param {string} url
   * @param {PlainObject} params
   * @param {Map<string>} headers
   * @param {*} body
   */
  public abstract request(method: HttpMethod, url: string, params?: PlainObject,
                          headers?: Map<string>, body?: any);

  /**
   * Add an interceptor to the Http instance.
   * @param {HttprInterceptor} interceptor - instance of the interceptor to add.
   * @returns {IHttpr} current Http instance.
   */
  public register(interceptor: HttprInterceptor): IHttpr {
    this.interceptors.push(interceptor);

    return this;
  }

  /**
   * Remove an interceptor from the Http instance.
   * @param {?HttprInterceptor} interceptor - instance of the interceptor to remove.
   * If none is specified, remove all interceptors.
   * @returns {IHttpr} current Http instance.
   */
  public unregister(interceptor?: HttprInterceptor): IHttpr {
    if (interceptor) {
      this.interceptors = _.without(this.interceptors, interceptor);
    } else {
      this.interceptors = [];
    }

    return this;
  }
}
