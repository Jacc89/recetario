import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteRectComponent } from './delete-rect.component';

describe('DeleteRectComponent', () => {
  let component: DeleteRectComponent;
  let fixture: ComponentFixture<DeleteRectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteRectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteRectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
