jest.mock('vue', () => ({
  reactive: jest.fn(() => ({ remainder: 'any output' })),
  readonly: jest.fn(() => ({ english: ['any output'] }))
}));

import { reactive, readonly } from 'vue';
import * as handler from '../../src/store';

describe('store', () => {
  it('should get state data', done => {
    const state = handler.state();

    expect(state.remainder).toBe('any output');
    expect(reactive).toBeCalledTimes(1);

    done();
  });

  it('should get read data', done => {
    const read = handler.read();

    expect(read.english[0]).toBe('any output');
    expect(readonly).toBeCalledTimes(1);

    done();
  });
});
