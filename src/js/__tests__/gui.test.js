import getHealthStatus from '../gui';

const dataList = [
  [
    'health level 70%',
    { name: 'Маг', health: 70 },
    'healthy',
  ], [
    'health level 40%',
    { name: 'Лучник', health: 40 },
    'wounded',
  ], [
    'health level 10%',
    { name: 'Мечник', health: 10 },
    'critical',
  ],
];

const handler = test.each(dataList);
handler('Test player health status, %s', (_, hero, expected) => {
  const result = getHealthStatus(hero);
  expect(result).toBe(expected);
});
