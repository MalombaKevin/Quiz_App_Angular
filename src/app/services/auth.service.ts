import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EndpointsService } from './endpoints.service';
import { GeneralService } from './general.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  [x: string]: any;

  constructor(
    private http: HttpClient,
    private endpoints: EndpointsService,
    private genService: GeneralService
  ) { }

  register(body:object) {
    return this.http.post(this.endpoints.register(), body, {headers: this.genService.setheaders()});
  }

  login(body:object) {
    return this.http.post(this.endpoints.login(), body, {headers: this.genService.setheaders()});
  }
}
