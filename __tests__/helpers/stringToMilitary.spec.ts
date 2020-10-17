jest.mock('convert-time');
jest.mock('../../src/helpers/validateTime.ts');

import convertTime from 'convert-time';
import validateTimeHelper from '../../src/helpers/validateTime';
import handler from '../../src/helpers/stringToMilitary';

describe('stringToMilitary helper', () => {
  const convertTimeMock = convertTime as jest.Mock;
  const validateTimeHelperMock = validateTimeHelper as jest.Mock;

  afterEach(() => jest.clearAllMocks());

  it('should fail when passing invalid integer time type', done => {
    validateTimeHelperMock.mockReturnValueOnce(false);

    try {
      // @ts-expect-error
      handler('any input', 13);
      done.fail();
    } catch (error) {
      expect(error.message).toBe('Invalid time');
      expect(convertTimeMock).toBeCalledTimes(0);
      done();
    }
  });

  it('should fail when passing invalid object time type', done => {
    try {
      // @ts-expect-error
      handler('any input', {});
      done.fail();
    } catch (error) {
      expect(error.message).toBe('Invalid time');
      expect(convertTimeMock).toBeCalledTimes(0);
      done();
    }
  });

  it('should fail when passing invalid array time type', done => {
    try {
      // @ts-expect-error
      handler('any input', []);
      done.fail();
    } catch (error) {
      expect(error.message).toBe('Invalid time');
      expect(convertTimeMock).toBeCalledTimes(0);

      done();
    }
  });

  it('should pass without converting time if Fajr, Sunrise or random input', done => {
    validateTimeHelperMock.mockReturnValueOnce(true);

    const fajr: string = handler('Fajr', '15:15');
    expect(fajr).toBe('15:15');
    expect(convertTimeMock).toBeCalledTimes(0);

    validateTimeHelperMock.mockReturnValueOnce(true);

    const sunrise: string = handler('Sunrise', '18:18');
    expect(sunrise).toBe('18:18');
    expect(convertTimeMock).toBeCalledTimes(0);

    validateTimeHelperMock.mockReturnValueOnce(true);

    const anyInput: string = handler('any input', '18:18');
    expect(anyInput).toBe('18:18');
    expect(convertTimeMock).toBeCalledTimes(0);

    done();
  });

  it('should pass without converting time for Dhuhr if time is before 12pm', done => {
    validateTimeHelperMock.mockReturnValueOnce(true);

    const time: string = handler('Dhuhr', '10:12');
    expect(time).toBe('10:12');
    expect(convertTimeMock).toBeCalledTimes(0);

    done();
  });

  it('should pass and convert time for Dhuhr if time is at 12pm', done => {
    validateTimeHelperMock.mockReturnValueOnce(true);
    convertTimeMock.mockReturnValueOnce('12:00');

    const time: string = handler('Dhuhr', '00:00');
    expect(time).toBe('12:00');
    expect(convertTimeMock).toBeCalledTimes(1);

    done();
  });

  it('should pass and convert time for Dhuhr if time is after 12pm', done => {
    validateTimeHelperMock.mockReturnValueOnce(true);
    convertTimeMock.mockReturnValueOnce('13:35');

    const time: string = handler('Dhuhr', '01:35');
    expect(time).toBe('13:35');
    expect(convertTimeMock).toBeCalledTimes(1);

    done();
  });

  it('should pass and convert time for Asr', done => {
    validateTimeHelperMock.mockReturnValueOnce(true);
    convertTimeMock.mockReturnValueOnce('14:53');

    const time: string = handler('Asr', '02:53');
    expect(time).toBe('14:53');
    expect(convertTimeMock).toBeCalledTimes(1);

    done();
  });

  it('should pass and convert time for Magrib', done => {
    validateTimeHelperMock.mockReturnValueOnce(true);
    convertTimeMock.mockReturnValueOnce('18:33');

    const time: string = handler('Magrib', '06:33');
    expect(time).toBe('18:33');
    expect(convertTimeMock).toBeCalledTimes(1);

    done();
  });

  it('should pass and convert time for Isha', done => {
    validateTimeHelperMock.mockReturnValueOnce(true);
    convertTimeMock.mockReturnValueOnce('21:27');

    const time: string = handler('Isha', '09:27');
    expect(time).toBe('21:27');
    expect(convertTimeMock).toBeCalledTimes(1);

    done();
  });
});
