import { mensaje } from './string';
// Agrupar pruebas
// describe('Pruebas de string');

// Prueba
// it('Debe de devolver un string');

describe('Pruebas de strings', () => {
  it('Debe de devolver un string', () => {
    const resp = mensaje('Esteban');
    expect(typeof resp).toBe('string');
  });

  it('Debe de retornar un saludo con el nombre enviado', () => {
    const nombre = 'Juam';
    const resp = mensaje(nombre);

    expect(resp).toContain(nombre);
  });
});
