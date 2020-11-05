import { IPrayer } from '../interfaces';
import { state } from '../store';
import setTimerHelper from './setTimer';

export default (): void => {
  state.nextPrayerIndex = state.prayers.findIndex((item: IPrayer) => !item.passed);

  if (state.nextPrayerIndex === -1) return;

  state.prayers[state.nextPrayerIndex].isNext = true;
  setTimerHelper();
};
