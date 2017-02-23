import {HttpRequestSettings} from '../Type/HttpRequestSettings';

export class HttprInterceptor {
  public beforeRequest(settings: HttpRequestSettings) {
    return settings;
  }

  public afterSuccess(response: any) {
    return response;
  }

  public afterError(response: any) {
    return response;
  }
}
