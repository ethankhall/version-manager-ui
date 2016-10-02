import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, Params } from "@angular/router";
import { RepoApiService } from "../services/rest-api/repo-api.services";
import { RepoDetails, Version } from "../models/crom.models";
import { VersionApiService } from "../services/rest-api/version-api.services";

@Component({
    moduleId: module.id,
    templateUrl: '/templates/project-details/version.html'
})
export class VersionComponent implements OnInit {

    projectName: string;
    repoName: string;
    repoDetails: RepoDetails;
    latestVersion: Version;

    constructor(private route: ActivatedRoute, private router: Router, private repoApi: RepoApiService,
                private versionApi: VersionApiService) {
    }

    toRepo(): void {
        this.router.navigate(["../"], { relativeTo: this.route })
    }

    toProject(): void {
        this.router.navigate(["../../"], { relativeTo: this.route })
    }

    toVersion(id: String): void {

    }

    ngOnInit(): void {
        this.route.parent.params.forEach((params: Params) => {
            this.projectName = params['projectName'];
            this.repoName = params['repoName'];
        });

        this.repoApi.getRepoDetails(this.projectName, this.repoName).then(details => this.repoDetails = details);

        this.versionApi.findAllVersions(this.projectName, this.repoName).then(details => this.latestVersion = details.latest);
    }
}