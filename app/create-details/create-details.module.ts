import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { BrowserModule } from "@angular/platform-browser";
import { ServicesModule } from "../services/services.module";
import { createRouting} from "./create-details.routing";
import { ProjectCreateComponent } from "./project-create.component";

@NgModule({
    imports: [BrowserModule, HttpModule, ServicesModule, createRouting],
    declarations: [ProjectCreateComponent]
})
export class CreateDetailsModule {}