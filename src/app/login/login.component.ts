import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  login !: FormGroup;
  keepSignedIn = false;
  constructor(private router: Router,private messageService: MessageService) {}

  ngOnInit(){
    this.login = new FormGroup({
      'email' : new FormControl('',[Validators.required]),
      "password" : new FormControl('',[Validators.required])
    })
    
  }
  onLogin() {
    const email = this.login.controls['email'].value;
    const password = this.login.controls['password'].value;
    if(!this.login.valid){
      if(password === '' && email === ''){
        alert("Enter your Email and Password!")
      }
      else if(email === ''){
        alert("Enter your Email!")
      }
      else if(password === ''){
        alert("Enter your Password!")
      }
    }else{
      this.router.navigate(['/']);

    }
  }

}
