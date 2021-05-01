import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { TheridPageComponent } from './therid-page/therid-page.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'take-pic', component: TheridPageComponent},
  {path: 'form', component: FormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
