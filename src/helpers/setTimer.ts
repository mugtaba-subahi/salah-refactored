// @ts-nocheck

import TinyTimer from 'tiny-timer';
import dayjs from 'dayjs';
import Store from '../store';
import { PrayerInterface } from '../interfaces';
import timeHandlerHelper from './timeHandler';
import setNextPrayerHelper from './setNextPrayer';

// TODO: fix any
export default () => {
  const nextPrayer: PrayerInterface = Store.prayers[Store.nextPrayerIndex];
  const remainderMS = timeHandlerHelper(nextPrayer.time, 'remainder');

  const timer = new TinyTimer();
  timer.start(remainderMS);

  timer.on('tick', (tick: number) => {
    const timeLeft = dayjs('2000-01-01 00:00:00')
      .add(tick, 'ms')
      .format('H[h] m[min] s[s]');

    Store.remainder = timeLeft;
  });

  timer.on('done', () => {
    Store.prayers[Store.nextPrayerIndex].passed = true;
    Store.prayers[Store.nextPrayerIndex].isNext = false;
    setNextPrayerHelper();
  });
};
