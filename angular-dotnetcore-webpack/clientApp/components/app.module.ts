import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';




@NgModule({
    declarations: [
        AppComponent
    ],

    imports: [
        BrowserModule,
        AppRoutes,
        SharedModule,
        HomeModule

    ],

    

    bootstrap: [AppComponent]

})

export class AppModule { }