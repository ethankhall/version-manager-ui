import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { BrowserModule } from "@angular/platform-browser";

import { CromProjectComponent } from "./crom-project.component";
import { CromRepoComponent } from "./crom-repo.component";
import { ServicesModule } from "../services/services.module";
import { projectRouting } from "./crom-view.routing";

@NgModule({
    imports: [BrowserModule, HttpModule, ServicesModule, projectRouting],
    declarations: [CromProjectComponent, CromRepoComponent]
})
export class CromProjectModule {}