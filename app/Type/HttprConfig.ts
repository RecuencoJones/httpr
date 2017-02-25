import {HttprProvider} from '../Core/HttprProvider';

export type HttprConfig = {
  /**
   * A base URL to append to all requests.
   */
  baseUrl?: string;

  /**
   * Implementation of the provider that will perform the requests.
   */
  provider: HttprProvider;
};
