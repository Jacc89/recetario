import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCategComponent } from './create-categ.component';

describe('CreateCategComponent', () => {
  let component: CreateCategComponent;
  let fixture: ComponentFixture<CreateCategComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCategComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCategComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
