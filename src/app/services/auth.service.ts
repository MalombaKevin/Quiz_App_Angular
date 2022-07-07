import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EndpointsService } from './endpoints.service';
import { GeneralService } from './general.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private endpoints: EndpointsService,
    private genService: GeneralService
  ) { }

  reg(body:object) {
    return this.http.post(this.endpoints.register(), body, {headers: this.genService.setheaders()});
  }

  log(body:object) {
    return this.http.post(this.endpoints.login(), body, {headers: this.genService.setheaders()});
  }
}
