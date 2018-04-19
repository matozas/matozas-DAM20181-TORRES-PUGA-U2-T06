import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {QuoteService} from "../../services/quote";
import {DeportesPage} from '../deportes/deportes';


@IonicPage()
@Component({
  selector: 'page-datos',
  templateUrl: 'datos.html',
})
export class DatosPage {

  public nombre:string;
  public correo:string;
  public url:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,
  
    public quotes: QuoteService) {
      this.quotes.getQuotes();
      this.nombre=quotes.data.name;
      this.correo=quotes.data.email;
      

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DatosPage');
    console.log(this.nombre);
  }

  goSports(){
    this.navCtrl.push(DeportesPage);
  }

}