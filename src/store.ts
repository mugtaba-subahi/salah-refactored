import { reactive, readonly } from 'vue';

export const state = reactive({
  remainder: '...',
  nextPrayerIndex: -1,
  prayers: [{ arabic: '', english: '', isNext: false, passed: false, time: '' }]
});

export const read = readonly({
  english: ['Fajr', 'Sunrise', 'Dhuhr', 'Asr', 'Magrib', 'Isha'],
  arabic: ['العشاء', 'المغرب', 'العصر', 'الظهر', 'الشروق', 'الفجر'].reverse()
});
