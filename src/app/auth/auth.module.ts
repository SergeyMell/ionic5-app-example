import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {AuthPageRoutingModule} from './auth-routing.module';

import {AuthPage} from './auth.page';
import {AuthFirstChildComponent} from './auth-first-child/auth-first-child.component';
import {AuthSecondChildComponent} from './auth-second-child/auth-second-child.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AuthPageRoutingModule
    ],
    declarations: [
        AuthPage,
        AuthFirstChildComponent,
        AuthSecondChildComponent
    ]
})
export class AuthPageModule {
}
