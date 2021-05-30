import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';
import { User } from './../interfaces/user.interface';
import { UserService } from './../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  errorMsg:string
  constructor(private as:AuthService , private us:UserService , private router:Router) { }

  ngOnInit(): void {
  }

  signUp(form) {
    let data:User = form.value;
    this.as.signUp(data.email, data.password)
    .then(result => {
      this.errorMsg = '',
      this.us.addNewUser(result.user.uid, data.name).then(() => {
        this.router.navigate(['/']);
      })
    })
    .catch( err => {
      this.errorMsg = err.message
    })

  }

}
