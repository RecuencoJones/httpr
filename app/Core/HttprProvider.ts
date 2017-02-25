import {HttpRequestSettings} from '../Type/HttpRequestSettings';

export class HttprProvider {
  /**
   * Perform a request with low level implementation.
   * @param {HttpRequestSettings} settings - request settings.
   * @return {Promise<*>} promise handler.
   */
  public request(settings: HttpRequestSettings): Promise<any> {
    console.warn('You are using a fake provider. Please create a provider and override this method.');
    console.info(settings);

    return Promise.resolve({});
  }
}
