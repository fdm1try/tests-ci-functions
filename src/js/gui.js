export default function getHealthStatus(hero) {
  if (hero.health > 50) return 'healthy';
  return hero.health > 15 ? 'wounded' : 'critical';
}
