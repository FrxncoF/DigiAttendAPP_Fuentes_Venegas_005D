import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
@Component({
  selector: 'app-scan',
  templateUrl: './scan.page.html',
  styleUrls: ['./scan.page.scss'],
})
export class ScanPage implements OnInit {
  isModalOpen= false;
  constructor(private barcodeScanner:BarcodeScanner) { }

  scan(){
    this.barcodeScanner.scan().then((barcodeData)=>{
      alert("barcode data = "+barcodeData.text);
    },(err)=>{
      alert(JSON.stringify(err));
    })
  }

  ngOnInit() {
    
  }
  setOpen(isOpen:boolean) {
    this.isModalOpen = isOpen;
  }
  
}