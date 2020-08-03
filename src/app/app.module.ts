import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy, RouterModule} from '@angular/router';

import {IonicModule, IonicRouteStrategy, Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';

import {Plugins} from '@capacitor/core';

const {Keyboard} = Plugins;

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, RouterModule],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private platform: Platform) {

    const platforms = this.platform.platforms().toString();
    console.log('TEST');
    console.log('this.platform.platforms()');
    console.log(platforms);
    alert(`this.platform.platforms()\n${platforms}`);

    Keyboard.setAccessoryBarVisible({
      isVisible: true
    }).catch(() => {
    });
  }

}
