import Store from '../store';
import timeToMilitaryHelper from './timeToMilitary';
import timeHandlerHelper from './timeHandler';

export default (): void => {
  for (let [index, prayer] of Store.prayers.entries()) {
    const time: string = timeToMilitaryHelper(prayer.english, prayer.time);
    const passed: number | boolean | null = timeHandlerHelper(time, 'isPassed');

    Store.prayers[index].time = time;
    Store.prayers[index].passed = passed;
  }
};
