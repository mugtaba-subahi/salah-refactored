import { state as SState } from '../store';
import convert12To24hrHelper from './convert12To24hr';
import convert24hrToMillisecondHelper from './convert24hrToMillisecond';

export default (): void => {
  console.log('Storee:::BEFORE', SState);

  for (let [index, prayer] of SState.prayers.entries()) {
    const military: string = convert12To24hrHelper(prayer.english, prayer.time);
    const time: number = convert24hrToMillisecondHelper(military);
    const now: number = new Date().getTime();

    SState.prayers[index].time = military;
    SState.prayers[index].passed = now > time;
  }

  console.log('Storee:::AFTER', SState);
};
