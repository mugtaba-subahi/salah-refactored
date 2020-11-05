import TinyTimer from 'tiny-timer';
import dayjs from 'dayjs';
import { state as SState } from '../store';
import { IPrayer } from '../interfaces';
import setNextPrayerHelper from './setNextPrayer';
import convert24hrToMillisecondHelper from './convert24hrToMillisecond';

export default () => {
  const nextPrayer: IPrayer = SState.prayers[SState.nextPrayerIndex];
  const nextPrayerTime = convert24hrToMillisecondHelper(nextPrayer.time);

  const now: number = new Date().getTime();
  const remainder: number = nextPrayerTime - now;

  const timer = new TinyTimer();
  timer.start(remainder);

  timer.on('tick', (tick: number) => {
    const timeLeft = dayjs('2000-01-01 00:00:00')
      .add(tick, 'ms')
      .format('H[h] m[min] s[s]');

    SState.remainder = timeLeft;
  });

  timer.on('done', () => {
    SState.prayers[SState.nextPrayerIndex].passed = true;
    SState.prayers[SState.nextPrayerIndex].isNext = false;
    setNextPrayerHelper();
  });
};
