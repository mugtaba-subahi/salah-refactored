import { IApi, IPrayer } from '../interfaces';
import { state as SState, read as SRead } from '../store';

export default (data: IApi): void => {
  const preparePrayer = (name: string, index: number): IPrayer => ({
    arabic: SRead.arabic[index],
    english: name,
    isNext: false,
    passed: false,
    time: data[name.toLocaleLowerCase()]
  });

  const prayers: IPrayer[] = SRead.english.map(preparePrayer);
  SState.prayers = prayers;
};
