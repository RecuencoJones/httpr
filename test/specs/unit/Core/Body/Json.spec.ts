import {expect} from 'chai';
import {Json} from '../../../../../app/Core/Body/Json';

describe('Body: Json', () => {
  const testCases = [
    {
      raw: {
        foo: 'bar'
      },
      serialized: '{"foo":"bar"}'
    }, {
      raw: [
        123,
        456,
        789
      ],
      serialized: '[123,456,789]'
    }
  ];

  testCases.forEach((value, index) => {
    it(`should serialized a JSON ${index}`, () => {
      const body = new Json(value.raw);

      expect(JSON.parse(body.toString())).to.deep.equal(JSON.parse(value.serialized));
    })
  });
});
