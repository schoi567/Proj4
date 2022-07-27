import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../services/content.service';
import { questions } from '../../questions-format';
import { Router } from '@angular/router';
import { answers } from './../../answers-format';
import { result } from './../../result-format';



@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
  providers: [ContentService]
})
export class ResultComponent implements OnInit {
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



  constructor( private ContentService: ContentService,
    private router: Router) { }








    review() {
      this.router.navigate(['review'])}







        start() {this.ContentService.getQuiz().subscribe((questions) => (this.Questions = questions));
          this.ContentService.getAnswers().subscribe((answers) => (this.Answers = answers));
          this.ContentService.getResult().subscribe((result) => (this.Results = result));
         }

          init () {this.isLoaded=true;}






       ngOnInit(): void {
        this.start();
        console.log("data loaded");
        this.init () ;

        const val = new Promise((resolve, reject) => {});

        val.then(value => {
          console.log('resolved', value);
        });


        val.catch(error => {
          console.log('rejected', error);
        });

}
}

