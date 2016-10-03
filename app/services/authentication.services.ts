import { Injectable } from "@angular/core";
import { Headers } from "@angular/http";
import { CookieService } from "angular2-cookie/services/cookies.service";

@Injectable()
export class AuthenticationService {

    private COOKIE_NAME = "crom_cookie";

    constructor(private cookieService: CookieService) {
    }

    private getCookie(): string {
        return this.cookieService.get(this.COOKIE_NAME);
    }

    isLoggedIn(): boolean {
        let cookie = this.getCookie();
        return cookie && cookie.length !== 0;
    }

    logout(): void {
        this.cookieService.remove(this.COOKIE_NAME);
    }

    addAuthHeaders(headers: Headers): Headers {
        if (!this.isLoggedIn()) {
            return null;
        }

        headers.set("X-AUTH-TOKEN", this.getCookie());
        return headers;
    }

    createAuthHeaders(): Headers {
        return this.addAuthHeaders(new Headers());
    }
}