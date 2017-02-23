import * as _ from 'lodash';
import {Map} from '../Type/Map';
import {HttpMethod} from '../Type/HttpMethod';
import {PlainObject} from '../Type/PlainObject';
import {HttprConfig} from '../Type/HttprConfig';
import {IHttpr} from '../Interface/IHttpr';
import {HttprStatic} from './HttprStatic';

export class Httpr extends IHttpr {
  /**
   * Httpr configuration.
   */
  protected config: HttprConfig;

  /**
   * Httpr constructor.
   *
   * @param {HttprConfig} config - custom http configuration.
   */
  public constructor(protected config?: HttprConfig) {
    this.config = config;
  }

  /**
   * Return a copy of current configuration.
   * @returns {HttprConfig} current config.
   */
  public get config() {
    return _.cloneDeep(this.config);
  }

  /**
   * Send an HTTP Request.
   *
   * @param {HttpMethod} method - http method to use.
   * @param {string} url - url of resource to request.
   * @param {PlainObject} params - hash of additional query parameters.
   * @param {Map<string>} headers - hash of request headers to set.
   * @param {*} body - request body data.
   * @returns {Promise<void, void>} promise handler.
   */
  public request(method: HttpMethod, url: string, params?: PlainObject,
                 headers?: Map<string>, body?: any): Promise<void, void> {
    return this.config.provider
    .request(HttprStatic.build(this, method, url, params, headers, body))
    .then(HttprStatic.onSuccess)
    .catch(HttprStatic.onError);
  }
}
