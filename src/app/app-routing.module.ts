import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnyComponent } from './any/any.component';

const routes: Routes = [
  { path:"",component:AnyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
