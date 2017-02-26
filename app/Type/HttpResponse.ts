import {StringMap} from './StringMap';

/**
 * Http Response.
 */
export type HttpResponse = {
  /**
   * HTTP status code.
   */
  status: number;

  /**
   * HTTP status code text.
   */
  statusText: string;

  /**
   * Raw response body.
   */
  responseText: string;

  /**
   * Processed response data.
   */
  data?: any;

  /**
   * Response headers.
   */
  headers: StringMap;
};
