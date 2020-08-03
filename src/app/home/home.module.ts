import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';

import {HomePageRoutingModule} from './home-routing.module';
import {HomeFirstChildComponent} from './home-first-child/home-first-child.component';
import {HomeSecondChildComponent} from './home-second-child/home-second-child.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [
    HomeFirstChildComponent,
    HomeSecondChildComponent
  ],
  entryComponents: [
    HomeFirstChildComponent,
    HomeSecondChildComponent
  ]
})
export class HomePageModule {
}
