import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AuthPage} from './auth.page';
import {AuthFirstChildComponent} from './auth-first-child/auth-first-child.component';
import {AuthSecondChildComponent} from './auth-second-child/auth-second-child.component';

const routes: Routes = [
    {
        path: '',
        component: AuthPage,
        children: [
            {
                path: 'auth-first-child',
                component: AuthFirstChildComponent
            },
            {
                path: 'auth-second-child',
                component: AuthSecondChildComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AuthPageRoutingModule {
}
