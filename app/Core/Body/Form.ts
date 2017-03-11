import {HttprBody} from '../HttprBody';
import {PlainObject} from '../../Type/PlainObject';
import {MediaTypes} from '../../Enum/MediaTypes';
import {urlEncode} from '../HttprUtils';

/**
 * Form body for URL Encoded data media.
 */
export class Form extends HttprBody<PlainObject> {
  public constructor(data: PlainObject) {
    super(MediaTypes.FORM_URLENCODED, data);
  }

  /**
   * Serialize body content as string.
   *
   * @return {string} body.
   */
  public toString(): string {
    return urlEncode(this._content);
  }
}
