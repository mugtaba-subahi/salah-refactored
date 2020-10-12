import { IApi, IPrayer } from '../interfaces';
import Store from '../store';

export default async (): Promise<void> => {
  const key: string = '2a99f189-6e3b-4015-8fb8-ff277642561d';
  const url: string = `https://www.londonprayertimes.com/api/times/?format=json&key=${key}`;
  const response = await fetch(url);
  const data: IApi = await response.json();

  const prayers: IPrayer[] = Store.english.map(
    (name: string, index: number): IPrayer => {
      const prayer = {
        arabic: Store.arabic[index],
        english: name,
        isNext: false,
        passed: false,
        time: data[name.toLocaleLowerCase()]
      };

      return prayer;
    }
  );

  Store.prayers = prayers;
};
