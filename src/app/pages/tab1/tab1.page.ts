import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  proconstructionMoney = 10000;
  protempleMoney = 20000;

  constructor(private navCtrl: NavController) {

  }

  goToProconstructionPage(): void {
    this.navCtrl.navigateRoot('add-construction-item');
  }
  goToProtemplePage(): void {
    this.navCtrl.navigateRoot('/tabs/tab2');
  }

}
