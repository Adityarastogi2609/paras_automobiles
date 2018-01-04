import { LoginComponent } from './components/login/login.component';
import { TabsComponent } from './components/Tabs/tabs.component';
import { AuthguardGuard } from './authguard.guard';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'tabs', component: TabsComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class RoutingModule{}