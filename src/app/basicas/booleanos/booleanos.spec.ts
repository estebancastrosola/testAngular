import { usuarioLogeado } from './booleanos';
describe('Pruebas de booleanos', () => {
  it('Debe de retornar true', () => {
    const resp = usuarioLogeado();
    expect(resp).toBeTruthy();
  });
});
