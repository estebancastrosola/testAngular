import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterMedicoComponent } from './router-medico.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, EMPTY, from } from 'rxjs';

class FakeRouter {
  navigate(params) {}
}

class FakeActivatedRoute {
  // params: Observable<any> = EMPTY;
  params: Observable<any> = from([{ id: 'nuevo' }]);
}

describe('RouterMedicoComponent', () => {
  let component: RouterMedicoComponent;
  let fixture: ComponentFixture<RouterMedicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RouterMedicoComponent],
      providers: [
        { provide: Router, useClass: FakeRouter },
        { provide: ActivatedRoute, useClass: FakeActivatedRoute },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe de redireccionar a /medico cuando se guarde', () => {
    const router = TestBed.get(Router);
    const spy = spyOn(router, 'navigate');

    component.guardarMedico();

    // Los espias sirven tanto para recrear llamadas al back como para usar librerias y servicios
    // que sabemos que funcionan, y tan solo queremos saber si se llama correctamente
    expect(spy).toHaveBeenCalledWith(['medico', '123']);
  });

  it('Debe colocar el id = nuevo', () => {
    expect(component.id).toBe('nuevo');
  });
});
