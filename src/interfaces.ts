export interface ApiPrayers {
  [key: string]: any;
  city: string;
  date: string;
  fajr: string;
  fajr_jamat: string;
  sunrise: string;
  dhuhr: string;
  dhuhr_jamat: string;
  asr: string;
  asr_2: string;
  asr_jamat: string;
  magrib: string;
  magrib_jamat: string;
  isha: string;
  isha_jamat: string;
}

export interface Prayer {
  time: string;
  passed: any; // CHANGE THIS
  english: string;
  arabic: string;
}
