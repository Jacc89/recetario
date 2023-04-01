import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRectComponent } from './create-rect.component';

describe('CreateRectComponent', () => {
  let component: CreateRectComponent;
  let fixture: ComponentFixture<CreateRectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateRectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateRectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
