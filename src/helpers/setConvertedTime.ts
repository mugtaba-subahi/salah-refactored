import Store from '../store';
import stringToMilitaryHelper from './stringToMilitary';
import militaryToMillisecondsHelper from './militaryToMilliseconds';

export default (): void => {
  for (let [index, prayer] of Store.prayers.entries()) {
    const military: string = stringToMilitaryHelper(prayer.english, prayer.time);
    const time = militaryToMillisecondsHelper(military);
    const now: number = new Date().getTime();

    Store.prayers[index].time = military;
    Store.prayers[index].passed = now > time;
  }
};
