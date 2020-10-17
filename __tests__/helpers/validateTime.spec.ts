import handler from '../../src/helpers/validateTime';

fdescribe('validateTime helper', () => {
  it('should fail when passing incorrect time format', done => {
    const isValidTime: boolean = handler('213213');
    expect(isValidTime).toBe(false);

    const isValidTime2: boolean = handler('24:11');
    expect(isValidTime2).toBe(false);

    const isValidTime3: boolean = handler('1:23');
    expect(isValidTime3).toBe(false);

    done();
  });

  it('should fail when passing incorrect time type', done => {
    // @ts-expect-error
    const isValidTime: boolean = handler(123);
    expect(isValidTime).toBe(false);

    // @ts-expect-error
    const isValidTime2: boolean = handler({});
    expect(isValidTime2).toBe(false);

    // @ts-expect-error
    const isValidTime3: boolean = handler([]);
    expect(isValidTime3).toBe(false);

    done();
  });

  it('should pass when passing correct time format', done => {
    const isValidTime: boolean = handler('23:59');
    expect(isValidTime).toBe(true);
    done();
  });
});
