import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsAnswerComponent } from './questions-answer.component';

describe('QuestionsAnswerComponent', () => {
  let component: QuestionsAnswerComponent;
  let fixture: ComponentFixture<QuestionsAnswerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionsAnswerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
