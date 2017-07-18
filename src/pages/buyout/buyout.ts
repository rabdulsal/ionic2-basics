import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";

@Component({
  selector: 'page-buyout',
  templateUrl: 'buyout.html'
})
export class BuyoutPage {
  product: string;

  constructor (
    private navCtrl: NavController,
    private navParams: NavParams) { }

    ngOnInit() {
      this.product = this.navParams.get('shopProduct');
    }

    goToHome() {
      this.navCtrl.popToRoot();
    }

}
