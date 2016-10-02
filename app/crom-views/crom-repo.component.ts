import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, Params } from "@angular/router";
import { CromProjectService } from "../rest-api/crom-project.services";

@Component({
    moduleId: module.id,
    templateUrl: '/templates/project-details.html'
})
export class CromRepoComponent implements OnInit {

    projectName: string;
    repoName: string;

    constructor(private route: ActivatedRoute, private router: Router, private cromProjectService: CromProjectService) {
    }

    toRepo(repoName: string): void {
        // this.router.navigate("")
    }

    ngOnInit(): void {
        this.route.parent.params.forEach((params: Params) => {
            this.projectName = params['projectName'];
        });
        this.route.params.forEach((params: Params) => {
            this.repoName = params['repoName'];
        });
    }
}