import { IPrayer } from '../interfaces';
import { state as State } from '../store';
import setTimerHelper from './setTimer';

export default (): void => {
  State().nextPrayerIndex = State().prayers.findIndex((item: IPrayer) => !item.passed);

  if (State().nextPrayerIndex === -1) return;

  State().prayers[State().nextPrayerIndex].isNext = true;
  setTimerHelper();
};
