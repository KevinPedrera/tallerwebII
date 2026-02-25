import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestorRecursos } from './gestor-recursos';

describe('GestorRecursos', () => {
  let component: GestorRecursos;
  let fixture: ComponentFixture<GestorRecursos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestorRecursos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestorRecursos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
