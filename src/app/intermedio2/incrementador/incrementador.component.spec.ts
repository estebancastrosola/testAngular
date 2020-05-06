import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncrementadorComponent } from './incrementador.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('IncrementadorComponent', () => {
  let component: IncrementadorComponent;
  let fixture: ComponentFixture<IncrementadorComponent>;

  beforeEach(async(() => {
    // TestBed.configureTestingModule({
    //   declarations: [ IncrementadorComponent ]
    // })
    // .compileComponents();
  }));

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IncrementadorComponent],
      imports: [FormsModule],
    });

    fixture = TestBed.createComponent(IncrementadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debe de crear un incrementador component', () => {
    expect(component).toBeTruthy();
  });

  it('Debe de mostrar la leyenda ', () => {
    component.leyenda = 'Progreso de carga';
    fixture.detectChanges(); // disparar la detección de cambios para actualizar los HTMLs, hay que hacerlo manual aquí

    const elem: HTMLElement = fixture.debugElement.query(By.css('h3'))
      .nativeElement;

    expect(elem.innerHTML).toContain('Progreso de carga');
  });

  it('Debe de mostrar en el input el valor del progreso', async(() => {
    // Importante este async porque si no, no ejecuta el expect
    component.cambiarValor(5);
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      const input: HTMLInputElement = fixture.debugElement.query(
        By.css('input')
      ).nativeElement;
      expect(input.value).toBe('55');
    });
  }));

  it('Debe de incrementar/decrementar en 5 con un click en el boton', () => {
    const botones = fixture.debugElement.queryAll(By.css('.btn-primary'));

    botones[0].triggerEventHandler('click', null);
    expect(component.progreso).toBe(45);

    botones[1].triggerEventHandler('click', null);
    expect(component.progreso).toBe(50);
  });

  it('El indicador del progreso debe de ser 45 tras pulsar el botón decrementar', () => {
    const botones = fixture.debugElement.queryAll(By.css('.btn-primary'));

    botones[0].triggerEventHandler('click', null);
    fixture.detectChanges();

    const elem: HTMLElement = fixture.debugElement.query(By.css('h3'))
      .nativeElement;

    expect(elem.innerHTML).toContain('45');
  });
});
