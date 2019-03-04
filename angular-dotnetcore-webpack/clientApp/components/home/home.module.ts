import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./components/home.component";
import { HomeRoutes } from "./home.routes";



@NgModule({
    declarations: [
        HomeComponent
    ],

    imports: [
        CommonModule,
        HomeRoutes
    ],

    exports: [

        HomeComponent
    ]
})

export class HomeModule { }