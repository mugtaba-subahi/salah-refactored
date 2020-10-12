import { IPrayer } from '../interfaces';
import Store from '../store';

export default (): void => {
  Store.nextPrayerIndex = Store.prayers.findIndex((item: IPrayer) => !item.passed);

  if (Store.nextPrayerIndex === -1) return;

  Store.prayers[Store.nextPrayerIndex].isNext = true;
};
