import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../services/content.service';
import { questions } from '../../questions-format';
import { Router } from '@angular/router';
import { answers } from './../../answers-format';
import { result } from './../../result-format';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  constructor(public ContentService: ContentService, public router: Router) { }


  Questions: questions[] = [];
  Results: result[] = [];
  Answers: answers[] = [];
  totalAnswered: number = 0
  rightAnswer: number = 0
  selected1: string =''
  isLoaded:boolean=false;

  Result: result = {
    totalAnswered: this.totalAnswered,
    rightAnswer: this.rightAnswer
  }

  Selected: answers = {
    selected1: this.selected1 };





  deleteResult(Result: result)  {
    this.ContentService
      .deleteResult(Result)
      .subscribe(
        () => (this.Result = this.Result)
      );
  }

  deleteAnswers(Answers: answers) {
    this.ContentService
      .deleteAnswers1(Answers)
      .subscribe(
        () => (this.Answers = this.Answers)
      );
      this.ContentService
      .deleteAnswers2(Answers)
      .subscribe(
        () => (this.Answers = this.Answers)
      );
      this.ContentService
      .deleteAnswers3(Answers)
      .subscribe(
        () => (this.Answers = this.Answers)
      );
      this.ContentService
      .deleteAnswers4(Answers)
      .subscribe(
        () => (this.Answers = this.Answers)
      );

  }


  BacktoMain() {
    this.deleteAnswers(this.Selected)
    this.deleteResult(this.Result)

    this.router.navigate(['BacktoMain'])
  }




    init () {this.isLoaded=true;}





 ngOnInit(): void {
  this.ContentService.getQuiz().subscribe((questions) => (this.Questions = questions));
  this.ContentService.getAnswers().subscribe((answers) => (this.Answers = answers));
  this.ContentService.getResult().subscribe((result) => (this.Results = result));
  console.log("data loaded");


  this.init () ;






}
}
