import {HttpRequestSettings} from '../Type/HttpRequestSettings';

export interface IHttpProvider {
  request(settings: HttpRequestSettings): Promise<void, void>;
}
