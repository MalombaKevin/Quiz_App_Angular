import { Component, OnInit } from '@angular/core';
import { QuizService } from '../services/quiz.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  quizzes:Array<any> | undefined;

  constructor(private quizService: QuizService,private router:Router) 
  {
    this.quizService.getQuizzes().subscribe((data:any)=>
       {
      console.log(data);
      if(data){this.quizzes = data;
      
      }
        
       }
       );

  
  }


  ngOnInit(): void {
    
  }
  detal(slug:string){

this.router.navigate(['quizlist',slug])

  }

}
