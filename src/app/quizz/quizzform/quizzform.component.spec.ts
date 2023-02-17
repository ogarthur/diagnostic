import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizzformComponent } from './quizzform.component';

describe('QuizzformComponent', () => {
  let component: QuizzformComponent;
  let fixture: ComponentFixture<QuizzformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizzformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizzformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
