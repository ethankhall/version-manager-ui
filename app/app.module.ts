import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { routing, appRoutingProviders } from "./app.routing";
import { ProjectDetailsModule } from "./project-details/project-details.module";
import { AppComponent } from "./app.component";
import { HomePageComponent } from "./home-page.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { ServicesModule } from "./services/services.module";
import { UserDetailsModule } from "./user-details/user-details.module";

@NgModule({
    imports: [BrowserModule, HttpModule, routing, ProjectDetailsModule, UserDetailsModule, ServicesModule],
    declarations: [AppComponent, HomePageComponent, NavBarComponent],
    providers: [appRoutingProviders],
    bootstrap: [AppComponent]
})
export class AppModule {
}

