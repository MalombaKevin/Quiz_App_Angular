import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-quiz-result',
  templateUrl: './quiz-result.component.html',
  styleUrls: ['./quiz-result.component.css']
})
export class QuizResultComponent implements OnInit {
  data: any;
  timeconent:any
  constructor(
    private act:ActivatedRoute
  ) { }

  ngOnInit(): void {
  this.data =history.state.data.answers
  console.log(this.data)
  console.log(this.data.name)
  console.log(this.data.description)
  this.timeconent=history.state.data.timeholder
  console.log(this.timeconent)
 
  }
   get processtime(){
    let timear=this.timeconent.split(':')
    let mins=timear[1];
    let secs=timear[2]
    let totalseconds=parseInt(mins)*60+parseInt(secs)
    let totalquizseconds=2*60

    return <number>(totalquizseconds-totalseconds)
  }
}
