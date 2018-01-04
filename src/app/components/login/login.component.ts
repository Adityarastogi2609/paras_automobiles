import { Message } from 'primeng/primeng';
import { UserService } from './../../services/user.service';
import { MatSnackBar,MatSnackBarConfig } from '@angular/material';
import { Router } from '@angular/router';
import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(public snackBar: MatSnackBar, private router: Router, private userService: UserService) { }

  model = new UserService();
  msgs: Message[];
  checked = false;
  addExtraClass: boolean = true;
 
  loginUser(e) {
    //e.preventDefault();
    let config = new MatSnackBarConfig();
    config.horizontalPosition = 'left';
    config.verticalPosition= "top";
    config.extraClasses = this.addExtraClass ? ['custom-class'] : undefined;
    this.snackBar.open("Welcome!","",config);
    setTimeout(()=>{
          this.snackBar.dismiss();
      },1000);
    
    console.log(e);
    var session:any;
    var email = e.target.elements[0].value;
    var password = e.target.elements[1].value;
    
    if(email == 'admin@admin.com' && password == 'admin'){

      this.userService.setUserLoggedin();
      this.router.navigate(['tabs']);

    }

    else {
      this.snackBar.open("Wrong credentials!");
      setTimeout(()=>{
          this.snackBar.dismiss();
      },1000);
    }

  }

}
