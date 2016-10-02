import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, Params } from "@angular/router";

import { CromProjectService } from "../rest-api/crom-project.services";
import { ProjectDetails } from "../models/crom.models";

@Component({
    moduleId: module.id,
    selector: 'crom-project',
    templateUrl: '/templates/project-details.html'
})
export class CromProjectComponent implements OnInit {

    projectDetails: ProjectDetails;

    constructor(private route: ActivatedRoute, private router: Router, private cromProjectService: CromProjectService) {
    }

    toRepo(repoName: string): void {
        this.router.navigate([repoName], {relativeTo: this.route})
    }

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = params['projectName'];
            this.cromProjectService.getProjectDetails(id).then(proj => this.projectDetails = proj);
        });
    }
}