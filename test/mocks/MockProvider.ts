import {HttprProvider} from '../../app/Core/HttprProvider';
import {HttpRequestSettings} from '../../app/Type/HttpRequestSettings';
import {HttpResponse} from '../../app/Type/HttpResponse';

export class MockProvider implements HttprProvider {
  private onRequest: (settings: HttpRequestSettings) => void;
  private response: HttpResponse;
  private success: boolean;

  constructor(onRequest = () => {}, response = {} as HttpResponse, success = true) {
    this.onRequest = onRequest;
    this.response = response;
    this.success = success;
  }

  public request(settings: HttpRequestSettings): Promise<HttpResponse> {
    const handler: Function = Promise[this.success ? 'resolve' : 'reject'];

    this.onRequest(settings);

    return handler(this.response);
  }
}
