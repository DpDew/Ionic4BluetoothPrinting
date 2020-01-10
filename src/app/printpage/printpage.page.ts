import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';

@Component({
  selector: 'app-printpage',
  templateUrl: './printpage.page.html',
  styleUrls: ['./printpage.page.scss'],
})
export class PrintpagePage implements OnInit {

  pairedDevices: any;

  constructor(
    private alertCtrl: AlertController,
    private bluetoothSerial: BluetoothSerial
  ) {
    this.bluetoothSerial.enable();

    this.bluetoothSerial.list().then((success) => {
      console.log(success);
      this.pairedDevices = success;
    },
      (err) => {
        console.log(err);
      });
  }


  async testPrint(address) {
    const printData = '\n\n\n\n this is Demo Test \n\n\n\n';

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

  async printInv(address) {
    const printInvoice = `
    \n*************************\n
    Demo Invoice
    \n
    Address : street city, state
    Email   : demo@demo.com
    \n
    ***************************
    \n
    Item          Qty Sub Total
    ___________________________
    Communication   5  ₹375.00
    ___________________________
    Asset Gathering 3  ₹225.00
    ___________________________
    Development     5  ₹375.00
    ___________________________
              Total  ₹3,644.25
    \n*************************\n`;

    const xyz = this.bluetoothSerial.connect(address).subscribe(data => {
      this.bluetoothSerial.write(printInvoice).then(async dataz => {
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
