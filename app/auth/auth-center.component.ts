import { Component } from "@angular/core";
import { OnInit } from "@angular/core";

import { AuthenticationService } from "./authentication.services";
import { BaseUrlService } from "../rest-api/base-url.services";

@Component({
    moduleId: module.id,
    selector: 'auth-center',
    templateUrl: '/templates/auth-center.html'
})
export class AuthCenterComponent implements OnInit {

    loggedIn: boolean = false;

    constructor(private authService: AuthenticationService, private baseUrl: BaseUrlService){ }

    getGoogleLoginUrl(): string {
        return this.baseUrl.createFullUrl("/auth/google")
    }

    ngOnInit(): void {
        this.loggedIn = this.authService.isLoggedIn()
    }
}