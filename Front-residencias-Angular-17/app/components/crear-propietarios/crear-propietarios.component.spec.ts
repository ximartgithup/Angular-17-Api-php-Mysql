import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPropietariosComponent } from './crear-propietarios.component';

describe('CrearPropietariosComponent', () => {
  let component: CrearPropietariosComponent;
  let fixture: ComponentFixture<CrearPropietariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearPropietariosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrearPropietariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
