import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage{


  constructor(private alertCtrl: AlertController) { }

  onClick(){
    this.presentMultipleButtons()
  }

  async presentMultipleButtons() {
    const alert = await this.alertCtrl.create({
      backdropDismiss: false,
      mode: 'ios',
      header: 'A Short Title Is Best',
      subHeader: 'A Sub Header Is Optional',
      message: 'A message should be a short, complete sentence.',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
          console.log('click en ok')
        }
    },
    {
      text: 'Cancelar',
      role: 'cancel',
      cssClass: 'rojo'
    }
  ],
    });

    await alert.present();
  }
  
  async presentAlertPrompt() {
    const alert = await this.alertCtrl.create({
      backdropDismiss: false,
      mode:'ios',
      header: 'Prompt!',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'Your Name'
        },
        {
          name: 'userName',
          type: 'text',
          placeholder: 'User Name'
        },
        {
          name: 'website',
          type: 'url',
          placeholder: 'Your website'
        },
        // input date with min & max
        {
          name: 'datetime',
          type: 'date',
          min: '2017-03-01',
          max: '2018-01-12'
        },
        {
          name: 'age',
          type: 'number',
          placeholder: 'Age'
        },
        {
          name: 'bio',
          type: 'textarea',
          placeholder: 'Bio'
        }
      ],
      buttons: [
        {
          text: 'Ok',
          handler: (data: any) => {
            console.log(data);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'rojo',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }
      ]
    });

    await alert.present();
  }
}