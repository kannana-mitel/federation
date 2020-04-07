import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Lazy1Component } from './lazy1.component';
import { NewComponent } from './newComponent/new/new.component';


const routes: Routes = [
  {
    path: '',
    component: NewComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Lazy1RoutingModule { }
