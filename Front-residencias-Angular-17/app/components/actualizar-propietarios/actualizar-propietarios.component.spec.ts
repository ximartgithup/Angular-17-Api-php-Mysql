import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarPropietariosComponent } from './actualizar-propietarios.component';

describe('ActualizarPropietariosComponent', () => {
  let component: ActualizarPropietariosComponent;
  let fixture: ComponentFixture<ActualizarPropietariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActualizarPropietariosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActualizarPropietariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
