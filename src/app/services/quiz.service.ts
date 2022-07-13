import { Injectable } from '@angular/core';
import { GeneralService } from './general.service';
import { EndpointsService } from './endpoints.service';
import { HttpClient } from '@angular/common/http';
import {  Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(

    private http: HttpClient,
    private endpoints: EndpointsService,
    private genService: GeneralService
  ) { }


  getQuizzes():Observable<object> {
    return this.http.get(this.endpoints.quizzes(), {headers: this.genService.setheaders()});
  }

  getQuiz(slug: string) {
    return this.http.get(this.endpoints.quiz(slug), {headers: this.genService.setheaders()});
  }

  saveAnswer(body:object) {
    return this.http.patch(this.endpoints.saveAnswer(), body, {headers: this.genService.setheaders()});
  }

  submitQuiz(body:object, slug:string) {
    return this.http.post(this.endpoints.submitQuiz(slug), body, {headers: this.genService.setheaders()});
  }
  getTaker(){
    return this.http.get(this.endpoints.quizTaker(), {headers: this.genService.setheaders()});
  }
}
