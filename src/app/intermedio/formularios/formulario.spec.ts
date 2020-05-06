import { FormularioRegister } from './formulario';
import { FormBuilder } from '@angular/forms';
describe('Formularios', () => {
  let componente: FormularioRegister;

  beforeEach(() => {
    componente = new FormularioRegister(new FormBuilder());
  });

  it('Debe de crear un formulario con 2 campos (email y password)', () => {
    expect(componente.form.contains('email')).toBeTruthy();
    expect(componente.form.contains('password')).toBeTruthy();
  });

  it('El email debe de ser obligatorio', () => {
    const control = componente.form.get('email');

    control.setValue('');

    expect(control.valid).toBeFalsy();

    control.setValue('email@gmail.com');

    expect(control.valid).toBeTruthy();
  });

  it('El email debe de ser un email valido', () => {
    const control = componente.form.get('email');

    control.setValue('correoinvalido');

    expect(control.valid).toBeFalsy();

    control.setValue('correovalido@gmail.com');

    expect(control.valid).toBeTruthy();
  });
});
