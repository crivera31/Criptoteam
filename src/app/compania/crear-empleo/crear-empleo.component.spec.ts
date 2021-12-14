import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearEmpleoComponent } from './crear-empleo.component';

describe('CrearEmpleoComponent', () => {
  let component: CrearEmpleoComponent;
  let fixture: ComponentFixture<CrearEmpleoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearEmpleoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearEmpleoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
