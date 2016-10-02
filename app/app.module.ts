import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { routing, appRoutingProviders } from "./app.routing";
import { CromProjectModule } from "./crom-views/crom-project.module";
import { AppComponent } from "./app.component";
import { HomePageComponent } from "./home-page.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { ServicesModule } from "./services/services.module";

@NgModule({
    imports: [BrowserModule, HttpModule, routing, CromProjectModule, ServicesModule],
    declarations: [AppComponent, HomePageComponent, NavBarComponent],
    providers: [appRoutingProviders],
    bootstrap: [AppComponent]
})
export class AppModule {
}

