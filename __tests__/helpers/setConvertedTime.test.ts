jest.mock('../../src/store');
jest.mock('../../src/helpers/convert12To24hr');
jest.mock('../../src/helpers/convert24hrToMillisecond');

import { state as State } from '../../src/store';
import convert12To24hrHelper from '../../src/helpers/convert12To24hr';
import convert24hrToMillisecondHelper from '../../src/helpers/convert24hrToMillisecond';
import handler from '../../src/helpers/setConvertedTime';

describe('setConvertedTime helper', () => {
  beforeEach(() => jest.clearAllMocks());

  const mockState = State as jest.Mock;
  const mockConvert12To24hrHelper = convert12To24hrHelper as jest.Mock;
  const mockConvert24hrToMillisecondHelper = convert24hrToMillisecondHelper as jest.Mock;

  it('should set passed to false', done => {
    mockState.mockReturnValue({ prayers: [{ english: 'any input', time: 'any input' }] });
    mockConvert12To24hrHelper.mockReturnValueOnce('any output');
    mockConvert24hrToMillisecondHelper.mockReturnValueOnce(Number.POSITIVE_INFINITY);

    handler();

    expect(mockState).toHaveBeenCalledTimes(3);
    expect(mockConvert12To24hrHelper).toHaveBeenCalledTimes(1);
    expect(mockConvert24hrToMillisecondHelper).toHaveBeenCalledTimes(1);
    expect(State().prayers.length).toBe(1);
    expect(State().prayers[0].time).toBe('any output');
    expect(State().prayers[0].time).toBe('any output');

    done();
  });

  it('should set passed to true', done => {
    mockState.mockReturnValue({ prayers: [{ english: 'any input', time: 'any input' }] });
    mockConvert12To24hrHelper.mockReturnValueOnce('any output');
    mockConvert24hrToMillisecondHelper.mockReturnValueOnce(Number.NEGATIVE_INFINITY);

    handler();

    expect(mockState).toHaveBeenCalledTimes(3);
    expect(mockConvert12To24hrHelper).toHaveBeenCalledTimes(1);
    expect(mockConvert24hrToMillisecondHelper).toHaveBeenCalledTimes(1);
    expect(State().prayers.length).toBe(1);
    expect(State().prayers[0].passed).toBe(true);
    expect(State().prayers[0].time).toBe('any output');

    done();
  });
});
