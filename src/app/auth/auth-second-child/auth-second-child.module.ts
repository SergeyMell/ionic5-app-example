import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthSecondChildPageRoutingModule } from './auth-second-child-routing.module';

import { AuthSecondChildPage } from './auth-second-child.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthSecondChildPageRoutingModule
  ],
  declarations: [AuthSecondChildPage]
})
export class AuthSecondChildPageModule {}
