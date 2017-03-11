import {expect} from 'chai';
import {Httpr} from '../../../../app/Core/Httpr';
import {MockProvider} from '../../../mocks/MockProvider';
import {MockInterceptor} from '../../../mocks/MockInterceptor';

describe('Httpr', () => {
  let http, settings;

  beforeEach(() => {
    http = new Httpr({
      provider: new MockProvider()
    });
  });

  describe('interceptors', () => {
    describe('register()', () => {
      it('should register an interceptor', () => {
        http.register(new MockInterceptor());

        expect(http.interceptors.length).to.equal(1);
      });
    });

    describe('unregister()', () => {
      it('should register an interceptor', () => {
        const interceptor = new MockInterceptor();

        http.register(interceptor).unregister(interceptor);

        expect(http.interceptors.length).to.equal(0);
      });
    });
  });
});
