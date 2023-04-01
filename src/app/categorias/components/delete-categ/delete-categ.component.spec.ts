import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCategComponent } from './delete-categ.component';

describe('DeleteCategComponent', () => {
  let component: DeleteCategComponent;
  let fixture: ComponentFixture<DeleteCategComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteCategComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteCategComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
