import handler from '../src/helpers/militaryToMilliseconds';

describe('militaryToMilliseconds helper', () => {
  it('should fail when passing invalid time format', done => {
    const result: number = handler('100');
    expect(result).toBe(NaN);
    done();
  });

  it('should fail when passing invalid time type', done => {
    try {
      // @ts-expect-error
      handler(13);
      done.fail();
    } catch (error) {
      expect(error).toBeInstanceOf(TypeError);
      done();
    }
  });

  it('should pass when passing correct military time format', done => {
    const result: number = handler('22:10');
    expect(typeof result).toBe('number');
    done();
  });
});
