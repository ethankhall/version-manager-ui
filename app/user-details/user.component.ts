import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { UserProfile, UserService } from "../services/rest-api/user.services";

@Component({
    moduleId: module.id,
    templateUrl: "user.component.html"
})
export class UserComponent implements OnInit {

    user: UserProfile;

    constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) {
    }


    ngOnInit(): void {
        this.userService.getProfile().then(user => this.user = user);
    }
}