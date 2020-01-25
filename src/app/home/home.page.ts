import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  ScannedCode = null;

  constructor(private barcodeScanner: BarcodeScanner) {}

  Scan()
  {
    this.barcodeScanner.scan().then(barcodeData => {
      this.ScannedCode = barcodeData.text;
    })

}
}
