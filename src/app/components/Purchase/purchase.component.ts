import { Component, OnInit, Inject } from '@angular/core';


@Component({
  selector: 'paras-purchase',
  templateUrl: './purchase.component.html'
})
export class PurchaseComponent implements OnInit {

  cols: any;
  data: any;
  displayDialog: boolean = false;
  list: any[];

 

  add(){
   this.displayDialog = true;
   this.data =  [ ...this.data, {itemname: '', itemcode: '', hsmcode: '', unitsavailble: ''} ];
  }

  ngOnInit() {
    this.cols = [
      { field: 'itemname', header: 'Item Name' },
      { field: 'itemcode', header: 'Item Code' },
      { field: 'hsmcode', header: 'HSM Code' },
      { field: 'unitsavailble', header: 'Units Available' }
    ];

    this.data = [
      { itemname: 'q', itemcode: 'r', hsmcode: 's', unitsavailble: 't' },
      { itemname: 'q', itemcode: 'r', hsmcode: 's', unitsavailble: 't' },
      { itemname: 'q', itemcode: 'r', hsmcode: 's', unitsavailble: 't' },
    ];
  }
}
