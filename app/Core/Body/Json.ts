import {HttprBody} from '../HttprBody';
import {MediaTypes} from '../../Enum/MediaTypes';

/**
 * Json body for application json data media.
 */
export class Json extends HttprBody<any> {
  constructor(data: any) {
    super(MediaTypes.APPLICATION_JSON, data);
  }

  /**
   * Serialize body content as string.
   *
   * @return {string} body.
   */
  public toString(): string {
    return JSON.stringify(this._content);
  }
}
