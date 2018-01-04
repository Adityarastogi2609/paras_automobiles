import { DataService } from './../../services/data.service';
import { Item } from './../../interfaces/item';
import { Component, OnInit, Inject } from '@angular/core';
import { MenuItem } from 'primeng/primeng';


class ItemDetails implements Item {
  constructor(public itemname?, public itemcode?, public hsmcode?, public unitsavailble?) { }
}


@Component({
  selector: 'paras-purchase',
  templateUrl: './purchase.component.html'
})
export class PurchaseComponent implements OnInit {

  cols: any;
  data: any;
  data1:any;
  displayDialog: boolean = false;
  list: any[];
  items: any;
  item: MenuItem[];
  loading: any;
  isNewItem: boolean;
  selectedItem: Item[];
  itemDetails: ItemDetails = new ItemDetails();


  constructor(private dataService: DataService) { }

  ngOnInit() {

    this.loading = true;

    this.dataService.getPurchaseItemDetails()
      .then(data => {
        this.data = data;
        this.loading = false;
      });

    this.cols = [
      { field: 'itemname', header: 'Item Name' },
      { field: 'itemcode', header: 'Item Code'},
      { field: 'hsmcode', header: 'HSM Code' },
      { field: 'unitsavailble', header: 'Units Available'}
    ];}

addItem(e){
  console.log("on add");
  console.log(e);
}

  addDialog() {
    this.isNewItem = true;
    this.displayDialog = true;
    //this.data = [...this.data, { itemname: '.', itemcode: '.', hsmcode: '.', unitsavailble: '.' }];  //add rows in table

  }

  save() {
      console.log(this.itemDetails);
      if(this.isNewItem)
        this.data.push(this.itemDetails);
      //this.itemDetails = null;
  }
}
