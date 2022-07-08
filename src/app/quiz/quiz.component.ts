import { Component, OnInit } from '@angular/core';
import { QuizService } from '../services/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  quizzes: any;

  constructor(private quizService: QuizService) 
  {
    this.quizService.getQuizzes().subscribe((data:any)=>
       {
      console.log(data);
      
      this.quizzes = data;  
       }
       );

  
  }


  ngOnInit(): void {
  }

}
