import handler from '../../src/helpers/getData';

describe('getData helper', () => {
  beforeEach(() => jest.clearAllMocks());

  const fetchMock = (window.fetch = jest.fn());

  it('should fail getting data', async done => {
    fetchMock.mockRejectedValueOnce('data retrieval failed');

    try {
      await handler('random url');
      done.fail();
    } catch (error) {
      expect(fetchMock).toHaveBeenCalledTimes(1);
      expect(fetchMock).toHaveBeenCalledWith('random url');
      expect(error).toBe('data retrieval failed');
      done();
    }
  });

  it('should pass getting data', async done => {
    fetchMock.mockResolvedValueOnce({ json: () => 'data retrieval successed' });

    const result = await handler('random url');
    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledWith('random url');
    expect(result).toBe('data retrieval successed');
    done();
  });
});
