import { PDatatableComponent } from './components/p-datatable/p-datatable.component';
import { RoutingModule } from './routing.module';
import { UserService } from './user.service';
import { AuthguardGuard } from './authguard.guard';

import { LoginComponent } from './components/login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
/** Angular material modules -start*/
import { MaterialModule } from './material.module';
/** Angular material modules -end*/
import { AppComponent } from './app.component';

/** Application components   -start*/
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { StockComponent } from './components/Stock/stock.component';
import { SalesComponent } from './components/Sales/sales.component';
import { PurchaseComponent} from './components/Purchase/purchase.component';
import { TabsComponent } from './components/Tabs/tabs.component';
import {DataTableModule,SharedModule,GrowlModule,DialogModule} from 'primeng/primeng';
/** Application components   -end*/



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TabsComponent,
    StockComponent,
    SalesComponent,
    PurchaseComponent,
    PDatatableComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AngularFontAwesomeModule,
    MaterialModule,
    RoutingModule,
    DataTableModule,
    SharedModule,
    GrowlModule,
    DialogModule

  ],
  providers: [AuthguardGuard, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
