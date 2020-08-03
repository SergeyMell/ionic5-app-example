import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthFirstChildPageRoutingModule } from './auth-first-child-routing.module';

import { AuthFirstChildPage } from './auth-first-child.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthFirstChildPageRoutingModule
  ],
  declarations: [AuthFirstChildPage]
})
export class AuthFirstChildPageModule {}
