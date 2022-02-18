import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Answer } from './Types/Answer';
import { user } from './Types/User';

@Injectable({
  providedIn: 'root'
})
export class Service {

  constructor(private http: HttpClient) {
  }

  root_url = "http://localhost:9090/";

  getUser() {
    return this.http.get<user>(this.root_url + "getUser");
  }

  postUser(user: user) {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(user);
    return this.http.post<user>(this.root_url + "postUser", body, { 'headers': headers, 'observe': 'response' });
  }

  login(user: user) {
    const headers = { 'content-type': 'application/json' }
    var request = {
      userId: user.userId,
      password: user.password
    }
    const body = JSON.stringify(request);
    return this.http.post<any>(this.root_url + "login", body, { 'headers': headers, 'observe': 'response' });
  }
  getUserIdForgotUserID(answers: Answer) {
    const headers = { 'content-type': 'application/json' }
    var request = {
      ans1: answers.ans1,
      ans2: answers.ans2,
      ans3: answers.ans3
    }
    const body = JSON.stringify(request)
    return this.http.put<Answer>(this.root_url + "Password", body, { 'headers': headers });
  }

  forgotPassword(answers: Answer) {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(answers)
    return this.http.put<any>(this.root_url + "forgotPassword", body, { 'headers': headers, 'observe': 'response' });
  }

}
