import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-abismo',
  templateUrl: './abismo.page.html',
  styleUrls: ['./abismo.page.scss'],
})
export class AbismoPage {

  constructor(private navCtrl: NavController) { }

  goBack() {
    this.navCtrl.back();
  }
}
