import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationsCreationComponent } from './locations-creation.component';

describe('LocationsCreationComponent', () => {
  let component: LocationsCreationComponent;
  let fixture: ComponentFixture<LocationsCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationsCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationsCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
