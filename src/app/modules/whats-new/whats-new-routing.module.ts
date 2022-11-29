import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WhatsNewComponent } from './whats-new.component';

const routes: Routes = [{ path: '', component: WhatsNewComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WhatsNewRoutingModule { }
