import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordResetModal } from './password-reset-modal';

describe('PasswordResetModal', () => {
  let component: PasswordResetModal;
  let fixture: ComponentFixture<PasswordResetModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasswordResetModal],
    }).compileComponents();

    fixture = TestBed.createComponent(PasswordResetModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
