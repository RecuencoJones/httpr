import * as _ from 'lodash';
import {StringMap} from '../Type/StringMap';
import {HttpMethod} from '../Type/HttpMethod';
import {PlainObject} from '../Type/PlainObject';
import {HttpMethods} from '../Enum/HttpMethods';
import {HttprInterceptor} from '../Core/HttprInterceptor';
import {HttprConfig} from '../Type/HttprConfig';
import {HttprStatic} from '../Core/HttprStatic';
import {HttprProvider} from './HttprProvider';
import {HttpResponse} from '../Type/HttpResponse';

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
      provider: new HttprProvider()
    });
  }

  /**
   * Return interceptors from this http instance.
   *
   * @returns {Array<HttprInterceptor>} list of interceptors.
   */
  public get interceptors(): Array<HttprInterceptor> {
    return this._interceptors;
  }

  /**
   * Return a copy of current configuration.
   *
   * @returns {HttprConfig} current config.
   */
  public get config(): HttprConfig {
    return _.cloneDeep(this._config);
  }

  /**
   * Perform a GET request.
   *
   * @see {@link Httpr.request}
   *
   * @param {string} url - url of resource to request.
   * @param {PlainObject} params - hash of additional query parameters.
   * @param {StringMap} headers - hash of request headers to set.
   * @returns {Promise<HttpResponse>} promise handler.
   */
  public get(url: string, params?: PlainObject, headers?: StringMap): Promise<HttpResponse> {
    return this.request(HttpMethods.GET, url, params, headers);
  }

  /**
   * Perform a POST request.
   *
   * @see {@link Httpr.request}
   *
   * @param {string} url - url of resource to request.
   * @param {PlainObject} params - hash of additional query parameters.
   * @param {*} body - request body data.
   * @param {StringMap} headers - hash of request headers to set.
   * @returns {Promise<HttpResponse>} promise handler.
   */
  public post(url: string, params?: PlainObject, body?: any, headers?: StringMap): Promise<HttpResponse> {
    return this.request(HttpMethods.POST, url, params, headers, body);
  }

  /**
   * Perform a PUT request.
   *
   * @see {@link Httpr.request}
   *
   * @param {string} url - url of resource to request.
   * @param {PlainObject} params - hash of additional query parameters.
   * @param {*} body - request body data.
   * @param {StringMap} headers - hash of request headers to set.
   * @returns {Promise<HttpResponse>} promise handler.
   */
  public put(url: string, params?: PlainObject, body?: any, headers?: StringMap): Promise<HttpResponse> {
    return this.request(HttpMethods.PUT, url, params, headers, body);
  }

  /**
   * Perform a DELETE request.
   *
   * @see {@link Httpr.request}
   *
   * @param {string} url - url of resource to request.
   * @param {PlainObject} params - hash of additional query parameters.
   * @param {StringMap} headers - hash of request headers to set.
   * @returns {Promise<HttpResponse>} promise handler.
   */
  public del(url: string, params?: PlainObject, headers?: StringMap): Promise<HttpResponse> {
    return this.request(HttpMethods.DELETE, url, params, headers);
  }

  /**
   * Perform an OPTIONS request.
   *
   * @see {@link Httpr.request}
   *
   * @param {string} url - url of resource to request.
   * @param {PlainObject} params - hash of additional query parameters.
   * @param {StringMap} headers - hash of request headers to set.
   * @returns {Promise<HttpResponse>} promise handler.
   */
  public options(url: string, params?: PlainObject, headers?: StringMap): Promise<HttpResponse> {
    return this.request(HttpMethods.OPTIONS, url, params, headers);
  }

  /**
   * Perform a PATCH request.
   *
   * @see {@link Httpr.request}
   *
   * @param {string} url - url of resource to request.
   * @param {PlainObject} params - hash of additional query parameters.
   * @param {StringMap} headers - hash of request headers to set.
   * @returns {Promise<HttpResponse>} Promise handler.
   */
  public patch(url: string, params?: PlainObject, headers?: StringMap): Promise<HttpResponse> {
    return this.request(HttpMethods.PATCH, url, params, headers);
  }

  /**
   * Perform an HTTP Request.
   *
   * @see {@link HttprStatic}
   * @see {@link HttprProvider}
   *
   * @param {HttpMethod} method - http method to use.
   * @param {string} url - url of resource to request.
   * @param {PlainObject} params - hash of additional query parameters.
   * @param {StringMap} headers - hash of request headers to set.
   * @param {*} body - request body data.
   * @returns {Promise<HttpResponse>} promise handler.
   */
  public request(method: HttpMethod, url: string, params?: PlainObject,
                 headers?: StringMap, body?: any): Promise<HttpResponse> {
    return this.config.provider
    .request(HttprStatic.build(this, method, url, params, headers, body))
    .then((data) => HttprStatic.onSuccess(this, data))
    .catch((data) => HttprStatic.onError(this, data));
  }

  /**
   * Add an interceptor to the Http instance.
   *
   * @param {HttprInterceptor} interceptor - instance of the interceptor to add.
   * @returns {Httpr} current Http instance.
   */
  public register(interceptor: HttprInterceptor): Httpr {
    this._interceptors.push(interceptor);

    return this;
  }

  /**
   * Remove an interceptor from the Http instance.
   *
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
