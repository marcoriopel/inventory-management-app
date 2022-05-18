import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationDeletionConfirmationComponent } from './location-deletion-confirmation.component';

describe('LocationDeletionConfirmationComponent', () => {
  let component: LocationDeletionConfirmationComponent;
  let fixture: ComponentFixture<LocationDeletionConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationDeletionConfirmationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationDeletionConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
