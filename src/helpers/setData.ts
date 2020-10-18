import { IApi, IPrayer } from '../interfaces';
import Store from '../store';

export default (data: IApi): void => {
  const preparePrayer = (name: string, index: number): IPrayer => ({
    arabic: Store.arabic[index],
    english: name,
    isNext: false,
    passed: false,
    time: data[name.toLocaleLowerCase()]
  });

  const prayers: IPrayer[] = Store.english.map(preparePrayer);
  Store.prayers = prayers;
};
