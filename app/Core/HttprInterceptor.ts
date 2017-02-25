import {HttpRequestSettings} from '../Type/HttpRequestSettings';

export class HttprInterceptor {
  public beforeRequest(settings: HttpRequestSettings): HttpRequestSettings {
    return settings;
  }

  public afterSuccess(response: any): any {
    return response;
  }

  public afterError(response: any): any {
    return response;
  }
}
