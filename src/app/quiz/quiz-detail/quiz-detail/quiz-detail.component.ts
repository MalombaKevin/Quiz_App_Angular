import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from 'app/services/quiz.service';

@Component({
  selector: 'app-quiz-detail',
  templateUrl: './quiz-detail.component.html',
  styleUrls: ['./quiz-detail.component.css']
})
export class QuizDetailComponent implements OnInit {
  slug!:string
  quiz: any;
  currentIndex: number = 0;
  selectedAnswer:any
  answers:number[]= [];
  timeplaceholder!:string;
  results:any;
  package: any={answers:null,timeholder:null}
  constructor(

    private route: ActivatedRoute,
    private qzs: QuizService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.slug = this.route.snapshot.params['slug'];
    this.qzs.getQuiz(this.slug).subscribe((res:any) => {
      this.quiz = res['quiz'];
      if(this.quiz.quiztakers_set.completed) {
        this.router.navigate(['/quiz/' + this.slug + '/result']);
      }
      this.initializeAnswers();
      this.timingQuiz();
    });


  }

  timingQuiz(){
    const time= 2
    var timeInMinutes = time*60*60
    var quizTime = timeInMinutes/60
    var quiztimer = setInterval(() =>{
      if (quizTime <= 0){
        clearInterval(quiztimer)
        this.submitQuiz()

      }
      else {
        quizTime-- 
        let seconds =Math.floor(quizTime%60)
        let minutes = Math.floor(quizTime/60)%60
        this.timeplaceholder = `TIME:${minutes}:${seconds}`

       }

    },1000)

  }

  initializeAnswers() {
    const usersAnswers = this.quiz.quiztakers_set.usersanswer_set;
    for(let i=0; i<usersAnswers.length; i++) {
      this.answers.push(usersAnswers[i]['answer']);
    }
    console.log(this.answers);
  }

  saveAnswer() {
    const body = {
      "quiztaker": this.quiz.quiztakers_set.id,
      "question": this.quiz.question_set[this.currentIndex].id,
      "answer": this.selectedAnswer
    }

    this.qzs.saveAnswer(body).subscribe((res) => {
      console.log(res);
    });
  }

  submitQuiz() {
    const body = {
      "quiztaker": this.quiz.quiztakers_set.id,
      "question": this.quiz.question_set[this.currentIndex].id,
      "answer": this.selectedAnswer
    }

    this.qzs.submitQuiz(body, this.slug).subscribe((res:any) => {
      console.log(res)
      this.answers = res
      this.package.answers=this.answers
      this.package.timeholder=this.timeplaceholder
      this.router.navigate(['quizresult/' + this.slug + '/result'],{state:{data:this.package}});
    });
  }

  next() {
    if(this.currentIndex === this.quiz.question_set.length-1) {
      this.submitQuiz();
      return;
    }

    if(this.selectedAnswer!=null) {
      this.saveAnswer();
    }

    if(this.currentIndex !== this.quiz.question_set.length-1) {
      this.currentIndex += 1;
      this.selectedAnswer = null;
    }
  }

  selectAnswer(id: number) {
    console.log(id);
    this.selectedAnswer = id;
    this.answers[this.currentIndex] = id;
  }

  previous() {
    if(this.selectedAnswer!=null) {
      this.saveAnswer();
    }

    if(this.currentIndex != 0) {
      this.currentIndex -= 1;
      this.selectedAnswer = null;
    }
  }

}
