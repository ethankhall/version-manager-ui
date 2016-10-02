import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { BrowserModule } from "@angular/platform-browser";

import { ProjectComponent } from "./project.component";
import { RepoComponent } from "./repo.component";
import { ServicesModule } from "../services/services.module";
import { projectRouting } from "./project-details.routing";
import { VersionComponent } from "./version.component";

@NgModule({
    imports: [BrowserModule, HttpModule, ServicesModule, projectRouting],
    declarations: [ProjectComponent, RepoComponent, VersionComponent]
})
export class ProjectDetailsModule {}