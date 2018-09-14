import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {MatCardModule} from '@angular/material';
import {HttpModule} from '@angular/http';
import { CreatepostComponent } from './createpost/createpost.component';
import{RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    CreatepostComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
   HttpModule,
   RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
