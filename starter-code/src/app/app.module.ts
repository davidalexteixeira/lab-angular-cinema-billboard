import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MoviesService } from './services/movies.service'

import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MyHomeComponent } from './component/my-home/my-home.component';
import { MyMovieComponent } from './component/my-movie/my-movie.component';

import { Routes, RouterModule } from "@angular/router";


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  component: MyHomeComponent },
  { path: 'movie/:id', component: MyMovieComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MyHomeComponent,
    MyMovieComponent,
      ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
