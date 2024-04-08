import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPropietariosComponent } from './listar-propietarios.component';

describe('ListarPropietariosComponent', () => {
  let component: ListarPropietariosComponent;
  let fixture: ComponentFixture<ListarPropietariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarPropietariosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarPropietariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
