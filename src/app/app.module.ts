import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
/** Angular material modules -start*/
import {MatTabsModule} from '@angular/material/tabs';
/** Angular material modules -end*/
import { AppComponent } from './app.component';
/** Application components   -start*/
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { StockComponent } from './components/Stock/stock.component';
import { SalesComponent } from './components/Sales/sales.component';
import { PurchaseComponent } from './components/Purchase/purchase.component';
/** Application components   -end*/



@NgModule({
  declarations: [
    AppComponent,
    StockComponent,
    SalesComponent,
    PurchaseComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
