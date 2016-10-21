import { Component } from "@angular/core/src/metadata/directives";
import { ProjectApiService } from "../services/rest-api/project-api.services";

@Component({
    moduleId: module.id,
    templateUrl: "project-create.component.html"
})
export class ProjectCreateComponent {

    projectName: String = "";

    constructor(private projectService: ProjectApiService) {
    }


    onSubmit(): void {
        this.projectService.createProject(this.projectName);
    }
}