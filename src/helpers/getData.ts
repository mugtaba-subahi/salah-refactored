import { ApiPrayers, Prayer } from '../interfaces';

import timeHandler from './timeHandler';
import timeToMilitary from './timeToMilitary';

export default async (): Promise<Prayer[]> => {
  // const key: string = '2a99f189-6e3b-4015-8fb8-ff277642561d';
  // const url: string = `https://www.londonprayertimes.com/api/times/?format=json&key=${key}`;
  // const response = await fetch(url);
  // const data: ApiPrayers = await response.json();
  // console.log(data);

  const data: ApiPrayers = {
    asr: '14:39',
    asr_2: '04:23',
    asr_jamat: '04:45',
    city: 'london',
    date: '2020-10-11',
    dhuhr: '14:52',
    dhuhr_jamat: '01:30',
    fajr: '01:49',
    fajr_jamat: '06:14',
    isha: '07:39',
    isha_jamat: '08:00',
    magrib: '06:18',
    magrib_jamat: '06:25',
    sunrise: '07:15'
  };

  const prayerNamesEnglish: string[] = ['Fajr', 'Sunrise', 'Dhuhr', 'Asr', 'Magrib', 'Isha'];
  const prayerNamesArabic: string[] = ['العشاء', 'المغرب', 'العصر', 'الظهر', 'الشروق', 'الفجر'].reverse();

  const prayers: Prayer[] = [];

  for (let [index, name] of prayerNamesEnglish.entries()) {
    const time: string = timeToMilitary(name, data[name.toLocaleLowerCase()]);
    const passed: number | boolean | null = timeHandler(time, 'isPassed');

    const prayer: Prayer = { time, passed, english: name, arabic: prayerNamesArabic[index] };
    prayers.push(prayer);
  }

  return prayers;
};
