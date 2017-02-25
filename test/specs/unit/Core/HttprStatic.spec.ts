import {expect} from 'chai';
import {HttprStatic} from '../../../../app/Core/HttprStatic';
import {Httpr} from '../../../../app/Core/Httpr';
import {HttpMethods} from '../../../../app/Enum/HttpMethods';
import {MediaTypes} from '../../../../app/Enum/MediaTypes';
import {HttpHeaders} from '../../../../app/Enum/HttpHeaders';
import {HttprProvider} from '../../../../app/Core/HttprProvider';
import {HttpRequestSettings} from '../../../../app/Type/HttpRequestSettings';

describe('HttprStatic', () => {
  let instance: Httpr;

  class DryProvider implements HttprProvider {
    request(settings: HttpRequestSettings): Promise<any> {
      return undefined;
    }
  }

  beforeEach(() => {
    instance = new Httpr({
      provider: new DryProvider()
    });
  });

  describe('build()', () => {
    it('should build a default request', () => {
      let expected = HttprStatic.build(instance, null, null);

      expect(expected).to.deep.equal({
        url: '',
        method: HttpMethods.GET,
        headers: {},
        params: {}
      });
    });

    it('should build a POST request with application/json', () => {
      let expected = HttprStatic.build(instance, HttpMethods.POST, null, null, null, {
        foo: 'bar'
      });

      expect(expected.headers).to.deep.equal({
        [HttpHeaders.CONTENT_TYPE]: MediaTypes.APPLICATION_JSON
      });
      expect(expected.body).to.equal(JSON.stringify({
        foo: 'bar'
      }));
    });
  });
});
