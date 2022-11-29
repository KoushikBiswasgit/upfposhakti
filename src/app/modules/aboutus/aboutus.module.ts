import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './aboutus-routing.module';
import { AboutUsComponent } from './aboutus.component';


@NgModule({
  declarations: [
    AboutUsComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,    
  ]
})
export class AboutUsModule { }
