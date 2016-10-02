import { Injectable } from "@angular/core";
import { Http, URLSearchParams, Headers } from "@angular/http";

import "rxjs/add/operator/toPromise";

import { BaseUrlService } from "./base-url.services";
import { AuthenticationService } from "../authentication.services";
import { ProjectDetails } from "../../models/crom.models";

@Injectable()
export class ProjectApiService {
    constructor(private http: Http, private baseUrl: BaseUrlService, private authService: AuthenticationService) {
    }

    getProjects(page: number): Promise<string[]> {
        let params: URLSearchParams = new URLSearchParams();
        params.set("page", page.toString());

        return this.http.get(this.baseUrl.createFullUrl("/api/v1/projects"), {search: params})
            .toPromise()
            .then(response => (response.json().projectDetails as ProjectDescription[]).map(detail => detail.name))
            .catch(ProjectApiService.handleError);
    }

    getProjectDetails(name: String): Promise<ProjectDetails> {
        let headers = this.authService.addAuthHeaders(new Headers());
        return this.http.get(this.baseUrl.createFullUrl("/api/v1/project/" + name), { headers: headers })
            .toPromise()
            .then(response => response.json() as ProjectDetails)
            .catch(ProjectApiService.handleError);
    }

    private static handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}

class ProjectDescription {
    name: String;
}