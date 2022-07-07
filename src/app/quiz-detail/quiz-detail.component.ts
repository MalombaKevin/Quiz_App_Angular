import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-quiz-detail',
  templateUrl: './quiz-detail.component.html',
  styleUrls: ['./quiz-detail.component.css']
})
export class QuizDetailComponent implements OnInit {
  slug: any;
  quiz: any;
  currentIndex: number = 0;
  selectedAnswer: number | undefined;
  answers = [];
  constructor(
    private route: ActivatedRoute,
    private quizService: QuizService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

}
