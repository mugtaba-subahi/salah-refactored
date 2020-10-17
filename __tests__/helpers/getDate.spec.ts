import handler from '../../src/helpers/getDate';

describe('getDate helper', () => {
  it('should get date', done => {
    const result = handler;
    expect(typeof result).toBe('string');
    done();
  });
});
