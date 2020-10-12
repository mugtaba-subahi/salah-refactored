// @ts-nocheck
import { IApiPrayers, IPrayer } from '../interfaces';

import Store from '../store';
import timeHandlerHelper from './timeHandler';
import timeToMilitary from './timeToMilitary';

export default async (): Promise<IPrayer[]> => {
  const key: string = '2a99f189-6e3b-4015-8fb8-ff277642561d';
  const url: string = `https://www.londonprayertimes.com/api/times/?format=json&key=${key}`;
  const response = await fetch(url);
  const data: IApiPrayers = await response.json();

  // const data: IApiPrayers = {
  //   fajr: '00:14',
  //   fajr_jamat: '00:14',
  //   sunrise: '00:14',
  //   dhuhr: '00:14',
  //   dhuhr_jamat: '00:14',
  //   asr: '00:14',
  //   asr_2: '00:14',
  //   asr_jamat: '00:14',
  //   date: '2020-00:14',
  //   magrib: '00:14',
  //   magrib_jamat: '00:14',
  //   isha: '01:31',
  //   isha_jamat: '00:01',
  //   city: 'london'
  // };

  const prayers = [];

  Store.english.map((name, index) => {
    const prayer = {
      arabic: Store.arabic[index],
      english: name,
      isNext: false,
      passed: false,
      time: data[name.toLocaleLowerCase()]
    };

    prayers.push(prayer);
  });

  Store.prayers = prayers;
};
