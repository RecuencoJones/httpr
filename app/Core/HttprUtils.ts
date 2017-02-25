import * as _ from 'lodash';
import {PlainObject} from '../Type/PlainObject';
import urljoin = require('url-join');

/**
 * Encode plain object into query string.
 *
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

/**
 * Join two URL parts.
 *
 * @param {Array<string>} parts - URL parts.
 * @return {string} joined URL.
 */
export function urlJoin(...parts: Array<string>) {
  return urljoin(...parts.filter(part => !!part));
}
