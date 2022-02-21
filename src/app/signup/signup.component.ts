import { Component, OnInit } from '@angular/core';
import { Service } from '../services.service';
import { user } from '../Types/User';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignUpComponent implements OnInit {

  confirmPassword: string = '';
  user: user = {
    firstName: '',
    lastName: '',
    email:'',
    role: '',
    contactNumber: '',
    alternateNumber: '',
    userId: '',
    userName: '',
    password: ''
  }

  constructor(private services: Service) { }

  ngOnInit(): void {
  }

  onFormSubmit() {
    console.log(this.user)
    this.services.postUser(this.user).subscribe((data => {
      data = data;
      console.log(data)
      if (data.status === 201) {
        alert("New user created successfully")

      }
      window.location.href = "/login"
    }));
  }
}
