import { TestBed, ComponentFixture } from '@angular/core/testing';
import { MedicoComponent } from './medico.component';
import { MedicoService } from './medico.service';
import { HttpClientModule } from '@angular/common/http';

// PRUEBAS DE INTEGRACION

describe('Medico component 2', () => {
  let component: MedicoComponent;
  let fixture: ComponentFixture<MedicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicoComponent],
      providers: [MedicoService],
      imports: [HttpClientModule],
    });

    // Crea todo el componente con el html, el DOM, hacer jquerys para navegar en el DOM etc etc
    fixture = TestBed.createComponent(MedicoComponent);
    component = fixture.componentInstance;
  });

  it('Debe de crearse el componente', () => {
    expect(component).toBeTruthy();
  });

  it('Debe de retornar el nombre del medico', () => {
    const nombre = 'Juan';
    const mensaje = component.saludarMedico(nombre);
    expect(mensaje).toContain(nombre);
  });
});
