import { reactive, readonly } from 'vue';

const mutable = reactive({
  remainder: '...',
  nextPrayerIndex: -1,
  prayers: [{ arabic: '', english: '', isNext: false, passed: false, time: '' }]
});

const immutable = readonly({
  english: ['Fajr', 'Sunrise', 'Dhuhr', 'Asr', 'Magrib', 'Isha'],
  arabic: ['العشاء', 'المغرب', 'العصر', 'الظهر', 'الشروق', 'الفجر'].reverse()
});

export const state = () => mutable;
export const read = () => immutable;
