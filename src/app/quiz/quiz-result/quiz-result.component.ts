import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-quiz-result',
  templateUrl: './quiz-result.component.html',
  styleUrls: ['./quiz-result.component.css']
})
export class QuizResultComponent implements OnInit {
  data: any;
  constructor(
    private act:ActivatedRoute
  ) { }

  ngOnInit(): void {
  this.data =this.act.snapshot.data
  console.log(this.data)
  console.log(this.data.name)
  console.log(this.data.description)
 
  }
}
