import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//import { UserService } from './../../services/user';
//import { MyComponent } from './../../components/quote';
import { HomePage } from './../home/home';


/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})

export class WelcomePage {
  user:any={
    curp:'',
  }

 curp:string;


  constructor(public navCtrl: NavController, public navParams: NavParams, public userSrv:UserService) {
      console.log(`CURP: ${this.userSrv.curp}`);
      this.user.curp=this.userSrv.curp;
      this.curp=this.userSrv.curp;
      this.curp=this.curp.substring(10,11);


  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

  User():void{

      this.navCtrl.push(HomePage);

  }

}
