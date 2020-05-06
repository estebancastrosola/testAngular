import { obtenerRobots } from './arreglos';
describe('Pruebas de arreglos', () => {
  it('Debe de retornar al menos 3 robots', () => {
    const resp = obtenerRobots();
    expect(resp.length).toBeGreaterThanOrEqual(3);
  });
  xit('Debe de existir MeganMan y Ultron', () => {
    const resp = obtenerRobots();
    expect(resp).toContain('MegaMan');
    expect(resp).toContain('Ultron');
  });
});
