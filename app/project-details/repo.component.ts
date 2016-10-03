import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, Params } from "@angular/router";
import { RepoApiService } from "../services/rest-api/repo-api.services";
import { RepoDetails, Version } from "../models/crom.models";
import { VersionApiService } from "../services/rest-api/version-api.services";

@Component({
    moduleId: module.id,
    templateUrl: "repo.component.html"
})
export class RepoComponent implements OnInit {

    projectName: string;
    repoName: string;
    repoDetails: RepoDetails;
    latestVersion: Version;

    constructor(private route: ActivatedRoute, private router: Router, private repoApi: RepoApiService,
                private versionApi: VersionApiService) {
    }

    parentRoute(): void {
        this.router.navigate(["../"], { relativeTo: this.route });
    }

    toVersion(id: String): void {
        this.router.navigate([id], { relativeTo: this.route });
    }

    ngOnInit(): void {
        this.route.parent.params.forEach((params: Params) => {
            this.projectName = params["projectName"];
        });
        this.route.params.forEach((params: Params) => {
            this.repoName = params["repoName"];
        });

        this.repoApi.getRepoDetails(this.projectName, this.repoName).then(details => this.repoDetails = details);

        this.versionApi.findAllVersions(this.projectName, this.repoName).then(details => this.latestVersion = details.latest);
    }
}