import { TabsComponent } from './components/Tabs/tabs.component';
import { UserService } from './services/user.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';



@Injectable()
export class AuthguardGuard implements CanActivate {

    constructor(private userService: UserService, private router: Router) { }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        console.log("Autguard reached");
       
        if(!this.userService.getUserLoggedin()){
            console.log(this.userService.getUserLoggedin());
            this.router.navigate(['login']);
        }

        console.log(this.userService.getUserLoggedin());
        return this.userService.getUserLoggedin()
    }
}