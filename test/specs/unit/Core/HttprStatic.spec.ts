import {expect} from 'chai';
import {HttprStatic} from '../../../../app/Core/HttprStatic';
import {Httpr} from '../../../../app/Core/Httpr';
import {HttpMethods} from '../../../../app/Enum/HttpMethods';
import {MediaTypes} from '../../../../app/Enum/MediaTypes';
import {HttpHeaders} from '../../../../app/Enum/HttpHeaders';
import {MockProvider} from '../../../mocks/MockProvider';
import {Json} from '../../../../app/Core/Body/Json';
import {Form} from '../../../../app/Core/Body/Form';
import {HttprBody} from '../../../../app/Core/HttprBody';

describe('HttprStatic', () => {
  let instance: Httpr;

  beforeEach(() => {
    instance = new Httpr({
      provider: new MockProvider()
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

    it('should build a POST request with text/plain', () => {
      let expected = HttprStatic.build(instance, HttpMethods.POST, null, null, null, 'foo');

      expect(expected.headers).to.deep.equal({
        [HttpHeaders.CONTENT_TYPE]: MediaTypes.TEXT_PLAIN
      });
      expect(expected.body).to.equal('foo');
    });

    it('should build a POST request with Json body', () => {
      let expected = HttprStatic.build(instance, HttpMethods.POST, null, null, null, new Json({
        foo: 'bar'
      }));

      expect(expected.headers).to.deep.equal({
        [HttpHeaders.CONTENT_TYPE]: MediaTypes.APPLICATION_JSON
      });
      expect(expected.body).to.equal(JSON.stringify({
        foo: 'bar'
      }));
    });

    it('should build a POST request with Form body', () => {
      let expected = HttprStatic.build(instance, HttpMethods.POST, null, null, null, new Form({
        foo: 'bar'
      }));

      expect(expected.headers).to.deep.equal({
        [HttpHeaders.CONTENT_TYPE]: MediaTypes.FORM_URLENCODED
      });
      expect(expected.body).to.equal('foo=bar');
    });

    it('should build a POST request with custom type body', () => {
      type CustomType = {
        foo: string;
        bar: number;
      };

      class CustomBody extends HttprBody<CustomType> {
        constructor(data: CustomType) {
          super('x-custom/type', data);
        }

        public toString(): string {
          return 'custom';
        }
      }

      let expected = HttprStatic.build(instance, HttpMethods.POST, null, null, null, new CustomBody({
        foo: 'foo',
        bar: 123
      }));

      expect(expected.headers).to.deep.equal({
        [HttpHeaders.CONTENT_TYPE]: 'x-custom/type'
      });
      expect(expected.body).to.equal('custom');
    });
  });
});
