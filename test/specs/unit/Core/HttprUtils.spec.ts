import {expect} from 'chai';
import {urlJoin, urlEncode} from '../../../../app/Core/HttprUtils';

describe('HttprUtils', () => {
  describe('urlEncode()', () => {
    it('should encode a hash of strings', () => {
      const params = {
        foo: 'bar',
        qux: 'quz'
      };

      expect(urlEncode(params)).to.equal('foo=bar&qux=quz');
    });

    it('should encode a hash of numbers', () => {
      const params = {
        foo: 123,
        qux: 456
      };

      expect(urlEncode(params)).to.equal('foo=123&qux=456');
    });

    it('should encode a hash of booleans', () => {
      const params = {
        foo: true,
        qux: false
      };

      expect(urlEncode(params)).to.equal('foo=true&qux=false');
    });

    it('should encode an array of primitives', () => {
      const params = {
        foo: [1, 'foo', true]
      };

      expect(urlEncode(params)).to.equal('foo=1,foo,true');
    });
  });

  describe('urlJoin()', () => {
    it('should join two url paths 1', () => {
      const paths = ['foo', 'bar'];

      expect(urlJoin(...paths)).to.equal('foo/bar');
    });

    it('should join two url paths 2', () => {
      const paths = ['foo', '/bar'];

      expect(urlJoin(...paths)).to.equal('foo/bar');
    });

    it('should join two url paths 3', () => {
      const paths = ['foo/', 'bar'];

      expect(urlJoin(...paths)).to.equal('foo/bar');
    });

    it('should join two url paths 4', () => {
      const paths = ['foo/', '/bar'];

      expect(urlJoin(...paths)).to.equal('foo/bar');
    });

    it('should join two url paths 5', () => {
      const paths = ['foo//', '//bar'];

      expect(urlJoin(...paths)).to.equal('foo/bar');
    });

    it('should join two url paths 6', () => {
      const paths = ['/foo', 'bar'];

      expect(urlJoin(...paths)).to.equal('/foo/bar');
    });

    it('should join two url paths 8', () => {
      const paths = ['foo', 'bar/'];

      expect(urlJoin(...paths)).to.equal('foo/bar/');
    });

    it('should join two url paths and not trim left slashes', () => {
      const paths = ['//foo', 'bar'];

      expect(urlJoin(...paths)).to.equal('//foo/bar');
    });

    it('should join two url paths and trim right slashes', () => {
      const paths = ['foo', 'bar//'];

      expect(urlJoin(...paths)).to.equal('foo/bar/');
    });

    it('should join two url paths with protocol 1', () => {
      const paths = ['http://foo', 'bar'];

      expect(urlJoin(...paths)).to.equal('http://foo/bar');
    });

    it('should join two url paths with protocol 2', () => {
      const paths = ['http:', 'foo', 'bar'];

      expect(urlJoin(...paths)).to.equal('http://foo/bar');
    });
  });
});
