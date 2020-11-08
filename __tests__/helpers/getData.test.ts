import handler from '../../src/helpers/getData';

describe('getData helper', () => {
  beforeEach(() => jest.clearAllMocks());

  const mockFetch = (window.fetch = jest.fn());

  it('should fail getting data', async done => {
    mockFetch.mockRejectedValueOnce('failed');

    try {
      await handler('random url');
      done.fail();
    } catch (error) {
      expect(mockFetch).toHaveBeenCalledTimes(1);
      expect(mockFetch).toHaveBeenCalledWith('random url');
      expect(error).toBe('failed');

      done();
    }
  });

  it('should pass getting data', async done => {
    mockFetch.mockResolvedValueOnce({ json: () => 'success' });

    const result = await handler('random url');
    expect(mockFetch).toHaveBeenCalledTimes(1);
    expect(mockFetch).toHaveBeenCalledWith('random url');
    expect(result).toBe('success');

    done();
  });
});
