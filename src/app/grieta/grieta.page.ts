import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-grieta',
  templateUrl: './grieta.page.html',
  styleUrls: ['./grieta.page.scss'],
})
export class GrietaPage {

  constructor(private navCtrl: NavController) { }

  goBack() {
    this.navCtrl.back();
  }
}
