import { Component, OnInit } from '@angular/core';
import { QuizService } from '../services/quiz.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-quiz-detail',
  templateUrl: './quiz-detail.component.html',
  styleUrls: ['./quiz-detail.component.css']
})
export class QuizDetailComponent implements OnInit {
  slug: any;
  quiz!: any;
  currentIndex: number = 0;
  selectedAnswer: number | undefined;
  answers = [];
  quiztakers_set:number | undefined;
  constructor(
    private route: ActivatedRoute,
    private quizService: QuizService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.slug = this.route.snapshot.params['slug'];
    this.quizService.getQuiz(this.slug).subscribe((res) => {
      this.quiz = res[this.quiz];
      if(this.quiz.quiztakers_set.completed) {
        this.router.navigate(['/quizzes/' + this.slug + '/result']);
      }
      this.initializeAnswers();
    });
  }
  initializeAnswers() {
    throw new Error('Method not implemented.');
  }
}
  // initializeAnswers() {
  //   const usersAnswers = this.quiz.quiztakers_set.usersanswer_set;
  //   for(let i=0; i<usersAnswers.length; i++) {
  //     this.answers.push(usersAnswers[i]['answer']);
  //   }
  //   console.log(this.answers);
  // }

  // saveAnswer() {
  //   const body = {
  //     "quiztaker": this.quiz.quiztakers_set.id,
  //     "question": this.quiz.question_set[this.currentIndex].id,
  //     "answer": this.selectedAnswer
  //   }

  //   this.quizzesService.saveAnswer(body).subscribe((res) => {
  //     console.log(res);
  //   });
  // }

  // submitQuiz() {
  //   const body = {
  //     "quiztaker": this.quiz.quiztakers_set.id,
  //     "question": this.quiz.question_set[this.currentIndex].id,
  //     "answer": this.selectedAnswer
  //   }

  //   this.quizzesService.submitQuiz(body, this.slug).subscribe((res) => {
  //     this.router.navigate(['/quizzes/' + this.slug + '/result']);
  //   });
  // }

  // next() {
  //   if(this.currentIndex === this.quiz.question_set.length-1) {
  //     this.submitQuiz();
  //     return;
  //   }

  //   if(this.selectedAnswer!=null) {
  //     this.saveAnswer();
  //   }

  //   if(this.currentIndex !== this.quiz.question_set.length-1) {
  //     this.currentIndex += 1;
  //     this.selectedAnswer = null;
  //   }
  // }

//   selectAnswer(id: number) {
//     console.log(id);
//     this.selectedAnswer = id;
//     this.answers[this.currentIndex] = id;
//   }

//   previous() {
//     if(this.selectedAnswer!=null) {
//       this.saveAnswer();
//     }

//     if(this.currentIndex != 0) {
//       this.currentIndex -= 1;
//       this.selectedAnswer = null;
//     }
//   }

// }
//   }

// }
