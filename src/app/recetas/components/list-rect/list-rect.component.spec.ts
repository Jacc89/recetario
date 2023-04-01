import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRectComponent } from './list-rect.component';

describe('ListRectComponent', () => {
  let component: ListRectComponent;
  let fixture: ComponentFixture<ListRectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListRectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
