import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BonificacionComponent } from './bonificacion.component';

describe('BonificacionComponent', () => {
  let component: BonificacionComponent;
  let fixture: ComponentFixture<BonificacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BonificacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BonificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
