import Store from '../store';
import convert12To24hr from './convert12To24hr';
import convert24hrToMillisecondHelper from './convert24hrToMillisecond';

export default (): void => {
  for (let [index, prayer] of Store.prayers.entries()) {
    const military: string = convert12To24hr(prayer.english, prayer.time);
    const time: number = convert24hrToMillisecondHelper(military);
    const now: number = new Date().getTime();

    Store.prayers[index].time = military;
    Store.prayers[index].passed = now > time;
  }
};
