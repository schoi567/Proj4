import { answers } from './../../answers-format';
import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../services/content.service';
import { Router } from '@angular/router';
import { questions } from '../../questions-format';
import { Injectable } from '@angular/core';
import { result } from './../../result-format';
@Injectable({
  providedIn: 'root'

})

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {


  constructor(private ContentService: ContentService, private router: Router) { }

  Results: result[] = [];
  Answers: answers[] = [];
  Questions: questions[] = [];
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


  result() {
    for (let i = 0; i < this.Questions.length; i++) {
			if ("selected" in this.Questions[i] && (this.Questions[i]["selected"] != null)) {
        this.totalAnswered++;
				if (this.Questions[i]["selected"] == this.Questions[i]["answer"]) {this.rightAnswer++;} }
       }

       this.Result.totalAnswered = this.totalAnswered
       this.Result.rightAnswer = this.rightAnswer
       this.addResult(this.Result)
      }


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


      }






  ngOnInit(): void {
    this.BacktoMain();
    this.ContentService.getQuiz().subscribe((questions) => (this.Questions = questions));
    this.isLoaded=true;


  }

  addResult(Result: result) {
    this.ContentService.addResult(Result).subscribe((Result) => this.Results.push(Result as result));
  }

  addAnswers(Answer: answers) {
    this.ContentService.addAnswers(Answer).subscribe((Answer) => this.Answers.push(Answer as answers));
  }




  submit() {  this.result()
    this.router.navigate(['result'])

    for (let i = 0; i < this.Questions.length; i++)
      {var  a = this.Questions[i].selected
      console.log(this.Questions[i].selected)
      this.Selected.selected1=this.Questions[i].selected

      this.addAnswers(this.Selected)}

      this.isLoaded=true;




    }






}
