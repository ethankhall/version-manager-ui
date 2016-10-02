import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { ProjectApiService } from "./services/rest-api/project-api.services";
import { AuthenticationService } from "./services/authentication.services";
import { UserService } from "./services/rest-api/user.services";

@Component({
    moduleId: module.id,
    selector: 'home-page',
    templateUrl: '/templates/home-page.html',
})
export class HomePageComponent implements OnInit{

    projects: string[];

    constructor(private router: Router, private cromProjectService: ProjectApiService, private userService: UserService,
                private authService: AuthenticationService) {
    }

    toProject(name: String) {
        this.router.navigate(["/project", name]);
    }

    ngOnInit(): void {
        this.projectsToShow().then(projects => this.projects = projects);
    }

    private projectsToShow(): Promise<string[]> {
        if (this.authService.isLoggedIn()) {
            return this.userService.getUserWatches();
        } else {
            return this.cromProjectService.getProjects(0);
        }
    }
}