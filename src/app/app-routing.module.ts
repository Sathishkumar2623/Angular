import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './signup/signup.component';

const routes: Routes = [
{
path:'', component: LoginComponent
},
{
path:'login', component: LoginComponent
},
{
  path:'signup', component: SignUpComponent
}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
