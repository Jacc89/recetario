import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCategComponent } from './home-categ.component';

describe('HomeCategComponent', () => {
  let component: HomeCategComponent;
  let fixture: ComponentFixture<HomeCategComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeCategComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeCategComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
