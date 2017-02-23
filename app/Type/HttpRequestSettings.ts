import {Map} from '../Type/Map';
import {HttpMethod} from './HttpMethod';
import {PlainObject} from './PlainObject';

export type HttpRequestSettings = {
  method: HttpMethod,
  url: string,
  params: PlainObject,
  headers: Map<string>,
  body?: any
};
