import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { BaseUrlService } from "./base-url.services";
import { AuthenticationService } from "../authentication.services";
import "rxjs/add/operator/toPromise";

@Injectable()
export class UserService {
    constructor(private http: Http, private baseUrl: BaseUrlService, private authService: AuthenticationService) {
    }

    getUserWatches(): Promise<string[]> {
        var headers = this.authService.addAuthHeaders(new Headers());
        return this.http.get(this.baseUrl.createFullUrl("/api/v1/user/watches"), { headers: headers })
            .toPromise()
            .then(request => (request.json().watches as Watch[]).map(watch => watch.projectName))
            .catch(UserService.handleError)
    }

    private static handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}

class Watch {
    projectName: string;
}