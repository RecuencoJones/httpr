import {Promise} from 'es6-promise';
import {IHttpProvider} from '../Interface/IHttpProvider';
import {HttpRequestSettings} from '../Type/HttpRequestSettings';

export class XHRProvider implements IHttpProvider {
  public request(settings: HttpRequestSettings): Promise<void> {
    return Promise.resolve(null);
  }
}
