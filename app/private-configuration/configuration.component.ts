import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { UserProfile, UserService } from "../services/rest-api/user.services";
import { BaseUrlService } from "../services/rest-api/base-url.services";

@Component({
    moduleId: module.id,
    templateUrl: "configuration.component.html"
})
export class ConfigurationComponent implements OnInit {

    config: Config;
    isForced: boolean;

    constructor(private route: ActivatedRoute, private router: Router, private baseUrlService: BaseUrlService) {
    }

    onSubmit(): void {
        this.baseUrlService.forceUrl(this.config.api)
    }

    reset(): void {
        this.baseUrlService.reset();
    }

    ngOnInit(): void {
        this.config = new Config(this.baseUrlService.getBaseUrl());
        this.isForced = this.baseUrlService.isForced();
    }
}

export class Config {

    api: string;
    constructor(api: string) {
        this.api = api;
    }

}