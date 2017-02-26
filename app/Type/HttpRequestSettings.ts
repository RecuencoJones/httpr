import {StringMap} from './StringMap';
import {HttpMethod} from './HttpMethod';
import {PlainObject} from './PlainObject';

/**
 * Http Request Settings.
 */
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
  headers: StringMap;

  /**
   * Request body.
   */
  body?: any;
};
