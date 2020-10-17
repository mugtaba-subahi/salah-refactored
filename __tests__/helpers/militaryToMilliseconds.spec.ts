import handler from '../../src/helpers/militaryToMilliseconds';

describe('militaryToMilliseconds helper', () => {
  it('should fail when passing invalid time type', done => {
    try {
      // @ts-expect-error
      handler(13);
      done.fail();
    } catch (error) {
      expect(error.message).toBe('Invalid time format');
      done();
    }

    try {
      // @ts-expect-error
      handler({});
      done.fail();
    } catch (error) {
      expect(error.message).toBe('Invalid time format');
      done();
    }

    try {
      // @ts-expect-error
      handler([]);
      done.fail();
    } catch (error) {
      expect(error.message).toBe('Invalid time format');
      done();
    }
  });

  it('should fail when passing invalid time format', done => {
    try {
      handler('100');
      done.fail();
    } catch (error) {
      expect(error.message).toBe('Invalid time format');
      done();
    }

    try {
      handler('100:10');
      done.fail();
    } catch (error) {
      expect(error.message).toBe('Invalid time format');
      done();
    }

    try {
      handler('66:66');
      done.fail();
    } catch (error) {
      expect(error.message).toBe('Invalid time format');
      done();
    }
  });

  it('should pass when passing correct military time format', done => {
    const result: number = handler('22:10');
    expect(typeof result).toBe('number');
    done();
  });
});
