import { Purchase } from './../interfaces/purchase';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class PurchaseService{


constructor(private http: Http){}

    getItemDetails() {
        return this.http.get('assets/data/purchase-itemDetails.json')
                    .toPromise()
                    .then(res => <Purchase[]> res.json().data)
                    .then(data => { return data; });
    }

}