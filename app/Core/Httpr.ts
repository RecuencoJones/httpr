import * as _ from 'lodash';
import {Map} from '../Type/Map';
import {HttpMethod} from '../Type/HttpMethod';
import {PlainObject} from '../Type/PlainObject';
import {HttpMethods} from '../Enum/HttpMethods';
import {HttprInterceptor} from '../Core/HttprInterceptor';
import {HttprConfig} from '../Type/HttprConfig';
import {HttprStatic} from '../Core/HttprStatic';
import {HttpProvider} from './HttpProvider';

export class Httpr {
  /**
   * List of interceptors.
   */
  protected _interceptors: Array<HttprInterceptor> = [];

  /**
   * Httpr configuration.
   */
  protected _config: HttprConfig;

  /**
   * Httpr constructor.
   *
   * @param {HttprConfig} config - custom http configuration.
   */
  public constructor(config: HttprConfig) {
    this._config = _.defaults(config, {
      provider: new HttpProvider()
    });
  }

  /**
   * Return interceptors from this http instance.
   *
   * @returns {Array<HttprInterceptor>} list of interceptors.
   */
  public get interceptors() {
    return this._interceptors;
  }

  /**
   * Return a copy of current configuration.
   *
   * @returns {HttprConfig} current config.
   */
  public get config() {
    return _.cloneDeep(this._config);
  }

  /**
   *
   * @param url
   * @param params
   * @param headers
   */
  public get(url: string, params?: PlainObject, headers?: Map<string>) {
    this.request(HttpMethods.GET, url, params, headers);
  }

  /**
   *
   * @param url
   * @param params
   * @param body
   * @param headers
   */
  public post(url: string, params?: PlainObject, body?: any, headers?: Map<string>) {
    this.request(HttpMethods.POST, url, params, headers, body);
  }

  /**
   *
   * @param url
   * @param params
   * @param body
   * @param headers
   */
  public put(url: string, params?: PlainObject, body?: any, headers?: Map<string>) {
    this.request(HttpMethods.PUT, url, params, headers, body);
  }

  /**
   *
   * @param url
   * @param params
   * @param headers
   */
  public del(url: string, params?: PlainObject, headers?: Map<string>) {
    this.request(HttpMethods.DELETE, url, params, headers);
  }

  /**
   *
   * @param url
   * @param params
   * @param headers
   */
  public options(url: string, params?: PlainObject, headers?: Map<string>) {
    this.request(HttpMethods.OPTIONS, url, params, headers);
  }

  /**
   *
   * @param url
   * @param params
   * @param headers
   */
  public patch(url: string, params?: PlainObject, headers?: Map<string>) {
    this.request(HttpMethods.PATCH, url, params, headers);
  }

  /**
   * Perform an HTTP Request.
   *
   * @param {HttpMethod} method - http method to use.
   * @param {string} url - url of resource to request.
   * @param {PlainObject} params - hash of additional query parameters.
   * @param {Map<string>} headers - hash of request headers to set.
   * @param {*} body - request body data.
   * @returns {Promise<*>} promise handler.
   */
  public request(method: HttpMethod, url: string, params?: PlainObject,
                 headers?: Map<string>, body?: any): Promise<any> {
    return this.config.provider
    .request(HttprStatic.build(this, method, url, params, headers, body))
    .then((data) => HttprStatic.onSuccess(this, data))
    .catch((data) => HttprStatic.onError(this, data));
  }

  /**
   * Add an interceptor to the Http instance.
   * @param {HttprInterceptor} interceptor - instance of the interceptor to add.
   * @returns {Httpr} current Http instance.
   */
  public register(interceptor: HttprInterceptor): Httpr {
    this._interceptors.push(interceptor);

    return this;
  }

  /**
   * Remove an interceptor from the Http instance.
   * @param {?HttprInterceptor} interceptor - instance of the interceptor to remove.
   * If none is specified, remove all interceptors.
   * @returns {Httpr} current Http instance.
   */
  public unregister(interceptor?: HttprInterceptor): Httpr {
    if (interceptor) {
      this._interceptors = _.without(this._interceptors, interceptor);
    } else {
      this._interceptors = [];
    }

    return this;
  }
}
