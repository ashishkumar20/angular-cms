import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material';
import { HttpModule } from '@angular/http';
import { CreatepostComponent } from './createpost/createpost.component';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { FullpostComponent } from './fullpost/fullpost.component';
import { HomeComponent } from './home/home.component';
import { AllauthorComponent } from './allauthor/allauthor.component';
import { CommentComponent } from './comment/comment.component';

const appRoutes: Routes = [
  { path: '', component:HomeComponent},
  { path: 'createpost', component:CreatepostComponent},
  { path: 'fullpost', component: FullpostComponent },
  { path: 'all-posts', component: AllPostsComponent },
  { path: 'app-home', component: HomeComponent },
  { path: 'app-allauthor', component:AllauthorComponent},
  { path: 'comment', component:CommentComponent},
  { path: '', redirectTo: '/app-home', pathMatch: 'full' }
];
@NgModule({
  declarations: [
    AppComponent,
    CreatepostComponent,
    AllPostsComponent,
    FullpostComponent,
    HomeComponent,
    AllauthorComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes, { enableTracing: true }
    )
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
