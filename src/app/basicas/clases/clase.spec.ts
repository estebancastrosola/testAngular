import { Jugador } from './clase';
describe('Pruebas de clases', () => {
  //  const jugador = new Jugador();
  let jugador = new Jugador();

  // Ciclos de vida de las pruebas
  beforeAll(() => {
    console.log('BeforeAll');
  });

  beforeEach(() => {
    // jugador.hp = 100;
    jugador = new Jugador();
    console.log('BeforeEach');
  });

  afterAll(() => {
    console.log('AfterAll');
  });

  afterEach(() => {
    console.log('AfterEach');
  });

  it('Debe de retornar 80 de hp si recibe 20 de danio', () => {
    // const jugador = new Jugador();
    const resp = jugador.recibeDanio(20);

    expect(resp).toBe(80);
  });
  it('Debe de retornar 50 de hp si recibe 50 de danio', () => {
    // const jugador = new Jugador();
    const resp = jugador.recibeDanio(50);

    expect(resp).toBe(50);
  });
  it('Debe de retornar 0 de hp si recibe 100 de danio', () => {
    // const jugador = new Jugador();
    const resp = jugador.recibeDanio(100);

    expect(resp).toBe(0);
  });
});
