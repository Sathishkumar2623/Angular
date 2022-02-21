import { Component, OnInit } from '@angular/core';
import { Service } from '../services.service';
import { information } from '../Types/information';

@Component({
  selector: 'app-guest-login',
  templateUrl: './guest-login.component.html',
  styleUrls: ['./guest-login.component.css']
})
export class GuestLoginComponent implements OnInit {

  information: information = {
    cityId: '',
    cityName: '',
    subject: ''
  }
  constructor(private services: Service) { }

  ngOnInit(): void {
  }
  onFormSubmit() {
    this.services.guestlogin(this.information).subscribe(data => {
      if (data.status == 200) {
        alert("ViewDetails")
      }
    })
  }
}