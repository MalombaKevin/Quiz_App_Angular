import { Injectable } from '@angular/core';
import { GeneralService } from './general.service';

@Injectable({
  providedIn: 'root'
})
export class EndpointsService {

  constructor(private gen:GeneralService) { }




  login() {
    return this.gen.hostUrl + 'accounts/login/';
  }

  register() {
    return this.gen.hostUrl + 'accounts/register/';
  }

  quizzes() {
    return this.gen.hostUrl + 'quizzes/';
  }

  quiz(slug: string) {
    return this.gen.hostUrl + 'quizzes/' + slug + "/";
  }

  saveAnswer() {
    return this.gen.hostUrl + 'save-answer/';
  }

  submitQuiz(slug: string) {
    return this.gen.hostUrl + 'quizzes/' + slug + "/submit/";
  }
}

