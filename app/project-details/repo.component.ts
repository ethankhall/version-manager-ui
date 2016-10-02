import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, Params } from "@angular/router";
import { CromProjectService } from "../services/rest-api/crom-project.services";

@Component({
    moduleId: module.id,
    templateUrl: '/templates/project-details/repo.html'
})
export class RepoComponent implements OnInit {

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