import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, Params } from "@angular/router";

import { ProjectApiService } from "../services/rest-api/project-api.services";
import { ProjectDetails } from "../models/crom.models";

@Component({
    moduleId: module.id,
    selector: "crom-project",
    templateUrl: "project.component.html"
})
export class ProjectComponent implements OnInit {

    projectDetails: ProjectDetails;

    constructor(private route: ActivatedRoute, private router: Router, private cromProjectService: ProjectApiService) {
    }

    toRepo(repoName: string): void {
        this.router.navigate([repoName], { relativeTo: this.route });
    }

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = params["projectName"];
            this.cromProjectService.getProjectDetails(id).then(proj => this.projectDetails = proj);
        });
    }
}