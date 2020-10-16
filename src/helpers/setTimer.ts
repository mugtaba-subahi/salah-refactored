import TinyTimer from 'tiny-timer';
import dayjs from 'dayjs';
import Store from '../store';
import { IPrayer } from '../interfaces';
import setNextPrayerHelper from './setNextPrayer';
import militaryToMilliseconds from './militaryToMilliseconds';

export default () => {
  const nextPrayer: IPrayer = Store.prayers[Store.nextPrayerIndex];
  const nextPrayerTime = militaryToMilliseconds(nextPrayer.time);

  const now: number = new Date().getTime();
  const remainder = nextPrayerTime - now;

  const timer = new TinyTimer();
  timer.start(remainder);

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
