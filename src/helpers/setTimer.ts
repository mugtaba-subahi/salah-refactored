import TinyTimer from 'tiny-timer';
import dayjs from 'dayjs';
import { state as State } from '../store';
import { IPrayer } from '../interfaces';
import setNextPrayerHelper from './setNextPrayer';
import convert24hrToMillisecondHelper from './convert24hrToMillisecond';

export default () => {
  const nextPrayer: IPrayer = State().prayers[State().nextPrayerIndex];
  const nextPrayerTime = convert24hrToMillisecondHelper(nextPrayer.time);

  const now: number = new Date().getTime();
  const remainder: number = nextPrayerTime - now;

  const timer = new TinyTimer();
  timer.start(remainder);

  timer.on('tick', (tick: number) => {
    const timeLeft = dayjs('2000-01-01 00:00:00')
      .add(tick, 'ms')
      .format('H[h] m[min] s[s]');

    State().remainder = timeLeft;
  });

  timer.on('done', () => {
    State().prayers[State().nextPrayerIndex].passed = true;
    State().prayers[State().nextPrayerIndex].isNext = false;
    setNextPrayerHelper();
  });
};
