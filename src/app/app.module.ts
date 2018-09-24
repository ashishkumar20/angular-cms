import { BrowserModule } from '@angular/platform-browser';
import { DataService } from './data.service';
import { NgModule, Component } from '@angular/core';
import { MatCardModule } from '@angular/material';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreatepostComponent } from './createpost/createpost.component';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { FullpostComponent } from './fullpost/fullpost.component';
import { HomeComponent } from './home/home.component';
import { AllauthorComponent } from './allauthor/allauthor.component';
import { CreateauthorComponent } from './createauthor/createauthor.component';
import { MatFormFieldModule, MatInputModule } from '@angular/material';;
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
const appRoutes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'createpost', component: CreatepostComponent },
  { path: 'fullpost', component: FullpostComponent },
  { path: 'all-posts', component: AllPostsComponent },
  { path: 'app-home', component: HomeComponent },
  { path: 'app-allauthor', component: AllauthorComponent },
  { path: 'app-createauthor', component: CreateauthorComponent },
  { path: '', redirectTo: '/app-home', pathMatch: 'full' }
];

const modules = [
  MatFormFieldModule,
  MatInputModule,
];

@NgModule({
  declarations: [
    AppComponent,
    CreatepostComponent,
    AllPostsComponent,
    FullpostComponent,
    HomeComponent,
    AllauthorComponent,
    CreateauthorComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MatCardModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    ...modules,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [RouterModule,
    ...modules
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
