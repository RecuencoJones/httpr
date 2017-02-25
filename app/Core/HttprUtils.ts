import * as _ from 'lodash';
import {PlainObject} from '../Type/PlainObject';

/**
 * Encode plain object into query string.
 * @param {PlainObject} object - hash of items.
 * @returns {string} encoded query string.
 */
export function urlEncode(object: PlainObject): string {
  return _.chain(object)
  .toPairs()
  .map((pair) => pair.join('='))
  .join('&')
  .value();
}
