import { reactive } from 'vue';

export default reactive({
  remainder: '...',
  nextPrayerIndex: -1,
  prayers: [],
  english: ['Fajr', 'Sunrise', 'Dhuhr', 'Asr', 'Magrib', 'Isha'],
  arabic: ['العشاء', 'المغرب', 'العصر', 'الظهر', 'الشروق', 'الفجر'].reverse()
});
