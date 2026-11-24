import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientFormModal } from './patient-form-modal';

describe('PatientFormModal', () => {
  let component: PatientFormModal;
  let fixture: ComponentFixture<PatientFormModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientFormModal],
    }).compileComponents();

    fixture = TestBed.createComponent(PatientFormModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
