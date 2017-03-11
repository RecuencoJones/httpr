import {HttpMethod} from '../Type/HttpMethod';

/**
 * Http Method constants.
 *
 * @see {@link HttpMethod}
 */
export class HttpMethods {
  public static GET: HttpMethod = 'get';
  public static POST: HttpMethod = 'post';
  public static PUT: HttpMethod = 'put';
  public static DELETE: HttpMethod = 'delete';
  public static OPTIONS: HttpMethod = 'options';
  public static PATCH: HttpMethod = 'patch';
  public static HEAD: HttpMethod = 'head';
  public static TRACE: HttpMethod = 'trace';
  public static CONNECT: HttpMethod = 'connect';
}
