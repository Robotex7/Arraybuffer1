describe('Character attack calculations', () => {
  test('Basic attack without stoned at distance 1', () => {
    const magician = new Magician(100);
    expect(magician.attack).toBe(100);
  });

  test('Basic attack without stoned at distance 5', () => {
    const daemon = new Daemon(100);
    daemon.distance = 5;
    expect(daemon.attack).toBe(60);
  });

  test('Attack with stoned effect at distance 2', () => {
    const magician = new Magician(100);
    magician.stoned = true;
    magician.distance = 2;
    expect(magician.attack).toBe(85);  // Здесь рассчитываем как (90 - log2(2) * 5)
  });

  test('Attack drops to zero if penalty is too high', () => {
    const daemon = new Daemon(50);
    daemon.stoned = true;
    daemon.distance = 5;
    expect(daemon.attack).toBe(0);  // Урон может упасть ниже нуля, но мы берем max(0, ...)
  });
});