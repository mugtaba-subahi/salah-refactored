jest.mock('convert-time');
jest.mock('../../src/helpers/validateTime.ts');

import convertTime from 'convert-time';
import validateTimeHelper from '../../src/helpers/validateTime';
import handler from '../../src/helpers/convert12To24hr';

describe('convert12To24hr helper', () => {
  beforeEach(() => jest.clearAllMocks());

  const mockConvertTime = convertTime as jest.Mock;
  const mockValidateTimeHelper = validateTimeHelper as jest.Mock;

  it('should fail when passing invalid integer time type', done => {
    mockValidateTimeHelper.mockReturnValueOnce(false);

    try {
      // @ts-expect-error
      handler('any input', 13);
      done.fail();
    } catch (error) {
      expect(error.message).toBe('Invalid time');
      expect(mockConvertTime).toBeCalledTimes(0);

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
      expect(mockConvertTime).toBeCalledTimes(0);
      
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
      expect(mockConvertTime).toBeCalledTimes(0);

      done();
    }
  });

  it('should pass without converting time if Fajr, Sunrise or random input', done => {
    mockValidateTimeHelper.mockReturnValueOnce(true);

    const fajr: string = handler('Fajr', '15:15');
    expect(fajr).toBe('15:15');
    expect(mockConvertTime).toBeCalledTimes(0);

    mockValidateTimeHelper.mockReturnValueOnce(true);

    const sunrise: string = handler('Sunrise', '18:18');
    expect(sunrise).toBe('18:18');
    expect(mockConvertTime).toBeCalledTimes(0);

    mockValidateTimeHelper.mockReturnValueOnce(true);

    const anyInput: string = handler('any input', '18:18');
    expect(anyInput).toBe('18:18');
    expect(mockConvertTime).toBeCalledTimes(0);

    done();
  });

  it('should pass without converting time for Dhuhr if time is before 12pm', done => {
    mockValidateTimeHelper.mockReturnValueOnce(true);

    const time: string = handler('Dhuhr', '10:12');
    expect(time).toBe('10:12');
    expect(mockConvertTime).toBeCalledTimes(0);

    done();
  });

  it('should pass and convert time for Dhuhr if time is at 12pm', done => {
    mockValidateTimeHelper.mockReturnValueOnce(true);
    mockConvertTime.mockReturnValueOnce('12:00');

    const time: string = handler('Dhuhr', '00:00');
    expect(time).toBe('12:00');
    expect(mockConvertTime).toBeCalledTimes(1);

    done();
  });

  it('should pass and convert time for Dhuhr if time is after 12pm', done => {
    mockValidateTimeHelper.mockReturnValueOnce(true);
    mockConvertTime.mockReturnValueOnce('13:35');

    const time: string = handler('Dhuhr', '01:35');
    expect(time).toBe('13:35');
    expect(mockConvertTime).toBeCalledTimes(1);

    done();
  });

  it('should pass and convert time for Asr', done => {
    mockValidateTimeHelper.mockReturnValueOnce(true);
    mockConvertTime.mockReturnValueOnce('14:53');

    const time: string = handler('Asr', '02:53');
    expect(time).toBe('14:53');
    expect(mockConvertTime).toBeCalledTimes(1);

    done();
  });

  it('should pass and convert time for Magrib', done => {
    mockValidateTimeHelper.mockReturnValueOnce(true);
    mockConvertTime.mockReturnValueOnce('18:33');

    const time: string = handler('Magrib', '06:33');
    expect(time).toBe('18:33');
    expect(mockConvertTime).toBeCalledTimes(1);

    done();
  });

  it('should pass and convert time for Isha', done => {
    mockValidateTimeHelper.mockReturnValueOnce(true);
    mockConvertTime.mockReturnValueOnce('21:27');

    const time: string = handler('Isha', '09:27');
    expect(time).toBe('21:27');
    expect(mockConvertTime).toBeCalledTimes(1);

    done();
  });
});
