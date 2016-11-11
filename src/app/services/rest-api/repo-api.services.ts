import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/toPromise";
import { BaseUrlService } from "./base-url.services";
import { AuthenticationService } from "../authentication.services";
import { RepoDetails } from "../../models/crom.models";

@Injectable()
export class RepoApiService {
    constructor(private http: Http, private baseUrlService: BaseUrlService, private authService: AuthenticationService) {
    }

    getRepoDetails(projectName: string, repoName: String): Promise<RepoDetails> {
        return this.http.get(this.baseUrl(projectName, repoName), { headers: this.authService.createAuthHeaders()})
            .toPromise()
            .then(response => (response.json() as RepoDetails))
            .catch(RepoApiService.handleError);
    }

    private baseUrl(projectName: string, repoName: String): string {
        return RepoApiService.repoBaseUrl(this.baseUrlService, projectName, repoName);
    }

    static repoBaseUrl(baseUrlService: BaseUrlService, projectName: string, repoName: String): string {
        return baseUrlService.createFullUrl(`/api/v1/project/${projectName}/repo/${repoName}`);
    }

    private static handleError(error: any): Promise<any> {
        console.error("An error occurred", error);
        return Promise.reject(error.message || error);

    }
}