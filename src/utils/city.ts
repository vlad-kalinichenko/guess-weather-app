import { City } from 'cities.json';
import { generateRandomInt } from '@/utils';

export const getRandomCities: (array: City[], count: number) => any[] = (
  array,
  count
) => {
  const randomIndexes: number[] = [];

  while (randomIndexes.length < count) {
    const randomIndex = generateRandomInt(0, array.length);
    if (!randomIndexes.includes(randomIndex)) {
      randomIndexes.push(randomIndex);
    }
  }

  return randomIndexes.map((index) => array[index]);
};
