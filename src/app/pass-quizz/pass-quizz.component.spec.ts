import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassQuizzComponent } from './pass-quizz.component';

describe('PassQuizzComponent', () => {
  let component: PassQuizzComponent;
  let fixture: ComponentFixture<PassQuizzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassQuizzComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PassQuizzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
