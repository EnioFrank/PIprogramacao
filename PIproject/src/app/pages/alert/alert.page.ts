import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor(private alertCrtl: AlertController) { }

  ngOnInit() {
  }

  async alert() {
    const alert = await this.alertCrtl.create({
      cssClass: 'my-custom-class',
      header: 'Alerta',
      subHeader: 'Atencao',
      message: 'Esta e uma mensagem de Alerta!!',
      buttons: ['OK']
    });

    await alert.present();
  }

  async alertaMultiplosBotoes() {
    const alert = await this.alertCrtl.create({
      cssClass: 'my-custom-class',
      header: 'Alerta multiplos',
      subHeader: 'Multiplos botoes',
      message: 'Este e um alerta com multiplos botoes.',
      buttons: ['Cancelar', 'Abrir', 'Excluir']
    });

    await alert.present();
  }
}