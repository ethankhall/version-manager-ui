import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";

import { routing } from "./app.routing";

import { CromProjectService } from "./rest-api/crom-project.services";
import { AuthenticationService } from "./auth/authentication.services";
import { CookieService } from "angular2-cookie/services/cookies.service";
import { BaseUrlService } from "./rest-api/base-url.services";

import { AppComponent } from "./app.component";
import { CromProjectComponent } from "./crom-project/crom-project.component";
import { HomePageComponent } from "./home-page.component";
import { AuthCenterComponent } from "./auth/auth-center.component";

@NgModule({
    imports: [BrowserModule, HttpModule, routing],
    declarations: [AppComponent, CromProjectComponent, HomePageComponent, AuthCenterComponent],
    providers: [BaseUrlService, CromProjectService, CookieService, AuthenticationService],
    bootstrap: [AppComponent]
})
export class AppModule {
}

