import {HttpRequestSettings} from '../Type/HttpRequestSettings';
import {HttpResponse} from '../Type/HttpResponse';

export class HttprInterceptor {
  /**
   * Apply modifications to request settings.
   *
   * @param {HttpRequestSettings} settings - current request settings.
   * @return {HttpRequestSettings} modified request settings.
   */
  public beforeRequest(settings: HttpRequestSettings): HttpRequestSettings {
    return settings;
  }

  /**
   * Apply modifications to success response.
   *
   * @param {HttpResponse} response - success response.
   * @return {HttpResponse} modified response.
   */
  public afterSuccess(response: HttpResponse): HttpResponse {
    return response;
  }

  /**
   * Apply modifications to error response.
   *
   * @param {HttpResponse} response - error response.
   * @return {HttpResponse} modified response.
   */
  public afterError(response: HttpResponse): HttpResponse {
    return response;
  }
}
