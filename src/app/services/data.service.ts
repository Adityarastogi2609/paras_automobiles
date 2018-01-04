import { Item } from './../interfaces/item';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class DataService{


constructor(private http: Http){}

    getPurchaseItemDetails() {
        return this.http.get('assets/data/purchase-itemDetails.json')
                    .toPromise()
                    .then(res => <Item[]> res.json().data)
                    .then(data => { return data; });
    }
 getSalesItemDetails() {
        return this.http.get('assets/data/sales-itemDetails.json')
                    .toPromise()
                    .then(res => <Item[]> res.json().data)
                    .then(data => { return data; });
    }
    getStockItemDetails() {
        return this.http.get('assets/data/stock-itemDetails.json')
                    .toPromise()
                    .then(res => <Item[]> res.json().data)
                    .then(data => { return data; });
    }

     selectPurchaseItems() {
        return this.http.get('assets/data/purchase-itemDetails.json')
                    .toPromise()
                    .then(res => <Item[]> res.json().data)
                    .then(data => { return data; });
    }
    selectSalesItems() {
        return this.http.get('assets/data/sales-itemDetails.json')
                    .toPromise()
                    .then(res => <Item[]> res.json().data)
                    .then(data => { return data; });
    }
    selectStockItems() {
        return this.http.get('assets/data/stock-itemDetails.json')
                    .toPromise()
                    .then(res => <Item[]> res.json().data)
                    .then(data => { return data; });
    }
}