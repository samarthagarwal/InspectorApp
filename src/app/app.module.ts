import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import firebase from 'firebase';

firebase.initializeApp({
  apiKey: "AIzaSyC-Tmtc3A_qjbzzrbQaSCgCfT968oi1Jkw",
  authDomain: "mynewproject-d6c7d.firebaseapp.com",
  databaseURL: "https://mynewproject-d6c7d.firebaseio.com",
  projectId: "mynewproject-d6c7d",
  storageBucket: "mynewproject-d6c7d.appspot.com",
  messagingSenderId: "956618692410"
});

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
