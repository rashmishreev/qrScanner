import { Component, Input } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @Input() scannedCode= '' +''+ '';

  constructor(private barcodeScanner: BarcodeScanner) {}

  Scan()
  {
    this.barcodeScanner
      .scan()
      .then(barcodeData => {
        alert("Barcode Scanned");
        this.scannedCode = barcodeData.text +''+ barcodeData.format;
      })
      .catch(err => {
        console.log("Error", err);
      });
  }
}
