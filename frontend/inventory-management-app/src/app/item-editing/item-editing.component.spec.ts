import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemEditingComponent } from './item-editing.component';

describe('ItemEditingComponent', () => {
  let component: ItemEditingComponent;
  let fixture: ComponentFixture<ItemEditingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemEditingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemEditingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
