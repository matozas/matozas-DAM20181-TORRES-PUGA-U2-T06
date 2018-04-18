import { Component } from '@angular/core';
import { UserService } from '../services/user';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'my-component',
  templateUrl: 'foo.html'
})

export class MyComponent{
  public data: any={myToggle:true};

  curp:string
  constructor(public navCtrl: NavController, public navParams: NavParams, public userSrv:UserService) {
    console.log(`CURP: ${this.userSrv.curp}`);

    this.curp=this.userSrv.curp;
    this.curp=this.curp.substring(10,11);

    if(this.curp=="H"){this.data.myToggle=true;}
    else{this.data.myToggle=false;}


}

  isClicked(val){
    console.log("Genero:"+val);
  }
}
