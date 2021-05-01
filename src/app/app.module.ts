import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WebcamModule } from 'ngx-webcam';
import { HomeComponent } from './home/home.component';
import { TheridPageComponent } from './therid-page/therid-page.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TheridPageComponent,
    FormComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    WebcamModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
