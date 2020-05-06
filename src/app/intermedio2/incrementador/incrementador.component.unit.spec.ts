import { IncrementadorComponent } from './incrementador.component';

describe('Incrementador pruebas unitarias', () => {
  let component: IncrementadorComponent;

  beforeEach(() => {
    component = new IncrementadorComponent();
  });

  it('No debe de pasar de 100 el progreso', () => {
    component.progreso = 50;

    expect(component.progreso).toBe(50);
  });
});
