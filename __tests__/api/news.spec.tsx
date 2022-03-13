import api from '../../pages/api/news';

const mockRes: any = {
  status: jest.fn(() => mockRes),
  json: jest.fn(() => mockRes),
};

global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve('mockData'),
})) as jest.Mock;

describe('news api', () => {
  it('renders correctly', async () => {
    const mockReq: any = {
      query: {
        query: 'queryString',
      },
    };

    await api(mockReq, mockRes);

    expect(global.fetch).toHaveBeenCalledWith('https://newsapi.org/v2/everything?apiKey=testapikey&q=queryString');
    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.json).toHaveBeenCalledWith('mockData');
  });
});
