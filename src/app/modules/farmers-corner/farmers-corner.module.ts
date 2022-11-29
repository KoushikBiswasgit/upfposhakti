import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FarmersCornerRoutingModule } from './farmers-corner-routing.module';
import { FarmersCornerComponent } from './farmers-corner.component';


@NgModule({
  declarations: [
    FarmersCornerComponent
  ],
  imports: [
    CommonModule,
    FarmersCornerRoutingModule
  ]
})
export class FarmersCornerModule { }
