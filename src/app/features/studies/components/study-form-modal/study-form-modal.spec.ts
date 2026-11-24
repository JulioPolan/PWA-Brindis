import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyFormModal } from './study-form-modal';

describe('StudyFormModal', () => {
  let component: StudyFormModal;
  let fixture: ComponentFixture<StudyFormModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudyFormModal],
    }).compileComponents();

    fixture = TestBed.createComponent(StudyFormModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
