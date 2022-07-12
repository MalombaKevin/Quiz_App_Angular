import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  @Input()
  question:any;

  @Input()
  selectedAnswer: any;

  @Output()
  selectAnswer = new EventEmitter<any>()

  callParent(id: number) {
    this.selectAnswer.next(id);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
