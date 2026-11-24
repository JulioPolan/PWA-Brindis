import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorFormModal } from './doctor-form-modal';

describe('DoctorFormModal', () => {
  let component: DoctorFormModal;
  let fixture: ComponentFixture<DoctorFormModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctorFormModal],
    }).compileComponents();

    fixture = TestBed.createComponent(DoctorFormModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
