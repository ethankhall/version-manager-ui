import { Component, OnInit } from "@angular/core";
import { CromProjectService, ProjectDetails } from "./crom-project.services";

@Component({
    moduleId: module.id,
    selector: 'crom-project',
    templateUrl: 'templates/project-list.html'
})
export class CromProjectComponent implements OnInit {
    projects: ProjectDetails[];

    constructor(private cromProjectService: CromProjectService) { }

    getProjects(): void {
        this.cromProjectService.getProjects(0).then(projects => this.projects = projects);
    }

    ngOnInit(): void {
        this.getProjects();
    }
}