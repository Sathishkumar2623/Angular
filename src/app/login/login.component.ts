import { Component, OnInit } from '@angular/core';
import { Service } from '../services.service';
import { user } from '../Types/User';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Answer } from '../Types/Answer';
import { UtilService } from '../util.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  passwordResetValid = false;
  showModal: boolean = true;
  closeResult = '';

  forgotUserID: Answer = {
    contactNumber: "",
    ans4: "",
    ans5: "",
    ans6: "",
    userId: "",
    ans1: '',
    ans2: '',
    ans3: ''
  }

  resetPassword = {
    password: "",
    confirmPassword: ""
  }

  user: user = {
    firstName: '',
    lastName: '',
    contactNumber: '',
    alternateNumber: '',
    email:'',
    userId: '',
    password: '',
    role: '',
    userName: '',

  }
  constructor(private services: Service, private utilService: UtilService,private modalService: NgbModal) {
    //this.showModal = false;
  
  }

  ngOnInit(): void {
    this.passwordResetValid = false;

  }


  open(content: any) {
    this.modalService.open(content,
      { ariaLabelledBy: 'modal-basic-title' }).result.then((result: any) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason: any) => {
        this.closeResult =
          `Dismissed ${this.getDismissReason(reason)}`;
      });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  onFormSubmit() {
    console.log("here")
    this.services.login(this.user).subscribe(data => {
      //console.log(data.role)
      alert("Logged In")
      document.cookie = "userId=" + this.user.userId;
      document.cookie = "role=" + data.role;
      window.location.href = "/signup"
    }, error => {
      if (error.error.role == "Password") {
        alert("Password is incorrect")
      } else if (error.error.role == "UserId") {
        alert("UserId not found")
      }
    })


  }

  onForgotUserIdSubmit() {
    console.log(this.forgotUserID)
    this.services.getUserIdForgotUserID(this.forgotUserID).subscribe(data => {
      alert("User ID : " + data.userId)
    }, error => {
      alert("Invalid Answers")
    })
  }

  onForgotPasswordSubmit() {
    if (!this.passwordResetValid) {
      this.services.forgotPassword(this.forgotUserID).subscribe(data => {
        this.passwordResetValid = true;
      }, error => {
        alert("Error")
      })
    }
    else {
      //Submit to server
      this.services.changePassword(this.forgotUserID.userId, this.resetPassword.password).subscribe(val => {
        if (val.status == 201) {
          alert("Changed successfully")
        }
      }, error => {
        alert(error.status)
      })
      console.log("Here")
    
    }
  }

}

