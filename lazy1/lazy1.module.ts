import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lazy1Component } from './lazy1.component';
import { Lazy1RoutingModule } from './lazy1-routing.module';
import { NewComponent } from './newComponent/new/new.component';

@NgModule({
  imports: [
    CommonModule,
    Lazy1RoutingModule
  ],
  declarations: [Lazy1Component, NewComponent]
})
export class Lazy1Module { }
