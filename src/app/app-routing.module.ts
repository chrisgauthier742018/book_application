import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// I could have created a component and then imported them in here
// but i figured there's only 2 components so i'll leave it be for now
import { BooksComponent } from './books/books.component';
import { SubjectsComponent} from './subjects/subjects.component'


const routes: Routes = [
  { path: 'books', component: BooksComponent },
  { path: 'subjects', component: SubjectsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }