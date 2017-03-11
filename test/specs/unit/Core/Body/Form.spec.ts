import {expect} from 'chai';
import {Form} from '../../../../../app/Core/Body/Form';
import {urlDecode} from '../../../../../app/Core/HttprUtils';

describe('Body: Form', () => {
  const testCases = [
    {
      raw: {
        foo: 'bar'
      },
      serialized: 'foo=bar'
    }, {
      raw: {
        foo: 'bar',
        123: 456
      },
      serialized: 'foo=bar&123=456'
    }
  ];

  testCases.forEach((value, index) => {
    it(`should serialize a Form ${index}`, () => {
      const body = new Form(value.raw);

      expect(urlDecode(body.toString())).to.deep.equal(urlDecode(value.serialized));
    });
  });
});
