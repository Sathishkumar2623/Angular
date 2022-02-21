import { Routes } from '@angular/router';
import { GuestLoginComponent } from './guest-login/guest-login.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './signup/signup.component';



export const appRoutes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'signUp', component: SignUpComponent },
    { path: 'login', component: LoginComponent },
    {path: 'guestlogin',component: GuestLoginComponent}
];