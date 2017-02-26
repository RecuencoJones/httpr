import {HttpRequestSettings} from '../Type/HttpRequestSettings';
import {HttpResponse} from '../Type/HttpResponse';

/**
 * Httpr Provider fake implementation.
 *
 * This class should be extended and overridden by a low level implementation to perform
 * the actual request.
 */
export class HttprProvider {
  /**
   * Perform a request with low level implementation.
   *
   * @param {HttpRequestSettings} settings - request settings.
   * @return {Promise<HttpResponse>} promise handler.
   */
  public request(settings: HttpRequestSettings): Promise<HttpResponse> {
    const warning = 'You are using a fake provider. Please create a provider and override request method.';

    console.warn(warning);
    console.info(settings);

    return Promise.resolve({
      status: -1,
      statusText: 'Fake Response',
      responseText: warning,
      data: warning,
      headers: {}
    } as HttpResponse);
  }
}
