import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
//importamos clase 
import {QuoteService} from "../services/quote";
import {HttpModule} from "@angular/http"; 

import {DatosPage} from '../pages/datos/datos';
import {DeportesPage} from '../pages/deportes/deportes';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DatosPage,
    DeportesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DatosPage,
    DeportesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    QuoteService, //servicio se grega aqui
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
