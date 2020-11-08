jest.mock('vue', () => ({
  reactive: jest.fn(() => ({ remainder: 'any output' })),
  readonly: jest.fn(() => ({ english: ['any output'] }))
}));

import { reactive, readonly } from 'vue';
import { state as State, read as Read } from '../../src/store';

describe('store', () => {
  it('should get state data', done => {
    const state = State();

    expect(state.remainder).toBe('any output');
    expect(reactive).toBeCalledTimes(1);

    done();
  });

  it('should get read data', done => {
    const read = Read();

    expect(read.english[0]).toBe('any output');
    expect(readonly).toBeCalledTimes(1);

    done();
  });
});
