import axios, { AxiosResponse } from 'axios';
import md5 from 'md5';
import { ResponseApiContract } from './contracts/ResponseApiContract';

class MarvelServices {
  public async getHeroes(page: number): Promise<ResponseApiContract | null> {
    try {
      const ts = Math.floor(Date.now() / 1000);
      const publicKey = '6572a362ddf84785658746fc402df716';
      const privateKey = '2b93d41f0b28f57b68d5d4950734322724890ecc';
      const params = {
        ts,
        apikey: publicKey,
        hash: md5(ts + privateKey + publicKey),
        offset: page - 1,
        limit: 10,
      };
      const response: AxiosResponse<ResponseApiContract> = await axios.get(
        'http://gateway.marvel.com/v1/public/characters',
        { params },
      );

      return response.data;
    } catch (error) {
      console.error('Get heroes failed:', error);
      return null;
    }
  }
}

export default new MarvelServices();
