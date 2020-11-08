import { IApi, IPrayer } from '../interfaces';
import { state as State, read as Read } from '../store';

export default (data: IApi): void => {
  const preparePrayer = (name: string, index: number): IPrayer => ({
    arabic: Read().arabic[index],
    english: name,
    isNext: false,
    passed: false,
    time: data[name.toLocaleLowerCase()]
  });

  const prayers: IPrayer[] = Read().english.map(preparePrayer);
  State().prayers = prayers;
};
