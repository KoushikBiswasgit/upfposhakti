import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchemeRoutingModule } from './scheme-routing.module';
import { SchemeComponent } from './scheme.component';


@NgModule({
  declarations: [
    SchemeComponent
  ],
  imports: [
    CommonModule,
    SchemeRoutingModule
  ]
})
export class SchemeModule { }
