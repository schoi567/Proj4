import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizComponent } from './components/quiz/quiz.component';
import { ReviewComponent } from './components/review/review.component';
import { ResultComponent } from './components/result/result.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

const routes: Routes = [
  { path: '', component: QuizComponent },
  { path: 'result', component: ResultComponent},
  { path: 'review', component: ReviewComponent},
  { path: 'BacktoMain', component: QuizComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
