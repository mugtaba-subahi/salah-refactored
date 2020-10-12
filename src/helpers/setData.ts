import { IApiPrayers, IPrayer } from '../interfaces';
import Store from '../store';

export default async (): Promise<void> => {
  // const key: string = '2a99f189-6e3b-4015-8fb8-ff277642561d';
  // const url: string = `https://www.londonprayertimes.com/api/times/?format=json&key=${key}`;
  // const response = await fetch(url);
  // const data: IApiPrayers = await response.json();

  const data: IApiPrayers = {
    fajr: '17:22',
    fajr_jamat: '17:22',
    sunrise: '17:23',
    dhuhr: '17:24',
    dhuhr_jamat: '17:22',
    asr: '06:23',
    asr_2: '17:22',
    asr_jamat: '17:22',
    date: '2020-17:22',
    magrib: '17:26',
    magrib_jamat: '17:22',
    isha: '17:27',
    isha_jamat: '00:01',
    city: 'london'
  };

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
