import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import {HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './Components/login/login.component';
import { ForgetPasswordComponent } from './Components/forget-password/forget-password.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './Components/main/main.component';
import { HeaderComponent } from './Components/header/header.component';
import { CommanModule } from "./comman/comman.module";


@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        ForgetPasswordComponent,
        NotFoundComponent,
        MainComponent,
        HeaderComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        CommonModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        CommanModule
    ]
})
export class AppModule { }
