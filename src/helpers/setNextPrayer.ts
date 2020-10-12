// @ts-nocheck
import { PrayerInterface } from '../interfaces';
import Store from '../store';

export default (): void => {
  Store.nextPrayerIndex = Store.prayers.findIndex((item: PrayerInterface) => !item.passed);

  if (Store.nextPrayerIndex === -1) return;

  Store.prayers[Store.nextPrayerIndex].isNext = true;
};
