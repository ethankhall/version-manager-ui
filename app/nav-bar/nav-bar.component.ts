import { Component } from "@angular/core";
import { OnInit } from "@angular/core";

import { AuthenticationService } from "../services/authentication.services";
import { BaseUrlService } from "../services/rest-api/base-url.services";

@Component({
    moduleId: module.id,
    selector: 'nav-bar',
    templateUrl: '/templates/nav-bar.html'
})
export class NavBarComponent implements OnInit {

    loggedIn: boolean = false;

    constructor(private authService: AuthenticationService, private baseUrl: BaseUrlService){ }

    getGoogleLoginUrl(): string {
        return this.baseUrl.createFullUrl("/auth/google")
    }

    logout(): void {
        this.authService.logout();
        this.loggedIn = false;
    }

    ngOnInit(): void {
        this.loggedIn = this.authService.isLoggedIn()
    }
}