import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRectComponent } from './home-rect.component';

describe('HomeRectComponent', () => {
  let component: HomeRectComponent;
  let fixture: ComponentFixture<HomeRectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeRectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeRectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
