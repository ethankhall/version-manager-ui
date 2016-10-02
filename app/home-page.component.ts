import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { CromProjectService } from "./rest-api/crom-project.services";
import { AuthenticationService } from "./auth/authentication.services";
import { UserService } from "./rest-api/user.services";

@Component({
    moduleId: module.id,
    selector: 'home-page',
    templateUrl: '/templates/home-page.html',
})
export class HomePageComponent implements OnInit{

    projects: string[];

    constructor(private router: Router, private cromProjectService: CromProjectService, private userService: UserService,
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