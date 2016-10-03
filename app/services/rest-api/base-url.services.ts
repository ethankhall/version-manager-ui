import { Injectable } from "@angular/core";


@Injectable()
export class BaseUrlService {
    private baseUrl: string = "http://localhost:8080";

    constructor() {
        if (!(window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1")) {
            this.baseUrl = "http://api.crom.tech";
        }
    }

    getBaseUrl(): string {
        return this.baseUrl;
    }

    createFullUrl(path: String): string {
        return this.baseUrl + path;
    }
}