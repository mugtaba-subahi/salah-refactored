import convertTime from 'convert-time';

export default (time: string, format: string): number | boolean | null => {
  const now = new Date();
  const currentTimeMS = now.getTime();
  const nextTimeMS = convertTime(time, 'hh:mm').valueOf();

  switch (format) {
    case 'remainder':
      return nextTimeMS - currentTimeMS;
    case 'isPassed':
      return currentTimeMS > nextTimeMS;
    default:
      return null;
  }
};
