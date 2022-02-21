import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { SignUpComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { appRoutes } from './routerconfig';
import { GuestLoginComponent } from './guest-login/guest-login.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SignUpComponent,
    LoginComponent,
    GuestLoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
