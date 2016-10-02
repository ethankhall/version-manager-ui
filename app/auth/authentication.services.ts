import { Injectable } from "@angular/core";
import { Headers } from "@angular/http";
import { CookieService } from "angular2-cookie/services/cookies.service";

@Injectable()
export class AuthenticationService {

    constructor(private cookieService: CookieService) { }

    private getCookie(): string {
        return this.cookieService.get("crom_cookie");
    }

    isLoggedIn(): boolean {
        var cookie = this.getCookie();
        return cookie && cookie.length != 0;
    }

    addAuthHeaders(headers: Headers): void {
        if(!this.isLoggedIn()) {
            return null;
        }

        headers.set("X-AUTH-TOKEN", this.getCookie())
    }
}