import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxResultComponent } from './box-result.component';

describe('BoxResultComponent', () => {
  let component: BoxResultComponent;
  let fixture: ComponentFixture<BoxResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
