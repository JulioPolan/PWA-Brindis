import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryFormModal } from './entry-form-modal';

describe('EntryFormModal', () => {
  let component: EntryFormModal;
  let fixture: ComponentFixture<EntryFormModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntryFormModal],
    }).compileComponents();

    fixture = TestBed.createComponent(EntryFormModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
