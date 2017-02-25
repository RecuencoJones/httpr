import {HttpRequestSettings} from '../Type/HttpRequestSettings';

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
   * @param {*} response - success response.
   * @return {*} modified response.
   */
  public afterSuccess(response: any): any {
    return response;
  }

  /**
   * Apply modifications to error response.
   *
   * @param {*} response - error response.
   * @return {*} modified response.
   */
  public afterError(response: any): any {
    return response;
  }
}
