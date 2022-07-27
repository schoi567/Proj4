import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { questions } from '../questions-format';
import { answers } from '../answers-format';
import { result } from '../result-format';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root'
})
export class ContentService {
  private apiUrl = 'http://localhost:5000/questions';
  private apiUrl1 = 'http://localhost:5000/answers';
  private apiUrl2 = 'http://localhost:5000/result';
  constructor(private http: HttpClient) {}


  getQuiz(): Observable<questions[]> {
    return this.http.get<questions[]>(this.apiUrl);
  }
  getAnswers(): Observable<answers[]> {
    return this.http.get<answers[]>(this.apiUrl1);
  }

  getResult(): Observable<result[]> {
    return this.http.get<result[]>(this.apiUrl2);
  }



  addAnswers(Answers: answers): Observable<answers[]> {
    return this.http.post<answers[]>(this.apiUrl1, Answers, httpOptions);
  }

  addResult(Result: result): Observable<result[]> {
    return this.http.post<result[]>(this.apiUrl2, Result, httpOptions);
  }



  deleteAnswers1(Answers: answers): Observable<answers[]> {
    const url = `${this.apiUrl1}/${1}`
    return this.http.delete<answers[]>(url);}


    deleteAnswers2(Answers: answers): Observable<answers[]> {
      const url = `${this.apiUrl1}/${2}`
      return this.http.delete<answers[]>(url);}

      deleteAnswers3(Answers: answers): Observable<answers[]> {
        const url = `${this.apiUrl1}/${3}`
        return this.http.delete<answers[]>(url);}

      deleteAnswers4(Answers: answers): Observable<answers[]> {
          const url = `${this.apiUrl1}/${4}`
          return this.http.delete<answers[]>(url);}


          deleteResult(Result: result): Observable<result[]> {
            const url = `${this.apiUrl2}/${1}`
            return this.http.delete<result[]>(url);}





  }










