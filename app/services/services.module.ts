import { NgModule } from "@angular/core";

import { AuthenticationService } from "./authentication.services";
import { BaseUrlService } from "./rest-api/base-url.services";
import { UserService } from "./rest-api/user.services";
import { CromProjectService } from "./rest-api/crom-project.services";
import { CookieService } from "angular2-cookie/services/cookies.service";

@NgModule({
    declarations: [],
    providers: [BaseUrlService, UserService, CromProjectService, CookieService, AuthenticationService]
})
export class ServicesModule {}