import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material';
import { HttpModule } from '@angular/http';
import { CreatepostComponent } from './createpost/createpost.component';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { FullpostComponent } from './fullpost/fullpost.component';

const appRoutes: Routes = [
  { path: 'full-posts', component: FullpostComponent },
  { path: 'all-posts', component: AllPostsComponent },
  { path: 'app-root', component: AppComponent },
  { path: '', redirectTo: '/full-posts', pathMatch: 'full' }
];
@NgModule({
  declarations: [
    AppComponent,
    CreatepostComponent,
    AllPostsComponent,
    FullpostComponent
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
