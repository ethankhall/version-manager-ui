import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/toPromise";
import { BaseUrlService } from "./base-url.services";
import { AuthenticationService } from "../authentication.services";
import { Version } from "../../models/crom.models";
import { RepoApiService } from "./repo-api.services";

@Injectable()
export class VersionApiService {
    constructor(private http: Http, private baseUrlService: BaseUrlService, private authService: AuthenticationService) {
    }

    findAllVersions(projectName: string, repoName: String): Promise<AllVersions> {
        return this.http.get(this.versionsUrl(projectName, repoName), { headers: this.authService.createAuthHeaders() })
            .toPromise()
            .then(response => {
                let json = response.json();
                let commits = json.commits as Version[];
                let latest = json.latest as Version;
                return new AllVersions(commits, latest);
            })
            .catch(VersionApiService.handleError);
    }

    private versionsUrl(projectName: string, repoName: String): string {
        return VersionApiService.versionBaseUrl(this.baseUrlService, projectName, repoName) + "s"
    }

    static versionBaseUrl(baseUrlService: BaseUrlService, projectName: string, repoName: String): string {
        return RepoApiService.repoBaseUrl(baseUrlService, projectName, repoName) + "/version"
    }

    private static handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}

export class AllVersions {
    versions: Version[];
    latest: Version;
    constructor(versions: Version[], latest: Version) {
        this.versions = versions;
        this.latest = latest;
    }
}