import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  unpairedDevices: any = [];
  pairedDevices: any;
  gettingDevices: boolean;

  constructor(
    private alertCtrl: AlertController,
    private bluetoothSerial: BluetoothSerial
    ) {
      this.bluetoothSerial.enable();
    }

    startScanning() {
      this.pairedDevices = null;
      this.unpairedDevices = [];
      this.gettingDevices = true;
      this.bluetoothSerial.discoverUnpaired().then((success) => {

        this.gettingDevices = false;

        success.forEach(device => {
          if (this.unpairedDevices.findIndex((dev: any) => dev.id === device.id) === -1) {
           console.log(device.name);
           this.unpairedDevices.push(device);
          }
        });
      },
        (err) => {
          console.log(err);
        });

      this.bluetoothSerial.list().then((success) => {
        console.log(success);
        this.pairedDevices = success;
      },
        (err) => {

        });
    }

    success = (data) => alert(data);
    fail = (error) => alert(error);
    async selectDevice(address: any) {

      const alert = await this.alertCtrl.create({
        message: 'Do you want to connect with?',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Connect',
            handler: () => {
              this.bluetoothSerial.connect(address).subscribe(this.success, this.fail);
            }
          }
        ]
      });
      alert.present();

    }

  async disconnect() {
    const alert = await this.alertCtrl.create({
      message: 'Do you want to Disconnect?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Disconnect',
          handler: () => {
            this.bluetoothSerial.disconnect();
          }
        }
      ]
    });
    alert.present();
  }

  async testPrint(address) {
    const printData = 'This is a test \n\n\n\n Hello Test 123 123 123\n\n\n';

    const xyz = this.bluetoothSerial.connect(address).subscribe(data => {
      this.bluetoothSerial.write(printData).then(async dataz => {
        console.log('WRITE SUCCESS', dataz);

        const mno = await this.alertCtrl.create({
          message: 'Print SUCCESS!',
          buttons: ['Dismiss']
        });
        mno.present();

        xyz.unsubscribe();
      }, async errx => {
        console.log('WRITE FAILED', errx);
        const mno = await this.alertCtrl.create({
          message: 'ERROR ' + errx,
          buttons: ['Dismiss']
        });
        mno.present();
      });
    }, async err => {
      console.log('CONNECTION ERROR', err);
      const mno = await this.alertCtrl.create({
        message: 'ERROR ' + err,
        buttons: ['Dismiss']
      });
      mno.present();
    });
  }

  ngOnInit() {
  }

}
