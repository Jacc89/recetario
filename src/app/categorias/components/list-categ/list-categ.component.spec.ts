import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCategComponent } from './list-categ.component';

describe('ListCategComponent', () => {
  let component: ListCategComponent;
  let fixture: ComponentFixture<ListCategComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCategComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCategComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
