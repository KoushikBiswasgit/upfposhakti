import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WhatsNewRoutingModule } from './whats-new-routing.module';
import { WhatsNewComponent } from './whats-new.component';


@NgModule({
  declarations: [
    WhatsNewComponent
  ],
  imports: [
    CommonModule,
    WhatsNewRoutingModule
  ]
})
export class WhatsNewModule { }
