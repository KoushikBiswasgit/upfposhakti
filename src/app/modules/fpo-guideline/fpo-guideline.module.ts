import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FpoGuidelineRoutingModule } from './fpo-guideline-routing.module';
import { FpoGuidelineComponent } from './fpo-guideline.component';


@NgModule({
  declarations: [
    FpoGuidelineComponent
  ],
  imports: [
    CommonModule,
    FpoGuidelineRoutingModule
  ]
})
export class FpoGuidelineModule { }
