import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {QuoteService} from "../../services/quote";
import { DatosPage } from '../datos/datos';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public data: any = { cadena: '' };
  public mensaje: boolean = false;
  constructor(public navCtrl: NavController, public quotes: QuoteService) {
    this.quotes.getQuotes();
  }

  goDatos() {
    if (this.data.cadena == this.quotes.data.email) {
      this.navCtrl.push(DatosPage);

    } else {
      this.mensaje = true;
      console.log("Correo Invalido");
    }
  }

}