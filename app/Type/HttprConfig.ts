import {HttpProvider} from '../Core/HttpProvider';

export type HttprConfig = {
  /**
   * A base URL to append to all requests.
   */
  baseUrl?: string;

  /**
   * Implementation of the provider that will perform the requests.
   */
  provider: HttpProvider;
}
