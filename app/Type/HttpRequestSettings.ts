import {Map} from '../Type/Map';
import {HttpMethod} from './HttpMethod';
import {PlainObject} from './PlainObject';

export type HttpRequestSettings = {
  /**
   * Request method.
   */
  method: HttpMethod;

  /**
   * Resource url.
   */
  url: string;

  /**
   * Query parameters.
   */
  params: PlainObject;

  /**
   * Request headers.
   */
  headers: Map<string>;

  /**
   * Request body.
   */
  body?: any;
};
