import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsRectComponent } from './details-rect.component';

describe('DetailsRectComponent', () => {
  let component: DetailsRectComponent;
  let fixture: ComponentFixture<DetailsRectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsRectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsRectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
