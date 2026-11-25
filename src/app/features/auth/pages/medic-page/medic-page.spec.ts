import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicPage } from './medic-page';

describe('MedicPage', () => {
  let component: MedicPage;
  let fixture: ComponentFixture<MedicPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicPage],
    }).compileComponents();

    fixture = TestBed.createComponent(MedicPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
