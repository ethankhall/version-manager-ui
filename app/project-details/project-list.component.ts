import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, Params } from "@angular/router";
import { ProjectApiService } from "../services/rest-api/project-api.services";

@Component({
    moduleId: module.id,
    templateUrl: "project-list.component.html"
})
export class ProjectListComponent implements OnInit {

    projects: string[];

    constructor(private route: ActivatedRoute, private router: Router, private cromProjectService: ProjectApiService) {
    }

    toProject(projectName: string): void {
        this.router.navigate([projectName], { relativeTo: this.route });
    }

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = params["projectName"];
            this.cromProjectService.getProjects(0).then(proj => this.projects = proj);
        });
    }
}